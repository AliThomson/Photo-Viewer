import React from "react";
import './ImageSelector.css';
import { imageUrls } from "../GetImageUrls/GetImageUrls";


export function ImageSelector({ imageUrls, selectedImg, setSelectedImage }) {   
     
    return (    
       
        <div className="thumbnails">
            {imageUrls.map((url, index) => (
                <div key={index}>
                    <img className={selectedImg === url ? "selected" : "thumbnails"}
                        onClick={() => setSelectedImage(url)}
                        src={url}
                        alt="thumbnail"
                        />
                </div>
            ))}
        </div>
    );
}