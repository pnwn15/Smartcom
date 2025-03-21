import React, { useState, useEffect } from 'react';
import { DownOutlined, SearchOutlined, MenuOutlined, HomeOutlined } from "@ant-design/icons";
import { Modal, Input, Button } from 'antd';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState(null);
    const [isLanguageOpen, setIsLanguageOpen] = useState(false);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [isAccountMenuOpen, setIsAccountMenuOpen] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [username, setUsername] = useState('');

    const showModal = () => setIsModalVisible(true);
    const handleCancel = () => setIsModalVisible(false);
    const toggleAccountMenu = () => setIsAccountMenuOpen(!isAccountMenuOpen);
    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const toggleLanguage = () => setIsLanguageOpen(!isLanguageOpen);
    const toggleDropdown = (index) => setOpenDropdown(openDropdown === index ? null : index);

    const handleSignOut = () => {
        localStorage.removeItem('token');
        setIsLoggedIn(false);
        setUsername('');
        window.location.href = '/login';
    };

    const handleSearch = () => {
        console.log('Searching for:', searchQuery);
    };

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            try {
                const decodedToken = JSON.parse(atob(token.split('.')[1]));
                setUsername(decodedToken.email);
                setIsLoggedIn(true);
            } catch (error) {
                console.error('Error decoding token:', error);
            }
        }
    }, []);

    const menuItems = [
        {
            name: "Solution",
            isActive: true,
            logo1: <HomeOutlined />,
            logo: <DownOutlined />,
            hasDropdown: true,
            dropdownItems: [
                { name: "Home", href: "/" },
                { name: "Solution", href: "/solution" },
                { name: "Shop", href: "/shop" }
            ],
            href: "/solution"
        },
        {
            name: "Industries",
            href: "/industries",
            logo1: <HomeOutlined />,
            logo: <DownOutlined />
        },
        {
            name: "Insight",
            href: "/insight",
            logo1: <HomeOutlined />
        },
        {
            name: "About",
            href: "/about",
            logo1: <HomeOutlined />,
        },
    ];

    return (
        <nav className="fixed w-full z-20 top-0 start-0   dark:border-gray-600 bg-cover bg-no-repeat bg-center" style={{ backgroundImage: "url('/bgnav1.png')" }}>
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src="/smartcom.png" className="h-12" alt="logo" />
                </a>
                <div className="flex md:order-2 mt-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                    <a href="/contact">
                        <button type="button" className="w-36 bg-white hover:bg-black font-bold rounded-lg text-md px-4 py-2 text-center text-red-600 sm:hidden md:hidden hidden lg:block xl:block 2xl:block">
                            Contact
                        </button>
                    </a>
                    <a href="/contact">
                        <button type="button" className="w-12 bg-white hover:bg-black font-bold rounded-lg text-md px-4 py-2 text-center text-red-600 sm:block md:block block lg:hidden xl:hidden 2xl:hidden">
                            <i className="fas fa-phone text-black"></i>
                        </button>
                    </a>
                    <div className="flex items-center">
                        <SearchOutlined className="text-xl ml-2 hover:text-white cursor-pointer" style={{ color: 'white' }} onClick={showModal} />
                        <Modal title="Search" visible={isModalVisible} onCancel={handleCancel} footer={null}>
                            <div className="flex flex-col">
                                <Input type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} placeholder="Enter search query" />
                                <Button type="primary" className="mt-4" onClick={handleSearch}>
                                    Search
                                </Button>
                            </div>
                        </Modal>
                    </div>
                    <div className="relative flex items-center">
                        <button onClick={toggleAccountMenu} className="flex items-center cursor-pointer justify-center font-bold text-md px-4 py-2 text-center text-white">
                            <i className="fas fa-user"></i>
                        </button>
                        {isAccountMenuOpen && (
                            <div className="absolute top-full sm:-left-20 -left-20 md:-left-30 lg:-left-30  mt-2 bg-white border border-gray-200 shadow-lg rounded-lg p-2 z-10 w-48">
                                <ul className="space-y-2">
                                    {isLoggedIn ? (
                                        <>
                                            <li className="text-gray-900 px-4 py-2">{username}</li>
                                            <li className="text-gray-900 px-4 py-2"><a href='https://scc-vpn.from-sc.com/'>การเข้างาน/ออกงาน</a></li>
                                            <li>
                                                <button onClick={handleSignOut} className="block px-4 py-2 text-gray-900 hover:bg-gray-100 w-full text-left">
                                                    Sign Out
                                                </button>
                                            </li>
                                        </>
                                    ) : (
                                        <>
                                            <li>
                                                <a href="/login" className="block px-4 py-2 text-gray-900 hover:bg-gray-100">
                                                    Login
                                                </a>
                                            </li>
                                            <li>
                                                <a href="/signup" className="block px-4 py-2 text-gray-900 hover:bg-gray-100">
                                                    Sign Up
                                                </a>
                                            </li>
                                        </>
                                    )}
                                </ul>
                            </div>
                        )}
                    </div>

                    <button type="button" onClick={toggleLanguage} className="flex items-center absolute right-0 top-0 justify-center font-bold text-md px-4 py-2 text-center text-white">
                        <i className="fas fa-globe"></i>
                    </button>
                    {isLanguageOpen && (
                        <div className="absolute right-0 top-16 bg-white border border-gray-200 shadow-lg rounded-lg p-2 z-10">
                            <ul className="space-y-2">
                                <li><a href="#" className="block px-4 py-2 text-gray-900 hover:bg-gray-100">English</a></li>
                                <li><a href="#" className="block px-4 py-2 text-gray-900 hover:bg-gray-100">ไทย</a></li>
                            </ul>
                        </div>
                    )}
                    <button onClick={toggleMenu} data-collapse-toggle="navbar-sticky" type="button" aria-expanded={isMenuOpen ? "true" : "false"} className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white lg:hidden xl:hidden hover:bg-gray-100" aria-controls="navbar-sticky">
                        <MenuOutlined />
                    </button>
                </div>
                <div className={`fixed left-0 top-0 w-64 h-full sm:bg-black md:bg-transparent bg-black lg:bg-transparent z-50 transition-transform transform ${isMenuOpen ? 'translate-x-0' : 'sm:-translate-x-full -translate-x-full md:-translate-x-0 lg:-translate-x-0 '} md:static md:flex md:w-auto md:h-auto md:order-1`} id="navbar-sticky">
                    <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0">
                        {menuItems.map((item, index) => (
                            <li key={index} className="relative">
                                <a href={item.href} onClick={item.hasDropdown ? (e) => { e.preventDefault(); toggleDropdown(index); } : null} className={`block py-2 px-3 border-b-2 lg:border-b-0 md:border-b-0 sm:border-b-2 ${item.isActive ? 'text-white bg-red-700' : 'text-gray-900'} ${item.isActive ? 'md:bg-transparent md:text-blue-700' : 'md:hover:bg-transparent md:hover:text-blue-700'} md:p-0 md:dark:text-white hover:underline dark:text-white dark:hover:bg-gray-700 dark:hover:text-red-600 md:dark:hover:bg-transparent dark:border-white`} aria-current={item.isActive ? "page" : undefined}>
                                    {item.name}
                                </a>
                                {item.hasDropdown && openDropdown === index && (
                                    <ul className="absolute left-0 w-[224px] 2xl:mt-7 lg:mt-7 xl:mt-7 sm:mt-0 bg-black border border-gray-200 shadow-lg  z-10">
                                        {item.dropdownItems.map((dropdownItem, dropdownIndex) => (
                                            <li key={dropdownIndex}>
                                                <a href={dropdownItem.href} className="block px-4 py-2 w-full border-b-2 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-pink-500">
                                                    {dropdownItem.name}
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