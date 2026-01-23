import React, {useEffect} from 'react';
import Header from "../header/Header.jsx";
import axios from "axios";

const DriveAPIKEY="AIzaSyBeH7TMMmlclhdWqU2M7feDlCSZJQXv8MY"
const FolderID="1NJOLAlljkkquGeJqLPWqkildLeuAS41N"

const url=`https://www.googleapis.com/drive/v3/files?q='${FolderID}'+in+parents+and+mimeType+contains+'image/'&fields=files(id,name,mimeType,thumbnailLink)&key=${DriveAPIKEY}`
const CorporateGallery = () => {

    const [data, setData] = React.useState([]);

    useEffect(()=>{

        axios.get(url).then((response) => {
            setData(response.data.files);
        }).catch((error) => {
            console.log(error);
        })

    },[])


    return (
        <div>
            <Header/>
            <div className={"mt-[5rem]"}>
            { data.map((item,index)  => {
                    return (
                        <img src={item.thumbnailLink} key={index} alt="Nothing being displayed" width={100} height={50} />
                    )
                })
            }
            </div>
        </div>
    );
};

export default CorporateGallery;