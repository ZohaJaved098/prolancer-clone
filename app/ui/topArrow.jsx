'use client';
import { FaArrowUp } from "react-icons/fa";
import { useState, useEffect } from "react";

export default function TopArrow() {
    const [isScrolled, setIsScrolled] = useState(false);

    const handleScroll = () => {
        const scrollY = window.scrollY;
        if (scrollY > 200) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    };

    const goToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className="relative">
            <div className={`right-8 bottom-10 p-3 bg-[#6787fe] text-white rounded-full cursor-pointer transition-opacity duration-1000 ${ isScrolled ? 'fixed  opacity-100' : 'opacity-0 pointer-events-none'}`} onClick={goToTop}>
                <FaArrowUp className="w-6 h-6" />
            </div>
        </div>
    );
}
