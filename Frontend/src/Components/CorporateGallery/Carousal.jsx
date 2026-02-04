import * as React from "react"
import {Card, CardContent} from "@/components/ui/card"

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import {ImageList, useMediaQuery} from "@mui/material";
import ImageListItem from '@mui/material/ImageListItem';
import {useEffect, useState} from "react";
import axios from "axios";
import Autoplay from "embla-carousel-autoplay"
// import {useState} from "react";

import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleXmark} from "@fortawesome/free-solid-svg-icons";
import {isVisible} from "bootstrap/js/src/util/index.js";

export function CarouselBox({api, animation, dummydata}) {


    // const [api, setApi] = useState(null);

    // const [current, setCurrent] = React.useState(0)
    // const [count, setCount] = React.useState(0)

    // React.useEffect(() => {
    //     if (!api) {
    //         return
    //     }
    //
    //     setCount(api.scrollSnapList().length)
    //     setCurrent(api.selectedScrollSnap() + 1)
    //
    //     api.on("select", () => {
    //         setCurrent(api.selectedScrollSnap() + 1)
    //     })
    // }, [api])


    // useEffect(() => {
    //     console.log(data)
    // }, [data]);
    const FolderID = "1Q_mglxwrc3FR-uMfIOBKC01tijM9SLuO"
    const [data, setData] = React.useState(dummydata);


    const url = `https://www.googleapis.com/drive/v3/files?q='${FolderID}'+in+parents+and+mimeType+contains+'image/'&fields=files(id,name,mimeType,description,thumbnailLink)&key=${api}`

    // useEffect(() => {
    //     axios.get(url).then((response) => {
    //         setData(response.data.files);
    //     })
    //         .catch(console.error);
    // }, []);

    return (
        <Carousel className={`lg:w-[70%] h-[40vh] lg:h-[44rem] p-4 ${animation}`} style={{marginInline: "auto"}}
                  plugins={[Autoplay({delay: 3000})]}>
            <CarouselContent className="h-full items-stretch">
                {
                    data.map((item, index) => {
                        return (
                            <CarouselItem className="h-full min-h-0 p-0 " key={index}>
                                <Card className="h-full p-0 border-0">
                                    <CardContent className="h-full p-0">
                                        <img className="w-full h-full object-cover "
                                             src={`${item.imageUrl}?w=800&q=60&auto=format&fit=crop`} alt=""/>
                                    </CardContent>
                                </Card>
                            </CarouselItem>
                        )
                    })
                }
            </CarouselContent>
            <CarouselPrevious className="bottom-8 left-15"/>
            <CarouselNext className="bottom-8 right-15"/>
        </Carousel>

    )
}

// 'https://drive.google.com/thumbnail?id=${item.id}&sz=w1200`

export function MultiCards({data, animation, Imagesetter}) {

    const isXs = useMediaQuery("(max-width:640px)");
    const isSm = useMediaQuery("(max-width:768px)");
    const isMd = useMediaQuery("(max-width:1024px)");


    const cols = isXs ? 2 : isSm ? 3 : isMd ? 3 : 6

    const {img, setImage} = Imagesetter

    return (
        <ImageList variant={"standard"} gap={10} cols={cols} className={"w-full lg:w-[90%] m-auto"}>
            {data.map((item, i) => {
                return (
                    <ImageListItem key={i} onClick={
                        () => {
                            setImage({image: item, isVisible: true})
                            document.body.style.overflow = "hidden"
                        }
                    }>
                        <img src={`${item.imageUrl}?w=800&q=60&auto=format&fit=crop`} alt="just image"
                             className={`rounded-2xl ${animation}`}/>
                    </ImageListItem>
                )
            })}
        </ImageList>
    )
}

export function ImageModel({Imagesetter}) {
    const {image, setImage} = Imagesetter;
    const [zoom, setZoom] = React.useState(1);
    const [origin, setOrigin] = React.useState({x: 50, y: 50});

    const clamp = (value, min, max) => Math.min(Math.max(value, min), max);
    const handleWheel = (event) => {
        event.preventDefault();
        const rect = event.currentTarget.getBoundingClientRect();
        const x = ((event.clientX - rect.left) / rect.width) * 100;
        const y = ((event.clientY - rect.top) / rect.height) * 100;
        setOrigin({x, y});
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
                    src={`${image.image.imageUrl}?w=800&q=60&auto=format&fit=crop`}
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
                style={{color: "white"}}
                size={"2xl"}
                className={"absolute z-[10] right-[20%] top-[45%] p-2 hover:scale-110 transition"}
                onClick={() => {
                    setImage({image: "", isVisible: false})
                    document.body.style.overflow = "visible"
                }}
            />
        </div>
    )
}


export const ShadCnPagination = ({end}) => {
    return (
        <div className={`w-full items-center flex mt-5 justify-center h-[4rem] bg-slate-800 ${end} rounded-xl`}>
            <Pagination className={"text-white "}>
                <PaginationContent>
                    <PaginationItem>
                        <PaginationPrevious href=""/>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink href="#">1</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink href="#">2</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationNext href="#"/>
                    </PaginationItem>
                </PaginationContent>
            </Pagination>
        </div>
    );
};





