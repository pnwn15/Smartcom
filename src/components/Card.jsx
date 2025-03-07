import React from 'react'

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
            <a href="#" className="block max-w-xl w-full sm:w-full md:w-[500px] h-[400px] p-6 bg-white border border-gray-200 shadow-sm">
                <img
                    src="/camara.png"
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
            <a href="#" className="block max-w-xl w-full sm:w-full md:w-[500px] h-auto p-6 bg-white border border-gray-200 shadow-sm">
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
