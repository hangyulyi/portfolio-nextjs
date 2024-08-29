import Image from "next/image";

import { IoIosClose } from "react-icons/io";
import { VscChromeMinimize } from "react-icons/vsc";
import { IoIosResize } from "react-icons/io";

export default function AboutMePage() {
    // TODO: add functunatity for the buttons to close, fullsize, minize as indicated
    return (
        <div className="aspect-[3/2] bg-white w-full h-full rounded-lg mx-10 overflow-hidden relative">
            {/* top styling */}
            <div className="bg-gray-800 absolute inset-x-0 top-0 h-7">
                <div className="absolute inset-y-0 left-0 px-2 flex items-center space-x-1">
                    <IoIosClose color="#450a0a" className="rounded-full bg-red-600" size={12} />
                    <VscChromeMinimize color="#a16207" className="rounded-full bg-amber-400" size={12} />
                    <IoIosResize color="#052e16" className="rounded-full bg-emerald-500" size={12} />
                </div>
            </div>



            <div className="flex items-start mt-8 p-6">

                <div className="mr-4">
                    <Image 
                        src="/img/aboutmeimg.png"
                        sizes="100vw"
                        className="w-40 h-auto animate-floating"
                        width={100}
                        height={100}
                        alt="about me graphic"
                    />
                </div>

                <div className="flex-1">
                    <h2 className="text-green font-bold text-2xl">About me</h2>
                    <h3 className="font-bold">Software Engineering Student</h3>

                    <div className="pr-10">
                        <p className="pt-6">Greetings! I'm a Software Engineering student attending the University of Calgary.</p> <br></br>
                        <p>I like to build things and hope they work, one of them being this page!</p> <br></br>
                        <p>I love working on projects and improving my skills not only in class but outside as well. My current project I'm working on is Barry, a chatbot that I'm trying to teach. If I've been able to get it to have satisfactory results, you'll be able to check it out on this site! If you don't see it, it means it's still in the works.</p> <br></br>
                        <p>Feel free to check out my other projects in the Projects section though!</p>
                    </div>
                </div>
            </div>
        </div>
    )
}