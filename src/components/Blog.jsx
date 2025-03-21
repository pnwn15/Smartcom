import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Blog = () => {
    const [buttons, setButtons] = useState([]);
    const [selectedButton, setSelectedButton] = useState(null);

    useEffect(() => {
        // ดึงข้อมูลจาก API
        const fetchButtons = async () => {
            try {
                const response = await axios.get('http://localhost:3000/posts/all'); // API ที่ดึงข้อมูลทั้งหมด
                console.log(response.data); // ดูข้อมูลที่ตอบกลับจาก API
                setButtons(response.data); // ตั้งค่าข้อมูลใน state
            } catch (err) {
                console.error("Error fetching data", err);
            }
        };

        fetchButtons(); // เรียกฟังก์ชันนี้เมื่อ component ถูก mount
    }, []); // empty dependency array ให้ทำงานแค่ครั้งเดียวเมื่อ component ถูก mount


    const handleButtonClick = (button) => {
        if (button.name === 'ทั้งหมด') {
            setSelectedButton(null);
        } else {
            setSelectedButton(button);
        }
    };

    return (
        <div className='w-full mx-auto '>
            <div className="mt-10 flex justify-center items-center gap-6 flex-col">
                <div>
                    <h1 className="text-[32px] text-black border-b-[2px] border-red-600 inline">ข้อมูลล่าสุด</h1>
                </div>
                <div className="flex space-x-4 justify-center items-center gap-3 w-full flex-wrap">
                    {buttons.map((button, index) => (
                        <a href={button.link} key={index}>
                            <button
                                className="px-4 py-2 text-white hover:bg-red-600 bg-black rounded-full"
                                onClick={(e) => {
                                    e.preventDefault();
                                    handleButtonClick(button);
                                }}
                            >
                                {button.name}
                            </button>
                        </a>
                    ))}
                </div>

                {/* แสดงข้อมูลจากปุ่มที่เลือก */}
                {selectedButton && selectedButton.name !== 'ทั้งหมด' && (
                    <div className="mt-8 my-5 flex p-6 bg-white rounded-lg shadow-md border border-gray-200 w-full">
                        <div className="w-1/2 h-full mr-6">
                            <img
                                src={selectedButton.image}
                                alt="Image"
                                className="w-full h-full object-cover rounded-lg"
                            />
                        </div>
                        <div className="flex flex-col w-full">
                            <div className="text-xl font-semibold mb-2">{selectedButton.name}</div>
                            <p>{selectedButton.content}</p>

                            <div className="flex justify-between w-full">
                                <div className="flex w-full">
                                    <div className="w-20 h-20 mr-4">
                                        <img
                                            src={selectedButton.avatar}
                                            alt="Avatar"
                                            className="w-full h-full object-cover rounded-full"
                                        />
                                    </div>
                                    <div className="text-sm h-full items-center text-gray-500 mt-8">วันที่: {new Date().toLocaleDateString()}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* แสดงข้อมูลทั้งหมดเมื่อเลือก 'ทั้งหมด' */}
                {selectedButton === null && (
                    <div className="mt-8 my-5 mx-auto container max-w-full w-full">
                        <h2 className="text-2xl font-semibold ml-7">บทความทั้งหมด</h2>
                        {buttons.filter(button => button.name !== 'ทั้งหมด').map((button, index) => (
                            <div key={index} className="mt-4 flex p-6 lg:flex-row sm:flex-col flex-col  bg-white rounded-lg shadow-md border border-gray-200 w-full">
                                <div className="lg:w-1/2 sm:w-full h-80 mr-6">
                                    <img
                                        src={button.image}
                                        alt="Image"
                                        className="w-full h-full object-cover bg-center rounded-lg"
                                    />
                                </div>

                                <div className="flex flex-col sm:flex-col justify-between md:flex-col w-full">
                                    <div>
                                    <div className="text-xl font-semibold mb-2">{button.name}</div>
                                    <p>{button.content}</p>
                                    </div>
                                    <div className="flex w-full">
                                        <div className="flex w-full justify-between">
                                            <div className="w-12 h-12 mr-4">
                                                <img
                                                    src={button.avatar}
                                                    alt="Avatar"
                                                    className="w-full h-full object-cover rounded-full"
                                                />
                                            </div>
                                            <div className="text-sm text-gray-500 flex items-center">วันที่: {new Date().toLocaleDateString()}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                        <div className=' justify-center flex items-center mt-3'>
                            <button className="bg-red-600 text-white px-4 py-2 rounded w-24">
                                ดูเพิ่มเติม
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Blog;
