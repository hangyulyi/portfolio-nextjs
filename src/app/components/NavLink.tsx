import React from "react";
import Link from "next/link";

interface NavLinkProps {
    href: string;
    children: React.ReactNode;
}

const NavLink: React.FC<NavLinkProps> = ({ href, children }) => (
    <Link
        href={href}
        className={'text-black hover:text-green font-semibold transition-colors duration-400'} 
    >
        {children}
    </Link>
)

export default NavLink;