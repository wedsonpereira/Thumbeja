import { useState, useMemo, useEffect, useRef, useCallback } from 'react';
import imageData from './data/images';
import './App.css';

const SERVICE_CATEGORIES = [
  { id: 'e-commerce', label: 'e-commerce' },
  { id: 'fashion', label: 'fashion' },
  { id: 'jewelry', label: 'jewelry' },
  { id: 'real-estate', label: 'real estate' }
];

const SUB_CATEGORIES = [
  { id: 'clipping-path', label: 'clipping path' },
  { id: 'retouching', label: 'retouching' },
  { id: 'shadow', label: 'shadow' },
  { id: 'alpha-masking', label: 'alpha masking' }
];

const formatLabel = (value) => value.replace(/-/g, ' ');
const DEFAULT_DESCRIPTION =
  'This is where the visual demonstration or a detailed explanation for the selected subcategory would be displayed, showcasing its capabilities and benefits.';

function App() {
  const [category, setCategory] = useState('e-commerce');
  const [subCategory, setSubCategory] = useState('clipping-path');
  const [imageIndex, setImageIndex] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const sliderRef = useRef(null);
  const animationFrameRef = useRef(null);

  const images = useMemo(() => {
    return imageData[category]?.[subCategory]?.images ?? [];
  }, [category, subCategory]);

  const currentImage = images[imageIndex];
  const hasImages = images.length > 0;

  useEffect(() => {
    setImageIndex(0);
  }, [category, subCategory]);

  useEffect(() => {
    setSliderPosition(50);
  }, [category, subCategory, imageIndex]);

  const clamp = (value) => Math.min(100, Math.max(0, value));

  const updateSliderFromEvent = useCallback((event) => {
    if (!sliderRef.current) return;
    const clientX = event.touches ? event.touches[0].clientX : event.clientX;
    const rect = sliderRef.current.getBoundingClientRect();
    const percentage = ((clientX - rect.left) / rect.width) * 100;

    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }

    animationFrameRef.current = requestAnimationFrame(() => {
      setSliderPosition(clamp(percentage));
    });
  }, []);

  const handlePointerDown = useCallback(
    (event) => {
      setIsDragging(true);
      updateSliderFromEvent(event);
      event.preventDefault();
    },
    [updateSliderFromEvent]
  );

  const handlePointerMove = useCallback(
    (event) => {
      if (!isDragging) return;
      updateSliderFromEvent(event);
    },
    [isDragging, updateSliderFromEvent]
  );

  useEffect(() => {
    if (!isDragging) return undefined;

    const stopDragging = () => setIsDragging(false);
    window.addEventListener('pointermove', handlePointerMove);
    window.addEventListener('pointerup', stopDragging);

    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerup', stopDragging);
    };
  }, [isDragging, handlePointerMove]);

  useEffect(() => {
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  const handleSliderClick = useCallback(
    (event) => {
      updateSliderFromEvent(event);
    },
    [updateSliderFromEvent]
  );

  const handlePrevImage = () => {
    setImageIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNextImage = () => {
    setImageIndex((prev) => Math.min(images.length - 1, prev + 1));
  };

  const displayTitle = currentImage?.title ?? `Demonstration for ${formatLabel(subCategory)}`;
  const displayDescription = currentImage?.description ?? DEFAULT_DESCRIPTION;

  return (
    <>  
      <div className="imaging-main-content">
        <h1 className="imaging-main-title">Our Services</h1>
        <p className="imaging-main-description">
          Explore our wide range of services designed to elevate your business. Select a category to discover how we can help
          you.
        </p>

        <div className="imaging-service-categories" role="tablist" aria-label="Service categories">
          {SERVICE_CATEGORIES.map((service) => (
            <button
              key={service.id}
              className={`imaging-category-btn ${category === service.id ? 'imaging-active' : ''}`}
              onClick={() => setCategory(service.id)}
              type="button"
              role="tab"
              aria-selected={category === service.id}
            >
              {service.label}
            </button>
          ))}
        </div>

        <div className="imaging-divider" role="presentation" />

        <div className="imaging-sub-service-categories" role="tablist" aria-label="Sub services">
          {SUB_CATEGORIES.map((sub) => (
            <button
              key={sub.id}
              className={`imaging-sub-category-btn ${subCategory === sub.id ? 'imaging-active' : ''}`}
              onClick={() => setSubCategory(sub.id)}
              type="button"
              role="tab"
              aria-selected={subCategory === sub.id}
            >
              {sub.label}
            </button>
          ))}
        </div>

        <div className="imaging-image-display-container">
          <button
            className="imaging-nav-arrow imaging-nav-arrow-left"
            type="button"
            onClick={handlePrevImage}
            disabled={!hasImages || imageIndex === 0}
            aria-label="Previous example"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          <div className="imaging-image-wrapper">
            {hasImages ? (
              <div
                className="imaging-before-after-container"
                ref={sliderRef}
                onPointerDown={handlePointerDown}
                onClick={handleSliderClick}
                role="presentation"
              >
                <div className="imaging-before-image-container">
                  <img src={currentImage.before} alt={`${displayTitle} - before`} draggable="false" />
                </div>
                <div
                  className="imaging-after-image-container"
                  style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
                >
                  <img src={currentImage.after} alt={`${displayTitle} - after`} draggable="false" />
                </div>
                <div className="imaging-slider-stick" style={{ left: `${sliderPosition}%` }}>
                  <div className="imaging-slider-handle" />
                </div>
              </div>
            ) : (
              <div className="imaging-empty-state">
                <div className="imaging-empty-icon" aria-hidden="true">
                  🖼️
                </div>
                <p>No images available for this subcategory.</p>
              </div>
            )}

            <h3 className="imaging-image-title">{displayTitle}</h3>
            <p className="imaging-image-description">{displayDescription}</p>
          </div>

          <button
            className="imaging-nav-arrow imaging-nav-arrow-right"
            type="button"
            onClick={handleNextImage}
            disabled={!hasImages || imageIndex >= images.length - 1}
            aria-label="Next example"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
}

export default App;

