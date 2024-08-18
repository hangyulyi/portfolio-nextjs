"use client"

import React, { useState } from "react";

import MonitorBarItem from "./MonitorBarItem";

export default function MonitorBar() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

    const handleMouseEnter = (index: number) => {
        setHoveredIndex(index)
    }

    const handleMouseLeave = () => {
        setHoveredIndex(null)
    }


    return(
        <div className="backdrop-blur-md flex items-center">
            <div className="rounded-[12px] h-4/5 w-16 flex flex-col items-center py-2 border-zinc-400 border-solid border">

                <div className="space-y-3">

                    {/* imitate behavior on macbook toolbar */}
                    {['About me', 'My skills', 'Github', 'LinkedIn'].map((name, index) => {
                        let scaleClass = 'scale-100';
                        if (hoveredIndex === index) {
                            scaleClass = 'scale-125'
                        } else if (hoveredIndex === index - 1 || hoveredIndex === index + 1) {
                            scaleClass = 'scale-105'
                        }

                        return (
                            <div
                                key={index}
                                onMouseEnter={() => handleMouseEnter(index)}
                                onMouseLeave={handleMouseLeave}
                            >
                                <MonitorBarItem 
                                    name={name}
                                    scaleClass={scaleClass}
                                    isHovered={hoveredIndex === index}
                                />
                            </div>
                        )
                    })}
                </div>

            </div>
        </div>
    )
}