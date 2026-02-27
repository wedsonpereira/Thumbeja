import * as React from "react";
import { useEffect, useRef, useState } from "react";
import { ImageList, useMediaQuery } from "@mui/material";
import ImageListItem from "@mui/material/ImageListItem";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
    PaginationEllipsis,
} from "@/Components/ui/pagination";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faExpand } from "@fortawesome/free-solid-svg-icons";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";

gsap.registerPlugin(ScrollTrigger, useGSAP);


/* ═══════════════════════════════════════════════
   FILMSTRIP CAROUSEL
   A wide horizontal auto-scrolling filmstrip
════════════════════════════════════════════════ */
export function FilmstripCarousel({ data = [] }) {
    const items = data;
    const [emblaRef, emblaApi] = useEmblaCarousel(
        { loop: true, align: "start", dragFree: true },
        [Autoplay({ delay: 2800, stopOnInteraction: false })]
    );
    const [selectedIndex, setSelectedIndex] = useState(0);

    useEffect(() => {
        if (!emblaApi) return;
        const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
        emblaApi.on("select", onSelect);
        return () => emblaApi.off("select", onSelect);
    }, [emblaApi]);

    const totalDots = Math.min(5, items.length);
    const activeDot = totalDots > 0 ? selectedIndex % totalDots : -1;

    return (
        <>
            <div className="cg-filmstrip__carousel" ref={emblaRef}>
                <div className="cg-filmstrip__track" style={{ paddingLeft: "clamp(1.5rem,5vw,5rem)" }}>
                    {items.map((item, i) => (
                        <div className="cg-filmstrip__slide" key={i}>
                            <div className="cg-filmstrip__slide-inner">
                                <img
                                    src={`https://lh3.googleusercontent.com/d/${item.id}=w800`}
                                    alt={item.name || "gallery image"}
                                    loading="lazy"
                                />
                                {item.name && (
                                    <span className="cg-filmstrip__slide-label">{item.name}</span>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Controls bar */}
            <div className="cg-filmstrip__controls">
                <div className="cg-filmstrip__progress">
                    {Array.from({ length: totalDots }).map((_, i) => (
                        <div
                            key={i}
                            className={`cg-filmstrip__dot ${i === activeDot ? "cg-filmstrip__dot--active" : ""}`}
                        />
                    ))}
                </div>
                <div className="cg-filmstrip__arrows">
                    <button
                        className="cg-filmstrip__arrow"
                        onClick={() => emblaApi?.scrollPrev()}
                        aria-label="Previous"
                    >
                        ←
                    </button>
                    <button
                        className="cg-filmstrip__arrow"
                        onClick={() => emblaApi?.scrollNext()}
                        aria-label="Next"
                    >
                        →
                    </button>
                </div>
            </div>
        </>
    );
}


/* ═══════════════════════════════════════════════
   GALLERY GRID
   MUI ImageList masonry with styled cards
════════════════════════════════════════════════ */
export function GalleryGrid({ data, Imagesetter, currentPage, triggerRef }) {
    const isXxs = useMediaQuery("(max-width:480px)");
    const isXs = useMediaQuery("(max-width:640px)");
    const isSm = useMediaQuery("(max-width:768px)");
    const isMd = useMediaQuery("(max-width:1200px)");
    const containerRef = useRef(null);
    const { setImage } = Imagesetter;

    const cols = isXxs ? 1 : isXs ? 2 : isSm ? 3 : isMd ? 4 : 5;

    useGSAP(() => {
        if (!containerRef.current || data.length === 0) return;
        const ctx = gsap.context(() => {
            const cards = containerRef.current.querySelectorAll(".cg-gallery-card");
            if (!cards.length) return;
            gsap.set(cards, { y: 28, scale: 0.96 });
            gsap.to(cards, {
                y: 0, scale: 1,
                duration: 0.55, stagger: 0.04, ease: "power2.out",
                scrollTrigger: {
                    trigger: triggerRef?.current || containerRef.current,
                    start: "top bottom-=100",
                    toggleActions: "play none none none",
                },
            });
        }, containerRef);
        ScrollTrigger.refresh();
        return () => ctx.revert();
    }, { scope: containerRef, dependencies: [currentPage, data.length] });

    return (
        <div ref={containerRef} className="cg-gallery__grid-wrap">
            <ImageList
                variant="masonry"
                cols={cols}
                gap={12}
                sx={{ overflow: "visible", width: "100%" }}
            >
                {data.map((item, i) => (
                    <ImageListItem key={i}>
                        <div
                            className="cg-gallery-card"
                            onClick={() => {
                                setImage({ image: item.id, isVisible: true });
                                document.body.style.overflow = "hidden";
                            }}
                        >
                            <img
                                className="cg-gallery-card__img"
                                src={`https://lh3.googleusercontent.com/d/${item.id}=w800`}
                                alt={item.name || "gallery image"}
                                loading="lazy"
                            />
                            <div className="cg-gallery-card__hover">
                                <div className="cg-gallery-card__hover-icon">
                                    <FontAwesomeIcon icon={faExpand} />
                                </div>
                                {item.name && (
                                    <span className="cg-gallery-card__name">{item.name}</span>
                                )}
                            </div>
                        </div>
                    </ImageListItem>
                ))}
            </ImageList>
        </div>
    );
}


/* ═══════════════════════════════════════════════
   IMAGE LIGHTBOX
════════════════════════════════════════════════ */
export function ImageModel({ Imagesetter }) {
    const { image, setImage } = Imagesetter;
    const [zoom, setZoom] = useState(1);
    const [origin, setOrigin] = useState({ x: 50, y: 50 });

    const clamp = (v, min, max) => Math.min(Math.max(v, min), max);

    const handleWheel = e => {
        const rect = e.currentTarget.getBoundingClientRect();
        setOrigin({
            x: ((e.clientX - rect.left) / rect.width) * 100,
            y: ((e.clientY - rect.top) / rect.height) * 100,
        });
        setZoom(z => clamp(z + (e.deltaY > 0 ? -0.08 : 0.08), 1, 3));
    };

    const close = () => {
        setImage({ image: "", isVisible: false });
        setZoom(1);
        document.body.style.overflow = "";
    };

    useEffect(() => () => {
        document.body.style.overflow = "";
    }, []);

    if (!image.isVisible || !image.image) return null;

    return (
        <div className={`cg-lightbox${image.isVisible ? " is-visible" : ""}`} onClick={close}>
            <div className="cg-lightbox__frame" onClick={e => e.stopPropagation()}>
                <img
                    src={`https://lh3.googleusercontent.com/d/${image.image}=w1200`}
                    alt=""
                    onWheel={handleWheel}
                    className="object-contain max-h-[90vh] max-w-[90vw] w-auto h-auto"
                    style={{
                        transform: `scale(${zoom})`,
                        transformOrigin: `${origin.x}% ${origin.y}%`,
                        transition: zoom === 1 ? "transform 300ms ease" : "transform 80ms linear",
                        display: "block",
                    }}
                />
            </div>
            <button
                className="cg-lightbox__close"
                onClick={close}
                aria-label="Close"
            >
                <FontAwesomeIcon icon={faXmark} size="lg" />
            </button>
        </div>
    );
}


/* ═══════════════════════════════════════════════
   PAGINATION
════════════════════════════════════════════════ */
export function ShadCnPagination({ currentPage, totalPages, onPageChange }) {
    const buildPages = () => {
        if (totalPages <= 7) return Array.from({ length: totalPages }, (_, i) => i + 1);
        const pages = [1];
        const start = Math.max(2, currentPage - 1);
        const end = Math.min(totalPages - 1, currentPage + 1);
        if (start > 2) pages.push("el-l");
        for (let i = start; i <= end; i++) pages.push(i);
        if (end < totalPages - 1) pages.push("el-r");
        pages.push(totalPages);
        return pages;
    };

    const pages = buildPages();

    return (
        <div className="cg-pagination">
            <Pagination className="text-white w-auto mx-0">
                <PaginationContent>
                    <PaginationItem>
                        <PaginationPrevious
                            href="#"
                            className={`hover:bg-[#5439a3]/30 text-white ${currentPage <= 1 ? "pointer-events-none opacity-40" : ""}`}
                            onClick={e => { e.preventDefault(); if (currentPage > 1) onPageChange(currentPage - 1); }}
                        />
                    </PaginationItem>
                    {pages.map((page, idx) =>
                        typeof page !== "number" ? (
                            <PaginationItem key={`${page}-${idx}`}>
                                <PaginationEllipsis className="text-white/40" />
                            </PaginationItem>
                        ) : (
                            <PaginationItem key={page}>
                                <PaginationLink
                                    href="#"
                                    isActive={page === currentPage}
                                    className={page === currentPage
                                        ? "bg-[#5439a3] text-white border-[#5439a3]"
                                        : "text-white/60 hover:bg-[#5439a3]/20 hover:text-white"
                                    }
                                    onClick={e => { e.preventDefault(); if (page !== currentPage) onPageChange(page); }}
                                >
                                    {page}
                                </PaginationLink>
                            </PaginationItem>
                        )
                    )}
                    <PaginationItem>
                        <PaginationNext
                            href="#"
                            className={`hover:bg-[#5439a3]/30 text-white ${currentPage >= totalPages ? "pointer-events-none opacity-40" : ""}`}
                            onClick={e => { e.preventDefault(); if (currentPage < totalPages) onPageChange(currentPage + 1); }}
                        />
                    </PaginationItem>
                </PaginationContent>
            </Pagination>
        </div>
    );
}
