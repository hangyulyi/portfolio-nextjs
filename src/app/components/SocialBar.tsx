import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

// li 0077B5
// gh
const SocialBar = () => {
    return (
        <div className="flex justify-center space-x-4">
            <a
                href="https://github.com/hangyulyi"
                target="_blank"
                className="hover:text-gray-500"
            >
                <FaGithub size={30} />
            </a>
            <a
                href="https://www.linkedin.com/in/yihangyul/"
                target="_blank"
                className="hover:text-gray-500"
            >
                <FaLinkedin size={30} />
            </a>
            
        </div>
    )

}

export default SocialBar