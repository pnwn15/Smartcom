import React, { useState } from 'react';
import { Modal, Input, Button } from 'antd';

const BottomNav = ({ isLoggedIn, username, handleSignOut }) => {
    // สถานะสำหรับการแสดงโมดอล
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [isAccountMenuOpen, setIsAccountMenuOpen] = useState(false);


    const toggleAccountMenu = () => {
        setIsAccountMenuOpen(!isAccountMenuOpen);
    };

    const navItems = [
        { icon: 'fas fa-home', label: 'Home', href: '/' },
        { icon: 'fas fa-search', label: 'Search' },
        { icon: 'fas fa-user', label: 'Profile', href: '/login' },
    ];

    // ฟังก์ชันเปิดโมดอล
    const showModal = () => {
        setIsModalVisible(true);
    };

    // ฟังก์ชันปิดโมดอล
    const handleCancel = () => {
        setIsModalVisible(false);
    };

    // ฟังก์ชันค้นหา
    const handleSearch = () => {
        console.log(searchQuery);
        // เพิ่มการค้นหาตาม query ที่นี่
        handleCancel(); // ปิดโมดอลหลังจากค้นหา
    };

    return (
        <div className="fixed bottom-0 mx-auto left-0 w-full border-t border lg:hidden md:block sm:block border-gray-300 bg-white shadow-lg">
            <div className="flex justify-center items-center py-2">
                {navItems.map((item, index) => (
                    <button
                        key={index}
                        onClick={item.label === 'Search' ? showModal : null}
                        className="text-black w-1/2 flex flex-col text-2xl mx-4"
                    >
                        {/* ถ้ามี href ให้ทำเป็นลิงก์ */}
                        {item.href ? (
                            <a href={item.href} className="flex flex-col items-center">
                                <i className={`${item.icon} text-[23px]`}></i>
                                <span className="text-[10px]">{item.label}</span>
                            </a>
                        ) : (
                            <div className="flex flex-col items-center">
                                <i className={`${item.icon} text-[23px]`}></i>
                                <span className="text-[10px]">{item.label}</span>
                            </div>
                        )}
                    </button>
                ))}
            </div>

            {/* โมดอลสำหรับค้นหา */}
            <Modal title="Search" visible={isModalVisible} onCancel={handleCancel} footer={null}>
                <div className="flex flex-col">
                    <Input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Enter search query"
                    />
                    <Button type="primary" className="mt-4" onClick={handleSearch}>
                        Search
                    </Button>
                </div>
            </Modal>
        </div>
    );
};

export default BottomNav;
