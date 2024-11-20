"use client"

import { useState } from "react"

import MonitorBar from "./MonitorBar"
import MySkillsPage from "./MySkillsPage"
import AboutMePage from "./AboutMePage"

export default function Monitor () {

    const [selectedPage, setSelectedPage] = useState<string | null>(null)
    const [isVisible, setIsVisible] = useState(false)
    const [minimizedPage, setMinimizedPage] = useState<string | null>(null)

    // handle monitorbaritem clicks
    const handleItemClick = (name: string) => {
        setIsVisible(true)
        setMinimizedPage(null)
        if (name === 'About me') {
            setSelectedPage('AboutMePage')
        } else if (name === 'My skills') {
            setSelectedPage('MySkillsPage')
        } else if (name === 'Github') {
            window.open('https://www.github.com/hangyulyi', '_blank')
        } else if (name === 'LinkedIn') {
            window.open('https://www.linkedin.com/in/yihangyul/', '_blank')
        } else if (name === 'Resume') {
            window.open('/assets/Hangyul-Yi_Resume.pdf', '_blank')
        }
    }

    // handle clicks on x, ensure minimized is no more
    const handleClose = () => {
        setIsVisible(false)
        setSelectedPage(null)
        setMinimizedPage(null)
    }

    const handleMinimize = () => {
        setIsVisible(false)
        setMinimizedPage(selectedPage)
        console.log(`minimizing ${selectedPage}`)
    }

    return(
        
        <div className="flex justify-center items-center pt-4">
            <div className="w-screen max-w-7xl aspect-video bg-[url('/img/wallpaper.jpg')] bg-cover rounded-lg md:w-10/12">

                <div className="p-2 flex items-center justify-center h-full">
                    <MonitorBar onItemClick={handleItemClick} minimizedPage={minimizedPage} />

                    <div className="flex-grow flex items-center justify-center h-full overflow-hidden">
                        {/* handle selected page views */}
                        {isVisible && selectedPage === 'MySkillsPage' && (
                            <div className="w-4/5 -z-2">
                                <MySkillsPage onClose={handleClose} onMinimize={handleMinimize} />
                            </div>
                        )}
                        {isVisible && selectedPage === 'AboutMePage' && (
                            <div className="-z-2 w-5/6">
                                <AboutMePage onClose={handleClose} onMinimize={handleMinimize} />
                            </div>
                        )}

                    </div>
                </div>

            </div>
        </div>
       
    )
}