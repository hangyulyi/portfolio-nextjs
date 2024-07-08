'use client'

import React from "react";
import { FaCaretUp } from "react-icons/fa";  

const ScrollUpBtn: React.FC = () => {
    const handleScrollToTop =() => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    return (
        <button
            onClick={handleScrollToTop}
            className="fixed bottom-4 right-4 flex items-center justify-center w-12 h-12 text-green hover:transition-transform duration-300 hover:scale-110"
            aria-label="Scroll to top"
        >
            <FaCaretUp className="w-8 h-8" />
        </button>
    )
}

export default ScrollUpBtn;