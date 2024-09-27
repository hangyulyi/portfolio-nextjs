import React from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";

interface ButtonOneProps {
    // href: string;
    textKey: string;
    input?: { value: string }; //form submit
    disabled?: boolean;
    // onClick?: () => void; // etc
}

const ButtonOne: React.FC<ButtonOneProps> = ({
    // href,
    textKey,
    input,
    disabled,
    // onClick
}) => {
    const t = useTranslations('ButtonOne')
    const translated = t(textKey)

    const allClasses = `p-3 relative block bg-green text-white uppercase mt-4 px-8 font-semibold tracking-wider transition-all ease-linear
    hover:bg-white hover:text-green`

    // submit (form) button
    if (input) {
        return (
            <button
                type="submit"
                className={allClasses}
                disabled={disabled}
            >
                {translated}
            </button>
        )
    }

    // general
    return (
        <button
            className={allClasses}
        >
            {translated}
        </button>
    )

}

export default ButtonOne;
