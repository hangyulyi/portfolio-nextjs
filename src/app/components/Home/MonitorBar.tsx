"use client"

import React, { useState } from "react";

// toolbar items
import { IoPerson } from "react-icons/io5";
import { FaLaptopCode, FaLinkedin, FaGithubSquare } from "react-icons/fa";

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
                        { name: 'About me', Icon: IoPerson, color: '#1e3a8a' },
                        { name: 'My skills', Icon: FaLaptopCode, color: '#334155' },
                        { name: 'Github', Icon: FaGithubSquare },
                        { name: 'LinkedIn', Icon: FaLinkedin, color: '#0077B5' },

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
                                    Icon={item.Icon}
                                    color={item.color}
                                    scaleClass={scaleClass}
                                    isHovered={hoveredIndex === index}
                                    onClick={() => handleItemClick(item.name)}
                                />
                            </div>
                        )
                    })}
                </div>

            </div>
        </div>
    )
}