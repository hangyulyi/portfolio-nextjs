// button for live deployed projects

import { FaExternalLinkAlt } from "react-icons/fa";

interface ButtonLiveProps {
    link: string;
}

const ButtonLive:React.FC<ButtonLiveProps> = ({ link }) => {
    return(
        <a
            href={link}
            target="_blank"
            className="hover:text-gray-500"
        >
            <FaExternalLinkAlt size={40}/>
        </a>
    )
}

export default ButtonLive;