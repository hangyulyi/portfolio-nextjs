"use client"

import { useState } from "react"

import MonitorBar from "./MonitorBar"
import MySkillsPage from "./MySkillsPage"
import AboutMePage from "./AboutMePage"

export default function Monitor () {

    const [selectedPage, setSelectedPage] = useState<string | null>(null)

    // handle monitorbaritem clicks
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
        
        <div className="flex justify-center items-center pt-4">
            <div className="w-screen max-w-7xl aspect-video bg-[url('/img/wallpaper.jpg')] bg-cover rounded-lg md:w-10/12">

                <div className="p-2 flex items-center justify-center h-full">
                    <MonitorBar onItemClick={handleItemClick} />

                    <div className="flex-grow flex items-center justify-center h-full overflow-hidden">
                        {/* handle selected page views */}
                        {selectedPage === 'MySkillsPage' && (
                            <div className="w-4/5 -z-2">
                                <MySkillsPage />
                            </div>
                        )}
                        {selectedPage === 'AboutMePage' && (
                            <div className="-z-2 w-5/6">
                                <AboutMePage />
                            </div>
                        )}

                    </div>
                </div>

            </div>
        </div>
       
    )
}