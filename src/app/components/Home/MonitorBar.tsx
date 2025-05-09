import React, { useState } from "react";

// toolbar items
import { IoPerson } from "react-icons/io5";
import { FaLaptopCode, FaLinkedin, FaGithubSquare } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";

import MonitorBarItem from "./MonitorBarItem";

interface MonitorBarProps {
    onItemClick: (name: string) => void;
    minimizedPage: string | null;
}

const MonitorBar: React.FC<MonitorBarProps> = ({ onItemClick, minimizedPage }) => {
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
                    {[
                        { name: 'About me', Icon: IoPerson, color: '#1e3a8a' },
                        { name: 'My skills', Icon: FaLaptopCode, color: '#334155' },
                        { name: 'Github', Icon: FaGithubSquare },
                        { name: 'LinkedIn', Icon: FaLinkedin, color: '#0077B5' },
                        { name: 'Resume', Icon: MdOutlineFileDownload },

                    ].map((item, index) => {
                        let scaleClass = 'scale-100';
                        if (hoveredIndex === index) {
                            scaleClass = 'scale-125'
                        }

                        return (
                            <div
                                key={index}
                                onMouseEnter={() => handleMouseEnter(index)}
                                onMouseLeave={handleMouseLeave}
                                className="relative"
                            >
                                <MonitorBarItem 
                                    name={item.name}
                                    Icon={item.Icon}
                                    color={item.color}
                                    scaleClass={scaleClass}
                                    isHovered={hoveredIndex === index}
                                    onClick={() => onItemClick(item.name)}
                                    isMinimized={minimizedPage === item.name}
                                />
                            </div>
                        )
                    })}
                </div>

            </div>
        </div>
    )
}

export default MonitorBar;