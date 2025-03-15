import React from 'react'
import { Button } from '@mui/material';
function Case() {
    const cards = [
        { id: 1, title: 'ระยอง', text1: 'การกำจัดการเข้าถึงช่วยเเก้ปัญหาร้านได้อย่างไร', text2: 'Security Solution,Access Control', image: '/pg1.jpg' },
        { id: 2, title: 'กรุงเทพ', text1: 'การกำจัดการเข้าถึงช่วยเเก้ปัญหาร้านได้อย่างไร', text2: 'Security Solution,Access Control', image: '/pg1.jpg' },
        { id: 3, title: 'กรุงเทพ', text1: 'การกำจัดการเข้าถึงช่วยเเก้ปัญหาร้านได้อย่างไร', text2: 'Security Solution,Access Control', image: '/pg1.jpg' },
        { id: 4, title: 'เชียงใหม่', text1: 'การกำจัดการเข้าถึงช่วยเเก้ปัญหาร้านได้อย่างไร', text2: 'Security Solution,Access Control', image: '/pg1.jpg' },
    ];

    return (
        <div className='mt-6 py-8'>
            <div className="mt-6 mx-auto container">
                <div className="grid lg:grid-cols-4 gap-4 sm:grid-cols-2 justify-center items-center">
                    {/* การ์ดแถวบน 3 อัน */}
                    {cards.slice(0, 4).map(card => (
                        <div key={card.id} className="bg-black p-2  rounded-lg shadow-lg w-[370px] h-[400px] mx-auto">
                            <img src={card.image} alt={card.title} className="w-full h-48 object-cover rounded-lg mb-4" />
                            <div className='flex flex-col gap-4'>
                                <p className='text-lg font-bold text-white tracking-wider'>{card.text1}</p>
                                <p className='text-md font-bold text-white tracking-wider'>{card.text2}</p>
                                <h3 className="text-xl font-semibold  border-white border bg-red-600 text-white">{card.title}</h3>
                            </div>
                        </div>
                    ))}
                </div>
                <div className='mt-5'>
                    <Button variant="contained" sx={{ backgroundColor: 'red', '&:hover': { backgroundColor: 'darkred' } }}>
                        ดูเพิ่มเติม
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Case
