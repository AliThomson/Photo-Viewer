import React from "react";
import './HowsTheView.css';

export function HowsTheView({sun}) {    
    if (sun === "good")
        return (
            <div className="carole-kirkwood">
                <div>
                    Look out the window! It's a beautiful day
                </div>
                <div>
                    Today's no.{rank} band.
                </div>
            </div>            
            )
            
    if (band && !rank)
    return (
        <div className="dj">
            <div>
                We are enjoying the sweet sounds of {band}
            </div>
        </div>            
        )
    return (                
        <div className="not-dj">               
            No idea who this is!
        </div>
    );
}