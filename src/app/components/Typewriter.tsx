"use client"

import { TypeAnimation } from "react-type-animation";
import { useTranslations } from "next-intl";

interface TypewriterProps {
    textKey: string;
}

const Typewriter: React.FC<TypewriterProps> = ({ textKey }) => {

    const t = useTranslations('Typed')

    const translated = t(textKey)

    return (
        <TypeAnimation 
            sequence={[translated]}
            repeat={0}
            speed={20}
        />
    )
}

export default Typewriter;