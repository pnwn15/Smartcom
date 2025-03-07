import React, { useState } from 'react';
import { DownOutlined, SearchOutlined } from "@ant-design/icons";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState(null); // สถานะเก็บเมนูที่เปิด dropdown
    const [isLanguageOpen, setIsLanguageOpen] = useState(false);
    // ฟังก์ชันเพื่อสลับการเปิด/ปิดเมนู
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    const toggleLanguage = () => setIsLanguageOpen(!isLanguageOpen);

    // ฟังก์ชันเปิด/ปิด dropdown ของเมนู
    const toggleDropdown = (index) => {
        // เช็คว่าถ้าเมนูเดิมเปิดอยู่ จะปิด หรือถ้าไม่เปิดจะเปิดเมนูใหม่
        setOpenDropdown(openDropdown === index ? null : index);
    };

    const menuItems = [
        { name: "Solution",  isActive: true, logo: <DownOutlined />, hasDropdown: true, dropdownItems: ["Dropdown Item 1", "Dropdown Item 2", "Dropdown Item 3"] },
        { name: "Industries", href: "#", logo: <DownOutlined /> },
        { name: "Insight", href: "/" },
        { name: "About", href: "#" },
    ];

    return (
        <nav className="bg-[#333333] dark:bg-[#333333] fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src="/smartcom.png" className="h-12" alt="logo" />
                </a>
                <div className="flex md:order-2 mt-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                    <button
                        type="button"
                        className="w-36 bg-white hover:bg-black font-bold rounded-lg text-md px-4 py-2 text-center text-red-600 sm:hidden md:hidden hidden lg:block xl:block 2xl:block"
                    >
                        Contact {/* ฟอนต์ปกติในหน้าจอขนาดใหญ่ */}
                    </button>

                    <button
                        type="button"
                        className="w-12 bg-white hover:bg-black font-bold rounded-lg text-md px-4 py-2 text-center text-red-600 sm:block md:block block lg:hidden xl:hidden 2xl:hidden"
                    >
                        <i className="fas fa-phone text-black"></i> {/* ไอคอนที่จะแสดงในขนาดหน้าจอ sm-md */}
                    </button>
                   

                    <SearchOutlined className="text-xl ml-2 hover:text-white cursor-pointer" style={{ color: "white" }} />
                    <button
                        type="button"
                        onClick={toggleLanguage}
                        className="flex items-center absolute right-0 top-0 justify-center font-bold text-md px-4 py-2 text-center text-white"
                    >
                        <i className="fas fa-globe"></i> {/* ไอคอนโลก */}
                    </button>

                    {isLanguageOpen && (
                        <div className="absolute right-0 top-16 bg-white border border-gray-200 shadow-lg rounded-lg p-2 z-10">
                            <ul className="space-y-2">
                                <li>
                                    <a href="#" className="block px-4 py-2 text-gray-900 hover:bg-gray-100">
                                        English
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="block px-4 py-2 text-gray-900 hover:bg-gray-100">
                                        ไทย
                                    </a>
                                </li>
                                {/* เพิ่มภาษาอื่น ๆ ที่ต้องการ */}
                            </ul>
                        </div>
                    )}
                    <button onClick={toggleMenu} data-collapse-toggle="navbar-sticky" type="button" aria-expanded={isMenuOpen ? "true" : "false"} className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white md:hidden hover:bg-gray-100" aria-controls="navbar-sticky">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                    
                    
                </div>
                {/* เมนูที่เปิด/ปิด */}
                <div className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${isMenuOpen ? 'block' : 'hidden'}`} id="navbar-sticky">
                    <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 ">
                        {menuItems.map((item, index) => (
                            <li key={index} className="relative">
                                <a
                                    href={item.href}
                                    onClick={item.hasDropdown ? (e) => { e.preventDefault(); toggleDropdown(index); } : null} // เปิด/ปิด dropdown เมื่อคลิก
                                    className={`block py-2 px-3 rounded-sm ${item.isActive ? 'text-white bg-blue-700' : 'text-gray-900'} ${item.isActive ? 'md:bg-transparent md:text-blue-700' : 'md:hover:bg-transparent md:hover:text-blue-700'} md:p-0 md:dark:text-white hover:underline dark:text-white dark:hover:bg-gray-700 dark:hover:text-red-600 md:dark:hover:bg-transparent dark:border-gray-700`}
                                    aria-current={item.isActive ? "page" : undefined}
                                >
                                    {item.name} {item.logo}
                                </a>
                                {/* สร้าง dropdown */}
                                {item.hasDropdown && openDropdown === index && (
                                    <ul className={`absolute  ${item.isActive ? 'fixed' : ''} left-0 w-full 2xl:mt-7 lg:mt-7 xl:mt-7 sm:mt-0 bg-white border border-gray-200 shadow-lg dark:bg-gray-900 dark:border-gray-700 z-10`}>
                                        {item.dropdownItems.map((dropdownItem, dropdownIndex) => (
                                            <li key={dropdownIndex}>
                                                <a href="#" className="block px-4 py-2 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                                    {dropdownItem}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                )}

                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            
        </nav>
    );
};

export default Navbar;
