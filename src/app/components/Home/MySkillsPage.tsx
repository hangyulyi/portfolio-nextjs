import { IoIosClose } from "react-icons/io";
import { VscChromeMinimize } from "react-icons/vsc";
import { IoIosResize } from "react-icons/io";

// skills icon
import { FaHtml5, FaCss3, FaJava, FaReact, FaNode } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { TbBrandCpp, TbBrandTypescript } from "react-icons/tb";
import { SiArduino } from "react-icons/si";
import { RiFlutterFill } from "react-icons/ri";
import { FaPython } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { FaFigma } from "react-icons/fa";

interface MySkillsPageProps {
    onClose: () => void;
    onMinimize: () => void;
}

export default function MySkillsPage({ onClose, onMinimize }: MySkillsPageProps) {
    const iconSize = 50;

    // TODO: Handle icons here and map them out instead
    return(
        
        <div className="aspect-[3/2] bg-white w-full h-full rounded-lg mx-10 overflow-hidden relative">
            <div className="bg-gray-800 absolute inset-x-0 top-0 h-7">
                <div className="absolute inset-y-0 left-0 px-2 flex items-center space-x-1">
                    <IoIosClose 
                        color="#450a0a" 
                        className="rounded-full bg-red-600" 
                        size={12}
                        onClick={onClose}    
                    />
                    <VscChromeMinimize 
                        color="#a16207" 
                        className="rounded-full bg-amber-400" 
                        size={12} 
                        onClick={onMinimize}    
                    />
                    <IoIosResize color="#052e16" className="rounded-full bg-emerald-500" size={12} />
                </div>
            </div>

            {/* click framework, input that framework into projects search bar to display all projects that used it */}
            {/* Add in a hover effect to display maybe familiarity with language and show ^^ */}
            <div className="mt-10">
                <div className="mx-10">
                    <h2 className="text-green font-bold text-2xl">Skilled in: </h2>
                </div>

                <div className="mx-10 my-5">
                    <div className="flex space-x-4 items-center">
                        <h2 className="font-bold">Languages</h2>
                        <FaPython size={iconSize} className="icon-hover" />
                        <TbBrandCpp size={iconSize} className="icon-hover" />
                        <IoLogoJavascript size={iconSize} className="icon-hover" />
                        <FaJava size={iconSize} className="icon-hover" />
                        <TbBrandTypescript size={iconSize} className="icon-hover" />
                    </div>
                </div>

                <div className="mx-10 my-5">
                    <div className="flex space-x-4 items-center">
                        <h2 className="font-bold">Web development</h2>
                        <FaHtml5 size={iconSize} className="icon-hover" />
                        <FaCss3 size={iconSize} className="icon-hover" />
                        <RiNextjsFill size={iconSize} className="icon-hover" />
                        <FaReact size={iconSize} className="icon-hover" />
                        <FaNode size={iconSize} className="icon-hover" />
                    </div>
                </div>

                <div className="mx-10 my-5">
                    <div className="flex space-x-4 items-center">
                        <h2 className="font-bold">Other technologies</h2>
                        <SiArduino size={iconSize} className="icon-hover" />
                        <RiFlutterFill size={iconSize} className="icon-hover" />
                        <FaFigma size={iconSize} className="icon-hover" />
                    </div>
                </div>

            </div>

        </div>
        
    )
}