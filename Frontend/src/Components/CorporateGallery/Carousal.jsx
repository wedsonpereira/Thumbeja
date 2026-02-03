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
import {useEffect} from "react";
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
export function CarouselBox({api,animation}) {


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
    const [data, setData] = React.useState([]);


    const url = `https://www.googleapis.com/drive/v3/files?q='${FolderID}'+in+parents+and+mimeType+contains+'image/'&fields=files(id,name,mimeType,description,thumbnailLink)&key=${api}`

    useEffect(() => {
        axios.get(url).then((response) => {
            setData(response.data.files);
        })
            .catch(console.error);
    }, []);

    return (
        <Carousel  className={`w-[70%] h-[44rem] p-4 ${animation}`} style={{ marginInline:"auto"}}
                   plugins={[Autoplay({delay: 3000})]}>
            <CarouselContent className="h-full items-stretch" >
                {
                    data.map((item, index) => {
                        return (
                            <CarouselItem className="h-full min-h-0 p-0" key={index}>
                                <Card className="h-full p-0 border-0">
                                    <CardContent className="h-full p-0">
                                        <img className="w-full h-full object-cover" src={`https://drive.google.com/thumbnail?id=${item.id}&sz=w1200`} alt=""/>
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


export function MultiCards({data,animation}) {

    const isXs = useMediaQuery("(max-width:640px)");
    const isSm = useMediaQuery("(max-width:768px)");
    const isMd = useMediaQuery("(max-width:1024px)");


    const cols = isXs ? 1 : isSm ? 2 : isMd ? 3 : 6

    return (
        <ImageList variant={"masonry"} gap={10} cols={cols} className={"!overflow-hidden"}>
            {data.map((item, i) => {
                return (
                    <ImageListItem key={i}>
                        <img src={`https://drive.google.com/thumbnail?id=${item.id}&sz=w1200`} alt="just image" className={`rounded-2xl ${animation}`}/>
                    </ImageListItem>
                )
            })}
        </ImageList>
    )
}

export function ImageModel(){

    return(
        <dialog className={"border-1 h-[25rem] w-[50rem] bg-red-400 z-100 absolute"}>
            Motherboard
        </dialog>
    )
}



 export const ShadCnPagination = () => {
    return (
        <div className={"w-full items-center flex mt-5 justify-center h-[6rem] bg-slate-800 "}>
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





