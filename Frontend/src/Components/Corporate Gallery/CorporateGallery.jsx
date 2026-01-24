import React, {useEffect} from 'react';
import Header from "../header/Header.jsx";
import axios from "axios";

const DriveAPIKEY="AIzaSyApjsVhgf3KAZNmCHgURVwpc3vTnas1lqk"
const FolderID="1l2UBrT3MH3iuNdchZTNCFQbZ4rrpMAQk"

const url=`https://www.googleapis.com/drive/v3/files?q='${FolderID}'+in+parents+and+mimeType+contains+'image/'&fields=files(id,name,mimeType,thumbnailLink)&key=${DriveAPIKEY}`
const CorporateGallery = () => {

    const [data, setData] = React.useState([]);

    useEffect(()=>{

        axios.get(url).then((response) => {
            setData(response.data.files);
            console.log(response.data.files)
        }).catch((error) => {
            console.log(error);
        })

    },[])

    console.log("Logging",data)
    return (
        <div>
            <Header/>
            <div className={"mt-[5rem] p-4"}>
                <h1 className={"text-5xl font-bold text-transparent"}>Corporate Event</h1>
                <div className={"w-full"}>
                    { data.map((item,index)  => {
                        return (
                            <div key={index}>
                                <img src={`https://drive.google.com/thumbnail?id=${item.id}&sz=w1500`}  alt="Nothing being displayed" className={"h-50 max-w-full"}/>
                            </div>
                        )
                    })
                    }
                </div>
            </div>
        </div>
    );
};

export default CorporateGallery;