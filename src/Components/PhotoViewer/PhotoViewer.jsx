import React, { useState } from "react";
import './PhotoViewer.css';
import { ImageSelector } from "../ImageSelector/ImageSelector";
import { imageUrls } from "../GetImageUrls/GetImageUrls";

export function PhotoViewer() {    

    const [selectedImg1, setSelectedImage1] = useState(imageUrls[0]);
    const [selectedImg2, setSelectedImage2] = useState(imageUrls[1]);
    const [selectionCounter, setSelectionCounter] = useState(0);

    return ( 
        <div>    
            <div className="photo-viewer"> 
                
                <h4>Image 1</h4>
                <img 
                    className="selected-photo"
                    src= {selectedImg1}
                    alt= "Your Selection" 
                />
                <h4>Image 2</h4>
                <img 
                    className="selected-photo"
                    src= {selectedImg2}
                    alt= "Your Selection" 
                />
            </div>
            <div>
                <h1>Select an image:</h1>
                    <ImageSelector 
                        imageUrls={imageUrls}
                        selectionCounter={selectionCounter}
                        setSelectionCounter={setSelectionCounter}
                        selectedImg1={selectedImg1}
                        setSelectedImage1={setSelectedImage1}
                        selectedImg2={selectedImg2}
                        setSelectedImage2={setSelectedImage2}
                    />           
            </div>
        </div>
    );
}