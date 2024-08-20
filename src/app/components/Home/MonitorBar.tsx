"use client"

import React, { useState } from "react";

import MonitorBarItem from "./MonitorBarItem";

export default function MonitorBar() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
    const [selectedPage, setSelectedPage] = useState<string | null>(null)

    const handleMouseEnter = (index: number) => {
        setHoveredIndex(index)
    }

    const handleMouseLeave = () => {
        setHoveredIndex(null)
    }

    const handleItemClick = (name: string) => {
        if (name === 'About me') {
            setSelectedPage('AboutMePage')
        } else if (name === 'My skills') {
            setSelectedPage('MySkillsPage')
        } else if (name === 'Github') {
            window.open('https://www.github.com/hangyulyi', '_blank')
        } else if (name === 'LinkedIn') {
            window.open('https://www.linkedin.com/in/yihangyul/', '_blank')
        }
    }

    return(
        <div className="backdrop-blur-md flex items-center">
            <div className="rounded-[12px] h-4/5 w-16 flex flex-col items-center py-2 border-zinc-400 border-solid border">

                <div className="space-y-3">

                    {/* imitate behavior on macbook toolbar */}
                    {[
                        { name: 'About me', background: 'https://img.icons8.com/?size=100&id=3439&format=png&color=000000' },
                        { name: 'My skills', background: 'https://img.icons8.com/?size=100&id=3439&format=png&color=000000' },
                        { name: 'Github', background: 'https://img.icons8.com/ios-glyphs/30/000000/github.png' },
                        { name: 'LinkedIn', background: 'https://img.icons8.com/?size=100&id=13930&format=png&color=000000' },

                    ].map((item, index) => {
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
                                    name={item.name}
                                    scaleClass={scaleClass}
                                    isHovered={hoveredIndex === index}
                                    onClick={() => handleItemClick(item.name)}
                                    background={item.background}
                                />
                            </div>
                        )
                    })}
                </div>

            </div>
        </div>
    )
}