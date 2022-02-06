import React from "react";
import './WhatsPlaying.css';

export function WhatsPlaying({band, rank}) {
    if (band && rank)
        return (
            <div className="dj">
                <div>
                    We are enjoying the sweet sounds of {band}
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