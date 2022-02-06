import React from "react";




export function GetImageUrls() {
    
    const brokenImages = [
        1, 24, 32, 36, 44, 47
    ];
    const urls = [];

    for (let i = 0; i <= 50; i++) {
        if (!brokenImages.includes(i)) {
            const imageNumberString = i.toString().padStart(2, '0');
            urls.push(`https://picsum.photos/id/6${imageNumberString}/1600/900.jpg`)
        }
    }

    return urls;
}

export const imageUrls = GetImageUrls();