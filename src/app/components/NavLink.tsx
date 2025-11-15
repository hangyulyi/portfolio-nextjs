import React from "react";
import Link from "next/link";

interface NavLinkProps {
    href: string;
    children: React.ReactNode;
}

const NavLink: React.FC<NavLinkProps> = ({ href, children }) => (
    <Link
        href={href}
        className={'text-black px-4 hover:text-white hover:[text-shadow:_-1px_-1px_0_#000,1px_-1px_0_#000,-1px_1px_0_#000,1px_1px_0_#000] font-semibold transition-colors duration-100 '} 
    >
        {children}
    </Link>
)

export default NavLink;