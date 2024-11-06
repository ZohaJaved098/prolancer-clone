'use client'
import { useEffect, useState} from "react";
import { FaCaretDown, FaAngleDown, FaBars } from "react-icons/fa";

export default function Navbar() {
    const [isOpend, setIsOpened]=useState(false)
    const [isScrolled, setIsScrolled]=useState(false);
    const [activeMenu, setActiveMenu] = useState(null);
    const [activeSublist, setActiveSublist] = useState(null);

    const handleNavClick=()=>{
        setIsOpened(!isOpend);
    }
    const handleScroll=()=>{
        const scrollY=window.scrollY;
        if(scrollY > 50){
            setIsScrolled(true);
        }
        else{
            setIsScrolled(false);
        }
    }
    useEffect(()=>{
        handleScroll;
        window.addEventListener("scroll", handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    },[])

    const NavMenu = [
        {
            id: 1,
            heading: "Home",
            lists: [
                { id: 1, list: "Home 1" },
                { id: 2, list: "Home 2" },
                { id: 3, list: "Home 3" },
                { id: 4, list: "Home 4" },
            ]
        },
        {
            id: 2,
            heading: "Browse Job",
            lists: [
                { id: 1, list: "Project Right Sidebar" },
                { id: 2, list: "Project Left Sidebar" },
                { id: 3, list: "Project Full Width" },
                { id: 4, list: "Project Details" },
            ]
        },
        {
            id: 3,
            heading: "Services",
            lists: [
                { id: 1, list: "Service Right Sidebar" },
                { id: 2, list: "Service Left Sidebar" },
                { id: 3, list: "Service Full Width" },
                { id: 4, list: "Service Details" },
            ]
        },
        {
            id: 4,
            heading: "Blog",
            lists: [
                { id: 1, list: "Blog Right Sidebar" },
                { id: 2, list: "Blog Left Sidebar" },
                { id: 3, list: "Blog Full Width" },
                { id: 4, list: "Post Details" },
            ]
        },
        {
            id: 5,
            heading: "About",
            lists: []
        },
        {
            id: 6,
            heading: "Pages",
            lists: [
                { id: 1, list: "How it works" },
                { id: 2, list: "Buyers" },
                { id: 3, list: "Sellers" },
                { id: 4, list: "FAQ" },
                { id: 5, list: "404" },
            ]
        },
        {
            id: 7,
            heading: "Contact",
            lists: []
        },
    ];
    const SideMenu = [
        {
            id: 1,
            heading: "Home",
            lists: [
                { id: 1, list: "Home 1" },
                { id: 2, list: "Home 2" },
                { id: 3, list: "Home 3" },
                { id: 4, list: "Home 4" },
            ]
        },
        {
            id: 2,
            heading: "Browse Job",
            lists: [
                { id: 1, list: "Project Right Sidebar" },
                { id: 2, list: "Project Left Sidebar" },
                { id: 3, list: "Project Full Width" },
                { id: 4, list: "Project Details" },
            ]
        },
        {
            id: 3,
            heading: "Services",
            lists: [
                { id: 1, list: "Service Right Sidebar" },
                { id: 2, list: "Service Left Sidebar" },
                { id: 3, list: "Service Full Width" },
                { id: 4, list: "Service Details" },
            ]
        },
        {
            id: 4,
            heading: "Blog",
            lists: [
                { id: 1, list: "Blog Right Sidebar" },
                { id: 2, list: "Blog Left Sidebar" },
                { id: 3, list: "Blog Full Width" },
                { id: 4, list: "Post Details" },
            ]
        },
        {
            id: 5,
            heading: "About",
            lists: []
        },
        {
            id: 6,
            heading: "Pages",
            lists: [
                { id: 1, list: "How it works" },
                { id: 2, list: "Buyers",
                    sublists:[
                        { id: 1, sublist: "Buyer Right Sidebar" },
                        { id: 2, sublist: "Buyer Left Sidebar" },
                        { id: 3, sublist: "Buyer Full Width" },
                        { id: 4, sublist: "Buyer Details" }
                    ]
                },
                { id: 3, list: "Sellers",
                    sublists:[
                        { id: 1, sublist: "Seller Right Sidebar" },
                        { id: 2, sublist: "Seller Left Sidebar" },
                        { id: 3, sublist: "Seller Full Width" },
                        { id: 4, sublist: "Seller Details" }
                    ]
                },
                { id: 4, list: "FAQ" },
                { id: 5, list: "404" },
            ]
        },
        {
            id: 7,
            heading: "Contact",
            lists: []
        },
    ];
    return (
        // Navbar
        <div className={`w-full h-20 ${isScrolled ? `bg-white fixed animate-slideInDown`: `bg-transparent sticky `} top-0 left-0 z-50 flex items-center justify-between text-white p-3 max-lg:bg-white`}>
            <div className={`flex items-center justify-between w-[85%] max-xl:gap-14 m-auto`}>
                <div className={`w-[20%] h-full p-1 flex items-center`}>
                    <img className={`w-36 h-full  ${isScrolled ? 'hidden' : 'block'} max-lg:hidden `}  src="https://themebing.com/wp/prolancer/wp-content/uploads/2021/09/logo-alt.png" alt="Logo with White text"
                    />
                    <img className={`w-36 h-full ${isScrolled ? ' animate-slideInDown' : 'hidden'} max-lg:block`} src="https://themebing.com/wp/prolancer/wp-content/uploads/2021/09/logo.png" alt="Logo with Black text"
                    />
                </div>
                <div className="flex flex-wrap justify-center w-[80%] h-full gap-5 max-xl:justify-start max-lg:hidden items-center transition-all ease-in duration-1000 ">
                    {NavMenu.map((navItem) => (
                        <ul key={navItem.id} className="relative flex items-center justify-center group">
                            <li className={`flex items-center cursor-pointer mr-2 font-semibold text-base tracking-wide ${isScrolled ? `animate-slideInDown text-[#0f1b63]`:`text-white`} hover:text-[#6787fe]`}>
                                {navItem.heading}
                                {navItem.lists.length > 0 && <FaCaretDown className="ml-1" />}
                            </li>
                            <ul className="absolute left-0 top-9 mt-2 max-h-0 opacity-0 overflow-hidden transition-all duration-500 ease-in-out group-hover:max-h-64 group-hover:opacity-100 bg-white text-[#0f1b63]  font-medium w-[13vw]">
                                {navItem.lists.map((listItem) => (
                                    <li key={listItem.id} className="px-4 py-3 hover:text-[#6787fe]">
                                        {listItem.list}
                                    </li>
                                ))}
                            </ul>
                        </ul>
                    ))}
                </div>
                <div className="w-[20%] h-full p-1 flex max-lg:hidden justify-end transition-all ease-in duration-1000">
                    <button className={`px-8 py-3 border-2 ${isScrolled? `animate-slideInDown border-[#6787fe] bg-white text-[#6787fe]`: `border-white bg-transparent`} rounded-full outline-none hover:bg-[#6787fe] hover:text-white `}>Dashboard</button>
                </div>
                <FaBars className="w-20 h-10 hidden text-[#212529] max-lg:block cursor-pointer" onClick={handleNavClick}/>
            </div>
            {/* Overlay */}
            {isOpend && (
                <div className="fixed inset-0 bg-black bg-opacity-85 z-60" onClick={() => setIsOpened(false)}></div>
            )}
            {/* Sidebar */}
            <div className={`fixed top-0 right-0 h-full w-[300px] bg-white z-50 transform ${isOpend ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-1000 ease flex flex-col`}>
                <div className={`w-full h-[80px] py-3 flex justify-center items-center`}>
                    <img className={`w-[160px] block`} src="https://themebing.com/wp/prolancer/wp-content/uploads/2021/09/logo.png" alt="Logo with Black text" />
                </div>
                <div className="flex flex-col">
                    {SideMenu.map((sideitem) => (
                        <div key={sideitem.id}>
                            <div className={`flex items-center pl-5 py-2 text-[#4A6375] justify-between w-full capitalize`}>
                                {sideitem.heading}
                                {sideitem.lists.length > 0 && (
                                    <button
                                        className={`p-3 ${activeMenu === sideitem.id ? 'bg-[#6787fe] text-white' : 'bg-transparent'}`}
                                        onClick={() => setActiveMenu(activeMenu === sideitem.id ? null : sideitem.id)}>
                                        <FaAngleDown />
                                    </button>
                                )}
                            </div>
                            {/* Dropdown for lists */}
                            <div className={`transition-all ease duration-1000 overflow-hidden ${activeMenu === sideitem.id ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'}`}>
                                <ul className="flex flex-col pl-5 text-[#4A6375]">
                                    {sideitem.lists.map((listItem) => (
                                        <li key={listItem.id} >
                                            {/* Check if sublists exist */}
                                            <div className="flex items-center pl-5 py-1 text-[#4A6375] justify-between w-full capitalize">
                                                {listItem.list}
                                                {listItem.sublists && (
                                                    <button
                                                        onClick={() => setActiveSublist(activeSublist === listItem.id ? null : listItem.id)}
                                                        className={`p-3 ${activeSublist === listItem.id ? 'bg-[#6787fe] text-white' : 'bg-transparent'}`}>
                                                        <FaAngleDown />
                                                    </button>
                                                )}
                                            </div>

                                            {/* Dropdown for sublists */}
                                            {listItem.sublists && (
                                                <div className={`pl-3 transition-all ease duration-500 overflow-hidden ${activeSublist === listItem.id ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
                                                    <ul className="pl-5">
                                                        {listItem.sublists.map((sublistItem) => (
                                                            <li key={sublistItem.id} className="hover:text-[#6787fe]">
                                                                {sublistItem.sublist}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            )}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="w-full h-[10%] mt-4 flex justify-center">
                    <button className={`px-8 py-3 border-2 border-[#6787fe] bg-[#6787fe] text-white rounded-full outline-none `}>Dashboard</button>
                </div>
            </div>
        </div>
    );
}
