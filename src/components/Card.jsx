import React,{useState} from 'react'

export function Card({ title, subtitle, description }) {
    return (
        <div className="absolute sm:absolute md:relative md:left-11 sm:left-0">
            <div className="block max-w-sm h-[200px] w-auto mt-16 p-6 bg-[#D9D9D9] border flex gap-2 border-gray-200 rounded-lg shadow-sm hover:bg-gray-100">
                <div className="flex flex-col items-center w-full h-full">
                    <h1 className="text-lg underline decoration-red-500 decoration-2 text-black">
                        {title} <span className="text-red-600 font-bold text-xl">{subtitle}</span>
                    </h1>
                    <p className='text-black font-medium'>{description}</p>
                </div>
            </div>
        </div>


    )
}
export function Card1() {
    return (
        <div className=''>
            <a href="#" className="block max-w-xl w-full sm:w-full md:w-[500px] h-[400px] p-6  ">
                <img
                    src="/pg1.jpg"
                    alt="Image"
                    className="w-full h-full object-cover rounded-lg"
                />
            </a>
        </div>
    )
}

export function Card2() {
    return (
        <div>
            <a href="#" className="block max-w-xl w-full sm:w-full md:w-[500px] h-full p-6 bg-white border border-gray-200 shadow-sm">
                <div className='flex  '>
                    <h1 className='text-red-600 text-lg font-bold border-b-2'>Smart <span className='text-black font-bold text-lg'>Insight</span></h1>
                </div>
                <img
                    src="/camara.png"
                    alt="Image"
                    className="w-full h-[300px] mt-4 border p-5 object-cover bg-center bg-black"
                />
                <div className='flex flex-col gap-5 flex-wrap text-start mt-8'>
                    <h1 className='font-bold text-xl text-black'>ขับเเคลื่อนธุรกิจของคุณด้วยโซลูซันอัจฉริยะที่ผสมผสานประสิทธิภาพ ความปลอดภัย เเละนวัตกรรม</h1>
                    <p className='font-medium text-md text-black'> ขับเคลื่อนธุรกิจของคุณด้วยโซลูซันอัจฉริยะที่ผสมผสานประสิทธิภาพ ความปลอดภัยเเละนวัตกรรม เพื่อความก้าวหน้าล้ำที่เหนือกว่า ร่วมเป็น
                        พันธมิตรกับเราเพื่อเปลี่ยนธุรกิจของคุณให้ก้าวล้ำหน้าในทุกมิติ
                    </p>
                </div>
            </a>
        </div>
    )
}
export function Card3() {
    const items = [
        {
            image: '/camara.png',
            title: 'ขับเคลื่อนธุรกิจของคุณด้วยโซลูซั่น',
            description: 'ขับเเคลื่อนธุรกิจของคุณด้วยโซลูซันอัจฉริยะที่ผสมผสานประสิทธิภาพ ความปลอดภัย',
        },
        {
            image: '/camara.png',
            title: 'ขับเคลื่อนธุรกิจของคุณด้วยโซลูซั่น',
            description: 'ขับเเคลื่อนธุรกิจของคุณด้วยโซลูซันอัจฉริยะที่ผสมผสานประสิทธิภาพ ความปลอดภัย',
        },
        {
            image: '/camara.png',
            title: 'ขับเคลื่อนธุรกิจของคุณด้วยโซลูซั่น',
            description: 'ขับเเคลื่อนธุรกิจของคุณด้วยโซลูซันอัจฉริยะที่ผสมผสานประสิทธิภาพ ความปลอดภัย',
        },
    ];
    return (
        <div>
            <a href="#" className="block  max-w-lg w-full sm:w-full md:w-[500px] h-auto p-6 bg-white border border-gray-200 shadow-sm">
                <div>
                    {items.map((item, index) => (
                        <div key={index} className="flex space-x-3">
                            <img
                                src={item.image}
                                alt="Image"
                                className="w-1/2 h-full object-cover rounded-lg"
                            />
                            <div className="flex flex-col text-start">
                                <h1 className="font-bold text-md text-black">{item.title}</h1>
                                <p>{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </a>
        </div>
    )
}
export function Card4() {
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [selectedCard, setSelectedCard] = useState(null); // เก็บข้อมูลของการ์ดที่ถูกเลือก
    const cardsData = [
        {
            id: 1,
            image: "/Carous2.jpg",  // เปลี่ยนเป็น URL รูปที่คุณต้องการ
            title: "ขับเคลื่อนธุรกิจของคุณด้วยโซลูชัน",
            description: "ขับเคลื่อนธุรกิจของคุณด้วยโซลูชันอัจฉริยะที่ผสมผสานประสิทธิภาพ ความปลอดภัย"
        },
        {
            id: 2,
            image: "/Carous3.jpg",
            title: "ขับเคลื่อนธุรกิจของคุณด้วยโซลูชัน",
            description: "ขับเคลื่อนธุรกิจของคุณด้วยโซลูชันอัจฉริยะที่ผสมผสานประสิทธิภาพ ความปลอดภัย"
        },
        {
            id: 3,
            image: "/Carous1.jpg",
            title: "ขับเคลื่อนธุรกิจของคุณด้วยโซลูชัน",
            description: "ขับเคลื่อนธุรกิจของคุณด้วยโซลูชันอัจฉริยะที่ผสมผสานประสิทธิภาพ ความปลอดภัย"
        }
    ];
    // ฟังก์ชั่นเพื่อเปิด Dialog และเก็บข้อมูลของการ์ดที่คลิก
    const openDialog = (card) => {
        setSelectedCard(card);
        setIsDialogOpen(true);
    };

    // ฟังก์ชั่นเพื่อปิด Dialog
    const closeDialog = () => {
        setIsDialogOpen(false);
        setSelectedCard(null);
    };
    return (
        <div className="flex lg:flex-row justify-center w-full flex-col sm:w-full sm:flex-col md:w-full md:flex-col gap-4 p-6 flex-wrap">
            {cardsData.map((card) => (
                <div key={card.id} className="bg-white shadow-lg rounded-xl h-auto lg:w-[20%] sm:w-full md:w-full w-full p-1 cursor-pointer" onClick={() => openDialog(card)}>
                    <img src={card.image} alt={card.title} className="w-full h-70 object-cover mb-4 rounded-xl" />
                    <div className='p-4 text-black'>
                        <h3 className="font-bold text-start text-lg mb-2">{card.title}</h3>
                        <p className='text-start'>{card.description}</p>
                    </div>
                </div>
            ))}

            {/* Dialog */}
            {isDialogOpen && selectedCard && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-white p-6 rounded-xl max-w-md w-full">
                        <h3 className="text-2xl font-bold mb-4">{selectedCard.title}</h3>
                        <img src={selectedCard.image} alt={selectedCard.title} className="w-full h-60 object-cover mb-4 rounded-xl" />
                        <p>{selectedCard.description}</p>
                        <div className="mt-4 flex justify-end">
                            <button onClick={closeDialog} className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                                ปิด
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export function Card5() {
    const cardsData = [
        {
            id: 1,
            image: "/smart.jpg",  // เปลี่ยนเป็น URL รูปที่คุณต้องการ
            title: "การเก็บธัญพืชด้วยระบบ Smart Silo จากโครงการจังหวัดตาก",
            description: "Smart Silo สามารถเชื่อมต่อและทำงานร่วมกับระบบ ERP และระบบบริหารจัดการทั้งโรงได้",
            avatar: "/avatar1.jpg",
            name: "Admin smartcom",
            date: "14 March 2024"
        },
        {
            id: 2,
            image: "/smart.jpg",
            title: "การเก็บธัญพืชด้วยระบบ Smart Silo จากโครงการจังหวัดตาก",
            description: "Smart Silo สามารถเชื่อมต่อและทำงานร่วมกับระบบ ERP และระบบบริหารจัดการทั้งโรงได้",
            avatar: "/avatar1.jpg",
            name: "Admin smartcom",
            date: "14 March 2024"
        },
        {
            id: 3,
            image: "/smart.jpg",
            title: "การเก็บธัญพืชด้วยระบบ Smart Silo จากโครงการจังหวัดตาก",
            description: "Smart Silo สามารถเชื่อมต่อและทำงานร่วมกับระบบ ERP และระบบบริหารจัดการทั้งโรงได้",
            avatar: "/avatar1.jpg",
            name: "Admin smartcom",
            date: "14 March 2024"
        }
    ];
    return (
        <div className="flex lg:flex-row justify-center w-full  flex-col sm:w-full sm:flex-col md:w-full md:flex-col gap-4 p-6 flex-wrap">
            {cardsData.map((card) => (
                <div key={card.id} className="bg-white shadow-lg rounded-xl h-auto lg:w-[30%] sm:w-full md:w-full w-full ">
                    <img src={card.image} alt={card.title} className="w-full h-90 object-cover mb-4 rounded-xl" />
                    <div className='p-4 text-black'>
                        <h3 className="font-bold text-start text-lg mb-2">{card.title}</h3>
                        <p className='text-start'>{card.description}</p>
                        <div className='flex justify-between mt-5'>
                            <div className='flex '>
                                <img className='rounded-full w-12' src={card.avatar} alt="" />
                                <p className='text-start my-auto'>{card.name}</p>
                            </div>
                            <p className='text-start my-auto'>{card.date}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>



    )
}
