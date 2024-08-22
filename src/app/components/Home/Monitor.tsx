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
        
        <div className="flex justify-center p-4">
            <div className="w-screen max-w-7xl aspect-video bg-[url('/img/wallpaper.jpg')] bg-cover rounded-lg md:w-10/12">

                <div className="p-2 flex">
                    <div className="w-1/4">
                        <MonitorBar onItemClick={handleItemClick} />
                    </div>

                    <div className="flex-grow flex items-center justify-center">
                        {/* handle selected page views */}
                        {selectedPage === 'MySkillsPage' && <MySkillsPage />}
                        {selectedPage === 'AboutMePage' && <AboutMePage />}

                    </div>
                </div>

            </div>
        </div>
       
    )
}