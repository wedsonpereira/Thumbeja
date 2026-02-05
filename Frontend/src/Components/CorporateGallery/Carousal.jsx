import * as React from "react"
import { Card, CardContent } from "@/Components/ui/card"

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/Components/ui/carousel"
import { ImageList, useMediaQuery } from "@mui/material";
import ImageListItem from '@mui/material/ImageListItem';
import { useEffect } from "react";
import axios from "axios";
import Autoplay from "embla-carousel-autoplay"
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
// import {useState} from "react";

import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
    PaginationEllipsis,
} from "@/Components/ui/pagination"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export function CarouselBox({ api, animation }) {

    const FolderID = "1Q_mglxwrc3FR-uMfIOBKC01tijM9SLuO"
    const url = `https://www.googleapis.com/drive/v3/files?q='${FolderID}'+in+parents+and+mimeType+contains+'image/'&fields=files(id,name,mimeType,description,thumbnailLink)&key=${api}`

    const [data, setData] = React.useState([]);


    useEffect(() => {
        axios.get(url).then((response) => {
            setData(response.data.files);
        })
            .catch(console.error);
    }, [data]);

    return (
        <Carousel className={`lg:w-[70%] h-[40vh] lg:h-[44rem] p-4 ${animation}`} style={{ marginInline: "auto" }}
            plugins={[Autoplay({ delay: 3000 })]}>
            <CarouselContent className="h-full items-stretch">
                {
                    data.map((item, index) => {
                        return (
                            <CarouselItem className="h-full min-h-0 p-0 " key={index}>
                                <Card className="h-full p-0 border-0">
                                    <CardContent className="h-full p-0">
                                        <img className="w-full h-full object-cover "
                                            src={`https://drive.google.com/thumbnail?id=${item.id}&sz=w1200`} alt="" />
                                    </CardContent>
                                </Card>
                            </CarouselItem>
                        )
                    })
                }
            </CarouselContent>
            <CarouselPrevious className="bottom-8 left-15" />
            <CarouselNext className="bottom-8 right-15" />
        </Carousel>

    )
}

// 'https://drive.google.com/thumbnail?id=${item.id}&sz=w1200`

export function MultiCards({ data, animation, Imagesetter, currentPage, triggerRef }) {

    const isXs = useMediaQuery("(max-width:640px)");
    const isSm = useMediaQuery("(max-width:768px)");
    const isMd = useMediaQuery("(max-width:1024px)");
    const containerRef = React.useRef(null);


    const cols = isXs ? 2 : isSm ? 4 : isMd ? 4 : 4

    const { setImage } = Imagesetter

    useGSAP(() => {
        if (!containerRef.current || data.length === 0) return;

        const ctx = gsap.context(() => {
            const items = gsap.utils.toArray(`.${animation}`);
            if (items.length === 0) return;

            const triggerEl = triggerRef?.current || containerRef.current;

            gsap.set(items, { opacity: 0, y: 30 });
            gsap.to(items, {
                ease: "power1.out",
                opacity: 1,
                y: 0,
                duration: 0.5,
                stagger: 0.05,
                scrollTrigger: {
                    trigger: triggerEl,
                    start: "top bottom-=200", // Triggers when section is 200px into viewport
                    end: "bottom top",
                    toggleActions: "play complete none reverse", // play on enter, complete on leave, none on re-enter, reverse on leave-back
                },
            });
        }, containerRef);

        ScrollTrigger.refresh();

        return () => ctx.revert();
    }, { scope: containerRef, dependencies: [currentPage, data.length] });

    return (
        <ImageList
            ref={containerRef}
            variant={"standard"}
            gap={10}
            cols={cols}
            className={"w-full lg:w-[90%] m-auto lg:!p-10 sm:px-3 box-border border-blue-800 "}
        >
            {data.map((item, i) => {
                return (
                    <ImageListItem key={i} onClick={
                        () => {
                            setImage({ image: item.id, isVisible: true })
                            document.body.style.overflow = "hidden"
                        }
                    }>
                        <img src={`https://drive.google.com/thumbnail?id=${item.id}&sz=w1200`} alt="just image"
                            className={`rounded-2xl ${animation}`} />
                    </ImageListItem>
                )
            })}
        </ImageList>
    )
}

