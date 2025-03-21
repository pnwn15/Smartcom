import React, { useState } from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle, Button } from '@mui/material';

function Serve() {
    const [openDialog, setOpenDialog] = useState(false); // เปิด/ปิด Dialog
    const [selectedCard, setSelectedCard] = useState(null); // การ์ดที่ถูกเลือก

    const cards = [
        { id: 1, title: 'การเงิน', image: '/pg1.jpg' },
        { id: 2, title: 'สุขภาพ', image: '/pg1.jpg' },
        { id: 3, title: 'ค้าปลีก', image: '/pg1.jpg' },
        { id: 4, title: 'การผลิต', image: '/pg1.jpg' },
        { id: 5, title: 'การเกษตร', image: '/pg1.jpg' }
    ];

    // ฟังก์ชันที่ใช้เปิด Dialog และส่งข้อมูลของการ์ดที่เลือก
    const handleCardClick = (card) => {
        setSelectedCard(card);
        setOpenDialog(true);  // เปิด Dialog เมื่อการ์ดถูกคลิก
    };

    // ฟังก์ชันที่ใช้ปิด Dialog
    const handleCloseDialog = () => {
        setOpenDialog(false);
        setSelectedCard(null); // รีเซ็ตการ์ดที่ถูกเลือก
    };

    return (
        <div className="mt-6 py-8">
            <div className="mt-6 mx-auto container">
                <div className="grid lg:grid-cols-3 gap-4 sm:grid-cols-2">
                    {/* การ์ดแถวบน 3 อัน */}
                    {cards.slice(0, 3).map(card => (
                        <div
                            key={card.id}
                            className="bg-white p-2 rounded-lg shadow-lg w-[300px] h-[400px]"
                            onClick={() => handleCardClick(card)} // เมื่อคลิกการ์ดจะเปิด Dialog
                        >
                            <img src={card.image} alt={card.title} className="w-full h-48 object-cover rounded-lg mb-4" />
                            <h3 className="text-xl font-semibold mt-35 border-black border bg-black text-white">{card.title}</h3>
                        </div>
                    ))}
                </div>

                <div className="grid sm:grid-cols-1 flex-wrap lg:grid-cols-3 gap-4 mt-4">
                    {/* การ์ดแถวล่าง 2 อัน */}
                    <div className="lg:flex md:flex justify-center gap-3 space-y-4 col-span-3">
                        {cards.slice(3, 5).map((card) => (
                            <div
                                key={card.id}
                                className="bg-white p-6 rounded-lg shadow-lg w-[300px] h-[400px]"
                                onClick={() => handleCardClick(card)} // เมื่อคลิกการ์ดจะเปิด Dialog
                            >
                                <img src={card.image} alt={card.title} className="w-full h-48 object-cover rounded-lg mb-4" />
                                <h3 className="text-xl font-semibold mt-35 border-black border bg-black text-white">{card.title}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Dialog ที่จะแสดงเมื่อคลิกการ์ด */}
            <Dialog open={openDialog} onClose={handleCloseDialog}>
                <DialogTitle>{selectedCard ? selectedCard.title : 'การ์ด'}</DialogTitle>
                <DialogContent>
                    <img
                        src={selectedCard ? selectedCard.image : '/pg1.jpg'}
                        alt={selectedCard ? selectedCard.title : 'การ์ด'}
                        style={{ width: '100%', height: 'auto', marginBottom: '16px' }}
                    />
                    <p>รายละเอียดของ {selectedCard ? selectedCard.title : 'การ์ด'}</p>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam eligendi alias nobis architecto assumenda sint, necessitatibus ut aliquid iusto sit nostrum, sequi amet exercitationem in eius officiis dolorem perferendis deleniti.</p>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseDialog} color="primary">
                        ปิด
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default Serve;
