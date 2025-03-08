import React, { useState, useEffect } from "react";
import teamMembersData from '../Json/TeamMerbers.json';

function Refer() {
    const [teamMembers, setTeamMembers] = useState([]);

    // โหลดข้อมูลจาก JSON
    useEffect(() => {
        setTeamMembers(teamMembersData);  // เซ็ตข้อมูลที่ import มาที่ state
    }, []); // โหลดข้อมูลแค่ครั้งเดียวเมื่อ component mount

    // ตั้งค่า interval สำหรับการเลื่อน index เมื่อข้อมูลถูกโหลด
    // ทำงานเมื่อ teamMembers ถูกโหลดเสร็จ

    return (
        <div className="flex flex-col w-full gap-10">
            <div className="flex flex-col justify-center xl:max-w-6xl md:max-w-4xl sm:max-w-lg mx-auto">
                <h1 className="text-black border-b-2 border-red-600 font-bold text-lg mt-5 text-center">
                    References
                </h1>
                <h1 className="text-black font-bold text-xs mt-5 text-center">
                    ลูกค้าที่ไว้ใจเรา
                </h1>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {/* Render team members */}
                {teamMembers.map((member, index) => (
                    <div
                        key={index}
                        className="text-center text-gray-500 dark:text-gray-400 group w-full px-4 py-4"
                    >
                        {/* ใช้ group เพื่อให้ effect แสดงเมื่อ hover */}
                        <div className="relative overflow-hidden">
                            <img
                                className="mx-auto mb-4 w-36 h-36 rounded-2xl transform transition duration-300 group-hover:scale-110 shadow-lg object-cover"
                                src={member.avatar}
                                alt={`Team Member ${index}`}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Refer;
