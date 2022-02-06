import React, { useState } from "react";
import './PhotoViewer.css';
import { ImageSelector } from "../ImageSelector/ImageSelector";
import { imageUrls } from "../GetImageUrls/GetImageUrls";

export function PhotoViewer() {    

    const [selectedImg, setSelectedImage] = useState(imageUrls[0]);
    
    return ( 
        <div>    
            <div className="photo-viewer"> 
                <img 
                    className="selected-photo"
                    src= {selectedImg}
                    alt= "Your Selection" 
                />
            </div>
            <div>
                <h1>Select an image:</h1>
                    <ImageSelector 
                        imageUrls={imageUrls}
                        selectedImg={selectedImg}
                        setSelectedImage={setSelectedImage}
                    />           
            </div>
        </div>
    );
}