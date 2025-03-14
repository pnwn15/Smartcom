import React, { useState } from 'react';

const Blog = () => {
    const buttons = [
        { name: 'ทั้งหมด', link: '/page1', content: 'Smart Silo สามารถเชื่อมต่อและทำงานร่วมกับระบบ ERP และระบบบริหารจัดการทั้งโรงได้', avatar: '/avatar1.jpg', image: '/smart.jpg' },
        { name: 'บทความ', link: '/page2', content: 'Smart Silo สามารถเชื่อมต่อและทำงานร่วมกับระบบ ERP และระบบบริหารจัดการทั้งโรงได้', avatar: '/avatar1.jpg', image: '/smart.jpg' },
        { name: 'IoT', link: '/page3', content: 'Smart Silo สามารถเชื่อมต่อและทำงานร่วมกับระบบ ERP และระบบบริหารจัดการทั้งโรงได้', avatar: '/avatar1.jpg', image: '/smart.jpg' },
        { name: 'กรณีศึกษา', link: '/page4', content: 'Smart Silo สามารถเชื่อมต่อและทำงานร่วมกับระบบ ERP และระบบบริหารจัดการทั้งโรงได้', avatar: '/avatar1.jpg', image: '/smart.jpg' },
        { name: 'System Integration', link: '/page5', content: 'Smart Silo สามารถเชื่อมต่อและทำงานร่วมกับระบบ ERP และระบบบริหารจัดการทั้งโรงได้', avatar: '/avatar1.jpg', image: '/smart.jpg' },
        { name: 'Security Solution', link: '/page6', content: 'Smart Silo สามารถเชื่อมต่อและทำงานร่วมกับระบบ ERP และระบบบริหารจัดการทั้งโรงได้', avatar: '/avatar1.jpg', image: '/smart.jpg' },
        { name: 'IT Infrastructure', link: '/page7', content: 'Smart Silo สามารถเชื่อมต่อและทำงานร่วมกับระบบ ERP และระบบบริหารจัดการทั้งโรงได้', avatar: '/avatar1.jpg', image: '/smart.jpg' },
        { name: 'Digital', link: '/page8', content: 'Smart Silo สามารถเชื่อมต่อและทำงานร่วมกับระบบ ERP และระบบบริหารจัดการทั้งโรงได้', avatar: '/avatar1.jpg', image: '/smart.jpg' },
    ];

    const [selectedButton, setSelectedButton] = useState(null);

    const handleButtonClick = (button) => {
        // ถ้ากดปุ่ม 'ทั้งหมด' จะให้แสดงข้อมูลทั้งหมด
        if (button.name === 'ทั้งหมด') {
            setSelectedButton(null);  // เมื่อเลือก 'ทั้งหมด' จะเป็นการแสดงข้อมูลทั้งหมด
        } else {
            setSelectedButton(button); // แสดงข้อมูลของปุ่มที่กด
        }
    };

    return (
        <div className='w-full mx-auto'>
            <div className="mt-10 ml-7 flex gap-6 flex-col">
                <div>
                    <h1 className="text-[32px] text-black border-b-[2px] border-red-600 inline">ข้อมูลล่าสุด</h1>
                </div>
                <div className="flex space-x-4  flex-wrap gap-3">
                    {buttons.map((button, index) => (
                        <a href={button.link} key={index}>
                            <button
                                className="px-4 py-2 text-white hover:bg-red-600 bg-black rounded-full"
                                onClick={(e) => {
                                    e.preventDefault(); // ป้องกันการรีโหลดหน้า
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
                    <div className="mt-8 my-5 flex p-6 bg-white rounded-lg shadow-md border border-gray-200">
                        <div className="w-1/2 h-full mr-6">
                            <img
                                src={selectedButton.image}
                                alt="Image"
                                className="w-full h-full object-cover rounded-lg"
                            />
                        </div>
                        <div className="flex flex-col">
                            <div className="text-xl font-semibold mb-2">{selectedButton.name}</div>
                            <p>{selectedButton.content}</p>
                            
                            <div className="flex justify-between">
                                <div className="flex">
                                    <div className="w-20 h-20 mr-4">
                                        <img
                                            src={selectedButton.avatar}
                                            alt="Avatar"
                                            className="w-full h-full object-cover rounded-full"
                                        />
                                    </div>
                                    <div className="text-sm h-full items-center text-gray-500 mt-8">วันที่: 14 มีนาคม 2025</div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* แสดงข้อมูลทั้งหมดเมื่อเลือก 'ทั้งหมด' */}
                {selectedButton === null && (
                    <div className="mt-8 my-5">
                        <h2 className="text-2xl font-semibold">บทความทั้งหมด</h2>
                        {buttons.filter(button => button.name !== 'ทั้งหมด').map((button, index) => (
                            <div key={index} className="mt-4 flex p-6 bg-white rounded-lg shadow-md border border-gray-200">
                                <div className="w-1/2 h-full mr-6">
                                    <img
                                        src={button.image}
                                        alt="Image"
                                        className="w-full h-full object-cover rounded-lg"
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <div className="text-xl font-semibold mb-2">{button.name}</div>
                                    <p>{button.content}</p>
                                    <div className="flex justify-between">
                                        <div className="flex">
                                            <div className="w-20 h-20 mr-4">
                                                <img
                                                    src={button.avatar}
                                                    alt="Avatar"
                                                    className="w-full h-full object-cover rounded-full"
                                                />
                                            </div>
                                            <div className="text-sm text-gray-500 mt-8">วันที่: 14 มีนาคม 2025</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Blog;
