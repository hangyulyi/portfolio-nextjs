'use client';

import React from "react";
import NavLink from "./NavLink";
import { useTranslations } from "next-intl";
import LocaleSwitcher from "./LocaleSwitcher";


const Navbar = () => {
    const n = useTranslations('AppLayout')

    return (
        <nav className="sticky top-0 z-50 bg-off-white">
            <div className="container mx-auto flex items-center justify-between px-6 py-4">
                <div className="flex-grow flex justify-center items-center space-x-12 text-lg">
                    <NavLink href="/">{n('home')}</NavLink>
                    <NavLink href="/projects">{n('projects')}</NavLink>
                    <NavLink href="/contact">{n('contact')}</NavLink>
                </div>
                <LocaleSwitcher />
            </div>
        </nav>
    )
}

export default Navbar;