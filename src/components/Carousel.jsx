import React, { useState, useEffect } from "react";
import { CaretRightOutlined } from '@ant-design/icons';
const Carousel = () => {
    const slides = [
        {
            image: "/promotion.jpg",
            title: "Smarter Way",
            fontStyle: "text-4xl font-bold text-white",
            title1: "มุ่งมั่นสู่ความเป็นเลิศ เป็นผู้นำด้านเทคโนโลยี",
            fontStyle1: "text-xl font-bold text-white",
            title2: "เรานำเสนอโซลูซั่นไอทีที่ล้ำสมัยโดยให้ความสำคัญกับการบริการเเละมาตรฐานสากลอย่างไม่อยุดยั้ง",
            fontStyle2: "text-md w-[350px] font-bold text-white",
            buttonText: "เพิ่มเติม",
            buttonStyle: "bg-white text-black font-bold hover:bg-red-600",
            buttonText1: "ติดต่อเรา",
            buttonStyle1: "bg-white text-red-600 font-bold hover:bg-black",
        },
        {
            image: "/promotion.jpg",
            title: "Smarter Way",
            fontStyle: "text-4xl  font-bold text-white",
            title1: "มุ่งมั่นสู่ความเป็นเลิศ เป็นผู้นำด้านเทคโนโลยี",
            fontStyle1: "text-xl font-bold text-white",
            title2: "เรานำเสนอโซลูซั่นไอทีที่ล้ำสมัยโดยให้ความสำคัญกับการบริการเเละมาตรฐานสากลอย่างไม่อยุดยั้ง",
            fontStyle2: "text-md w-[350px] font-bold text-white",
            buttonText: "เพิ่มเติม",
            buttonStyle: "bg-white text-black font-bold hover:bg-red-600",
            buttonText1: "ติดต่อเรา",
            buttonStyle1: "bg-white text-red-600 font-bold hover:bg-black",
        },
        {
            image: "/promotion.jpg",
            title: "Smarter Way",
            fontStyle: "text-4xl font-bold text-white",
            title1: "มุ่งมั่นสู่ความเป็นเลิศ เป็นผู้นำด้านเทคโนโลยี",
            fontStyle1: "text-xl font-bold text-white",
            title2: "เรานำเสนอโซลูซั่นไอทีที่ล้ำสมัยโดยให้ความสำคัญกับการบริการเเละมาตรฐานสากลอย่างไม่อยุดยั้ง",
            fontStyle2: "text-md w-[350px] font-bold text-white",
            buttonText: "เพิ่มเติม",
            buttonStyle: "bg-white text-black font-bold hover:bg-red-600",
            buttonText1: "ติดต่อเรา",
            buttonStyle1: "bg-white text-red-600 font-bold hover:bg-black",
        },


    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    };

    useEffect(() => {
        const interval = setInterval(nextSlide, 10000);
        return () => clearInterval(interval); // ควบคุมการล้าง interval
    }, []);

    // ฟังก์ชันเพื่อเปลี่ยนสไลด์เมื่อคลิกจุดวงกลม
    const goToSlide = (index) => {
        setCurrentIndex(index);
    };

    return (
        <div className="relative w-full  sm:h-screen xl:h-[500px] lg:h-[500px] mx-auto mt-10">
            <div className="relative overflow-hidden rounded-lg shadow-2xl">
                {/* สไลด์ */}
                <div
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                    {slides.map((slide, index) => (
                        <div
                            key={index}
                            className="w-full xl:h-[500px] h-screen md:h-screen lg:h-[500px] flex-shrink-0 relative"
                        >
                            <img
                                src={slide.image}
                                alt={`Slide ${index + 1}`}
                                className="block w-full h-full sm:h-screen  md:h-screen"
                            />
                            <div className="absolute tracking-most inset-0 flex gap-8 items-center mx-auto container flex-col justify-center">
                                <h2 className={slide.fontStyle}>{slide.title}</h2>
                                <h3 className={slide.fontStyle1}>{slide.title1}</h3>
                                <h3 className={slide.fontStyle2}>{slide.title2}</h3>
                                <div className="flex gap-4">
                                    <button className={`ml-4 px-6 py-2 text-black font-bold rounded-full ${slide.buttonStyle}`}>
                                        {slide.buttonText}
                                    </button>
                                    <button className={`ml-4 px-6 py-2 text-red-600 font-bold rounded-full ${slide.buttonStyle1}`}>
                                        {slide.buttonText1}
                                    </button>

                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* จุดวงกลมด้านล่าง */}
            <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-2 items-center">
                {/* Dots */}
                {slides.map((_, index) => (
                    <div
                        key={index}
                        onClick={() => goToSlide(index)}  // เปลี่ยนไปที่สไลด์ที่เลือก
                        className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 ${index === currentIndex ? "bg-blue-500" : "bg-gray-400"}`}
                    />
                ))}

                {/* Arrow icon */}
                <div className="border rounded-full p-2 flex items-center justify-center" style={{ width: '20px', height: '20px' }}>
                    <CaretRightOutlined style={{ fontSize: '16px', color: '#000' }} />
                </div>
            </div>
        </div>
    );
};

export default Carousel;
