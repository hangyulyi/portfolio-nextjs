import { IoIosClose } from "react-icons/io";
import { VscChromeMinimize } from "react-icons/vsc";
import { IoIosResize } from "react-icons/io";

export default function MySkillsPage() {
    return(
        
        <div className="aspect-[3/2] bg-white w-full h-full rounded-lg mx-10 overflow-hidden relative">
            <div className="bg-gray-800 absolute inset-x-0 top-0 h-7">
                <div className="absolute inset-y-0 left-0 px-2 flex items-center space-x-1">
                    <IoIosClose color="#450a0a" className="rounded-full bg-red-600" size={12} />
                    <VscChromeMinimize color="#a16207" className="rounded-full bg-amber-400" size={12} />
                    <IoIosResize color="#052e16" className="rounded-full bg-emerald-500" size={12} />
                </div>
            </div>
        </div>
        
    )
}