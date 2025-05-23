import React from "react";
import { useTranslations } from "next-intl";

const Footer = () => {
    const t = useTranslations()

    return (
        <footer className="bg-off-white text-gray-600 py-4 px-8 w-1/4  w-full">
            <div className="container mx-auto">
                <p className="text-md whitespace-nowrap">&copy; 2025 {t('name')} </p>
            </div>
        </footer>
    )
}

export default Footer;