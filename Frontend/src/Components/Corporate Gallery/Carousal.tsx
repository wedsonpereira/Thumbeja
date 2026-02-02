import * as React from "react"
import {Card, CardContent} from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
    type CarouselApi,
} from "@/components/ui/carousel"
import {ImageList, useMediaQuery} from "@mui/material";
import ImageListItem from '@mui/material/ImageListItem';


export function CarouselBox(data:any) {
    const [api, setApi] = React.useState<CarouselApi | null>();
    const [current, setCurrent] = React.useState(0)
    const [count, setCount] = React.useState(0)

    React.useEffect(() => {
        if (!api) {
            return
        }

        setCount(api.scrollSnapList().length)
        setCurrent(api.selectedScrollSnap() + 1)

        api.on("select", () => {
            setCurrent(api.selectedScrollSnap() + 1)
        })
    }, [api])

    return (
        <Carousel setApi={setApi} className="w-[85%] h-[90%] p-4" style={{ marginInline:"auto"}}>
            <CarouselContent className="h-full items-stretch">
                {
                    data.map((item:any, index:number) => {
                        return (
                            <CarouselItem className="h-full min-h-0 p-0" key={index}>
                                <Card className="h-full p-0 border-0">
                                    <CardContent className="h-full p-0">
                                        <img
                                            className="w-full h-full object-cover"
                                            src={item}
                                            alt=""
                                        />
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


export function MultiCards() {
    const images = [
        "https://images.unsplash.com/photo-1761839257513-a921710a4291?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4fHx8ZW58MHx8fHx8",
        "https://images.unsplash.com/photo-1769095384079-fe74a7f1e7aa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1769356814886-abdadde25ea7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1769251846183-f78756a544bc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxN3x8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1761839258239-2be2146f1605?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNXx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1761839256601-e768233e25e7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMnx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1769626124723-caf77e2f921d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyNnx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1767961932888-6bd98b732200?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzNHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1769109002317-da4a97d94907?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0Nnx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1769399287730-6e42c3990377?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0OHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1769489050642-3d768e3e959a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1M3x8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1761839257475-4ca368dae6c3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1NXx8fGVufDB8fHx8fA%3D%3D"
    ]

    const isXs = useMediaQuery("(max-width:640px)");
    const isSm = useMediaQuery("(max-width:768px)");
    const isMd = useMediaQuery("(max-width:1024px)");

    const cols = isXs ? 1 : isSm ? 2 : isMd ? 3 : 6;
    return (
        <ImageList variant={"masonry"} gap={20} cols={cols}  className={"flex-wrap "}>
            {images.map((image, i) => {
                return (
                    <ImageListItem key={i}>
                        <img src={image} alt="just image"/>
                    </ImageListItem>
                )
            })}
        </ImageList>
    )
}


