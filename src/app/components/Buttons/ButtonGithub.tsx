import { FaGithub } from "react-icons/fa";

interface ButtonGithubProps {
    link: string;
}

const ButtonGithub:React.FC<ButtonGithubProps> = ({ link }) => {
    return(
        <a
            href={link}
            target="_blank"
            className="hover:text-gray-500"
        >
            <FaGithub size={30}/>
        </a>
    )
}

export default ButtonGithub;