export function ImageModel({ Imagesetter }) {
    const { image, setImage } = Imagesetter;
    const [zoom, setZoom] = React.useState(1);
    const [origin, setOrigin] = React.useState({ x: 50, y: 50 });


    const clamp = (value, min, max) => Math.min(Math.max(value, min), max);
    const handleWheel = (event) => {
        // event.preventDefault();
        const rect = event.currentTarget.getBoundingClientRect();
        const x = ((event.clientX - rect.left) / rect.width) * 100;
        const y = ((event.clientY - rect.top) / rect.height) * 100;
        setOrigin({ x, y });
        const delta = event.deltaY;
        const step = 0.08;
        const direction = delta > 0 ? -1 : 1; // wheel down -> zoom out, up -> zoom in
        setZoom((z) => clamp(z + direction * step, 1, 3));
    };
    return (
        <div
            className={`fixed inset-0 z-[9999] ${image.isVisible ? "flex backdrop-brightness-25" : "hidden"} items-center justify-center text-white backdrop-blur-sm`}>
            <div className={"relative bg-white shadow-black shadow-2xl rounded-2xl overflow-hidden"}>
                <img
                    src={`https://drive.google.com/thumbnail?id=${image.image}&sz=w1200`}
                    alt=""
                    onWheel={handleWheel}
                    style={{
                        transform: `scale(${zoom})`,
                        transformOrigin: `${origin.x}% ${origin.y}%`,
                        transition: "transform 80ms linear"
                    }}
                />
            </div>
            <FontAwesomeIcon
                icon={faCircleXmark}
                style={{ color: "white" }}
                size={"2xl"}
                className={"absolute z-[10] right-4 top-4 p-2 hover:scale-110 transition lg:right-10 lg:top-6"}
                onClick={() => {
                    setImage({ image: "", isVisible: false })
                    document.body.style.overflow = "visible"
                }}
            />
        </div>
    )
}


export const ShadCnPagination = ({ end, currentPage, totalPages, onPageChange }) => {
    const buildPages = () => {
        if (totalPages <= 7) {
            return Array.from({ length: totalPages }, (_, i) => i + 1);
        }

        const pages = [1];
        const start = Math.max(2, currentPage - 1);
        const endPage = Math.min(totalPages - 1, currentPage + 1);

        if (start > 2) pages.push("ellipsis-left");
        for (let i = start; i <= endPage; i += 1) pages.push(i);
        if (endPage < totalPages - 1) pages.push("ellipsis-right");
        pages.push(totalPages);

        return pages;
    };

    const pages = buildPages();
    const isPrevDisabled = currentPage <= 1;
    const isNextDisabled = currentPage >= totalPages;

    const handlePageClick = (event, page) => {
        event.preventDefault();
        if (page === currentPage) return;
        onPageChange(page);
    };

    return (
        <div className={`w-[90%] mt-5 h-[4rem] flex  justify-end ${end}  m-auto  `}>
            <Pagination className={"text-white w-auto mx-0 h-full top-0 bg-black/70 rounded-xl p-2 "}>
                <PaginationContent>
                    <PaginationItem>
                        <PaginationPrevious
                            href="#"
                            className={isPrevDisabled ? "pointer-events-none opacity-50" : ""}
                            onClick={(event) => {
                                event.preventDefault();
                                if (!isPrevDisabled) onPageChange(currentPage - 1);
                            }}
                        />
                    </PaginationItem>
                    {pages.map((page, index) => {
                        if (typeof page !== "number") {
                            return (
                                <PaginationItem key={`${page}-${index}`}>
                                    <PaginationEllipsis />
                                </PaginationItem>
                            );
                        }

                        return (
                            <PaginationItem key={page}>
                                <PaginationLink className={page === currentPage ? "text-black" : "text-white"}
                                    href="#"
                                    isActive={page === currentPage}
                                    onClick={(event) => handlePageClick(event, page)}
                                >
                                    {page}
                                </PaginationLink>
                            </PaginationItem>
                        );
                    })}
                    <PaginationItem>
                        <PaginationNext
                            href="#"
                            className={isNextDisabled ? "pointer-events-none opacity-50" : ""}
                            onClick={(event) => {
                                event.preventDefault();
                                if (!isNextDisabled) onPageChange(currentPage + 1);
                            }}
                        />
                    </PaginationItem>
                </PaginationContent>
            </Pagination>
        </div>
    );
};
