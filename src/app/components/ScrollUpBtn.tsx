'use client'

import React from "react";
import { FaCaretSquareUp } from "react-icons/fa";  

const ScrollUpBtn: React.FC = () => {
    const handleScrollToTop =() => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    return (
        <button
            onClick={handleScrollToTop}
            className="fixed bottom-4 right-4 flex items-center justify-center h-12 w-12 hover:transition-transform duration-300 hover:scale-110"
            aria-label="Scroll to top"
        >
            <FaCaretSquareUp className="text-green h-10 w-10" />
        </button>
    )
}

export default ScrollUpBtn;