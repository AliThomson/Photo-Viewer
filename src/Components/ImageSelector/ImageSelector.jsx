import React from "react";
import './ImageSelector.css';
import { imageUrls } from "../GetImageUrls/GetImageUrls";


export function ImageSelector({ imageUrls, selectionCounter, setSelectionCounter, selectedImg1, setSelectedImage1, selectedImg2, setSelectedImage2 }) {   

    function selectImage(url) {
        setSelectionCounter(selectionCounter + 1);
        if (selectionCounter % 2 === 0) 
        { 
            setSelectedImage1(url);
        } else {
            setSelectedImage2(url);
        }
    }

    return (    
       
        <div className="thumbnails">
            {imageUrls.map((url, index) => (
                
                <div key={index}>
                    <img className={(selectedImg1 === url || selectedImg2 === url) ? "selected" : "thumbnails"}
                        onClick={() => {selectImage(url)}}
                        src={url}
                        alt="thumbnail"
                        />
                </div>
            ))}
        </div>
    );
}