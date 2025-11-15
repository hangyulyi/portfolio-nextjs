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

    const baseClasses = `p-3 relative block uppercase mt-4 px-8 font-semibold tracking-wider transition-all ease-linear`

    const defaultClasses = `bg-green text-white hover:bg-white hover:text-green`

    const disabledClasses = 'bg-gray-300 text-gray-500 cursor-not-allowed hover:bg-gray-300 hover:text-gray-500 shadow-none'

    const finalClasses = disabled ? `${baseClasses} ${disabledClasses}` : `${baseClasses} ${defaultClasses}`

    // submit (form) button
    if (input) {
        return (
            <button
                type="submit"
                className={finalClasses}
                disabled={disabled}
            >
                {translated}
            </button>
        )
    }

    // general
    return (
        <button
            className={finalClasses}
        >
            {translated}
        </button>
    )

}

export default ButtonOne;
