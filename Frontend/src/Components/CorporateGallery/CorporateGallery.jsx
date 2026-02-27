import React, { useEffect, useRef, useState } from 'react';
import Header from "../header/Header.jsx";
import "./Corporate.css";
import Footer from "../Footer/Footer.jsx";
import { FilmstripCarousel, GalleryGrid, ImageModel, ShadCnPagination } from "./Carousal.jsx";
import axios from "axios";
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import SEO from "../SEO/SEO.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImages, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { TeamHero, TeamCards, FeaturesIntro, BentoGrid } from "./Team.jsx";
import VisionBanner from "./VisionBanner.jsx";


const DriveAPIKEY = import.meta.env.VITE_GOOGLE_DRIVE_API_KEY;
const FolderID = import.meta.env.VITE_GOOGLE_DRIVE_FOLDER_ID;
const url = `https://www.googleapis.com/drive/v3/files?q='${FolderID}'+in+parents+and+mimeType+contains+'image/'&fields=files(id,name,mimeType,description,thumbnailLink)&key=${DriveAPIKEY}`;

gsap.registerPlugin(ScrollTrigger, useGSAP);

/* Hero background — uses the first gallery image once loaded, else a fallback */
const FALLBACK_BG = "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070&auto=format&fit=crop";

const CorporateGallery = () => {
    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [heroBg, setHeroBg] = useState(FALLBACK_BG);
    const wrapperRef = useRef(null);
    const galleryRef = useRef(null);
    const filmstripRef = useRef(null);
    const pageSize = 20;

    const [image, setImage] = useState({ image: "", isVisible: false });

    useEffect(() => {
        axios.get(url)
            .then(r => {
                if (r.data.files?.length > 0) {
                    // Filter out HEIC/HEIF or other unsupported formats
                    const validFiles = r.data.files.filter(f => {
                        const name = (f.name || "").toLowerCase();
                        return !name.endsWith('.heic') && !name.endsWith('.heif') && !name.endsWith('.mp4') && !name.endsWith('.mov');
                    });

                    setData(validFiles);

                    if (validFiles.length > 0) {
                        // use a random image from the gallery as the hero backdrop
                        const pick = validFiles[Math.floor(Math.random() * Math.min(10, validFiles.length))];
                        setHeroBg(`https://lh3.googleusercontent.com/d/${pick.id}=w2000`);
                    }
                } else {
                    setData([]);
                }
            })
            .catch(console.error);
    }, []);

    /* ── Hero entrance ── */
    useGSAP(() => {
        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
        tl.from(".cg-anim-eyebrow", { opacity: 0, y: -16, duration: 0.6 })
            .from(".cg-anim-title", { opacity: 0, y: 28, duration: 0.8 }, "-=0.3")
            .from(".cg-anim-desc", { opacity: 0, y: 16, duration: 0.6 }, "-=0.4")
            .from(".cg-anim-ctas", { opacity: 0, y: 14, duration: 0.5 }, "-=0.3")
            .from(".cg-anim-stat", { opacity: 0, y: 10, stagger: 0.1, duration: 0.4 }, "-=0.2")
            .from(".cg-anim-scroll", { opacity: 0, duration: 0.5 }, "-=0.1");
    }, { scope: wrapperRef });

    /* ── Filmstrip animation — simple slide only, no opacity ── */
    useGSAP(() => {
        gsap.from(".cg-fs-anim", {
            y: 20, stagger: 0.1, duration: 0.6, ease: "power2.out",
            scrollTrigger: {
                trigger: filmstripRef.current,
                start: "top bottom",
                toggleActions: "play none none none",
            },
        });
    }, { scope: wrapperRef });

    /* ── Gallery animation — simple slide only, no opacity ── */
    useGSAP(() => {
        if (!galleryRef.current) return;
        gsap.from(".cg-ga-anim", {
            y: 18, stagger: 0.08, duration: 0.55, ease: "power2.out",
            scrollTrigger: {
                trigger: galleryRef.current,
                start: "top bottom",
                toggleActions: "play none none none",
            },
        });
    }, { scope: wrapperRef, dependencies: [data] });

    const totalPages = Math.max(1, Math.ceil(data.length / pageSize));
    const pagedData = data.slice((currentPage - 1) * pageSize, currentPage * pageSize);

    const scrollTo = (ref) => ref.current?.scrollIntoView({ behavior: "smooth" });

    return (
        <>
            <SEO
                title="Corporate Gallery – Thumbeja Publicity"
                description="Explore Thumbeja Publicity's corporate gallery showcasing branding projects, campaigns, and creative highlights."
                keywords="corporate gallery, branding portfolio, marketing projects, Thumbeja Publicity"
                url="https://thumbeja.com/corporate-gallery"
            />

            <div ref={wrapperRef} className="cg-page wrapper overflow-hidden">
                <Header />
                <TeamHero />
                <VisionBanner />
                <FeaturesIntro />
                <TeamCards />
                <BentoGrid />
                <Footer />
            </div>
        </>
    );
};

export default CorporateGallery;
