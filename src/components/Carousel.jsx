import React, { useState, useEffect } from "react";
import { CaretRightOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

const Carousel = ({ slides }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const navigate = useNavigate();

    const handleButtonClick1 = () => {
        // นำทางไปหน้าแรก (เช่น หน้า Contact หรือ หน้าอื่นๆ ที่คุณต้องการ)
        navigate('/solution');
    };

    const handleButtonClick2 = () => {
        // นำทางไปหน้าที่สอง
        navigate('/contact');
    };
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
        <div className="relative w-full  sm:h-screen xl:h-full  lg:h-[500px] mx-auto mt-10">
            <div className="relative overflow-hidden rounded-lg shadow-2xl">
                {/* สไลด์ */}
                <div
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                    {slides.map((slide, index) => (
                        <div
                            key={index}
                            className="w-full xl:h-[700px] h-screen md:h-screen object-cover bg-center lg:h-[500px] flex-shrink-0 relative"
                        >
                            <img
                                src={slide.image}
                                alt={`Slide ${index + 1}`}
                                className="block w-full h-screen object-cover bg-center" // ใช้ object-cover เพื่อให้ภาพเต็มขนาด
                            />
                            <div className="absolute tracking-most inset-0 flex gap-8 items-center mx-auto container flex-col justify-center">
                                <h2 className={slide.fontStyle}>{slide.title}</h2>
                                <h3 className={slide.fontStyle1}>{slide.title1}</h3>
                                <h3 className={slide.fontStyle2}>{slide.title2}</h3>
                                <div className="flex gap-4">
                                    <button onClick={handleButtonClick1} className={`w-26 h-12 text-black font-bold rounded-full ${slide.buttonStyle}`}>
                                        {slide.buttonText}
                                    </button>
                                    <button onClick={handleButtonClick2} className={`w-26 h-12 text-red-600 font-bold rounded-full ${slide.buttonStyle1}`}>
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
                        className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 ${index === currentIndex ? "bg-red-600" : "bg-white"}`}
                    />
                ))}

                {/* Arrow icon */}
                <div className="border border-white rounded-full p-2 flex items-center justify-center" style={{ width: '20px', height: '20px' }}>
                    <CaretRightOutlined style={{ fontSize: '16px', color: '#fff' }} />
                </div>
            </div>
        </div>
    );
};

const Carousel1 = ({ slidessolution }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const navigate = useNavigate();
    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slidessolution.length);
    };

    useEffect(() => {
        const interval = setInterval(nextSlide, 10000);
        return () => clearInterval(interval); // ควบคุมการล้าง interval
    }, []);

    // ฟังก์ชันเพื่อเปลี่ยนสไลด์เมื่อคลิกจุดวงกลม
    const goToSlide = (index) => {
        setCurrentIndex(index);
    };
    

    const handleButtonClick1 = () => {
        // นำทางไปหน้าแรก (เช่น หน้า Contact หรือ หน้าอื่นๆ ที่คุณต้องการ)
        navigate('/industries');
    };

    const handleButtonClick2 = () => {
        // นำทางไปหน้าที่สอง
        navigate('/contact');
    };
    return (
        <div className="relative w-full sm:h-screen xl:h-full lg:h-[500px] mx-auto mt-10">
            <div className="relative overflow-hidden rounded-lg shadow-2xl sticky top-0 z-10">
                {/* สไลด์ */}
                <div
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                    {slidessolution.map((slide, index) => (
                        <div
                            key={index}
                            className="w-full xl:h-[700px] h-screen md:h-screen object-cover bg-center lg:h-[500px] flex-shrink-0 relative"
                        >
                            <img
                                src={slide.image}
                                alt={`Slide ${index + 1}`}
                                className="block w-full h-screen object-cover bg-center" // ใช้ object-cover เพื่อให้ภาพเต็มขนาด
                            />
                            <div className="absolute tracking-most inset-0 flex gap-8 items-center mx-auto container flex-col justify-center">
                                <h2 className={slide.fontStyle}>{slide.title}</h2>
                                <h3 className={slide.fontStyle1}>{slide.title1}</h3>
                                <h3 className={slide.fontStyle2}>{slide.title2}</h3>
                                <div className="flex gap-4">
                                    <button onClick={handleButtonClick1} className={`ml-4 px-6 py-2 text-black font-bold rounded-full ${slide.buttonStyle}`}>
                                        {slide.buttonText}
                                    </button>
                                    <button onClick={handleButtonClick2} className={`ml-4 px-6 py-2 text-red-600 font-bold rounded-full ${slide.buttonStyle1}`}>
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
                {slidessolution.map((_, index) => (
                    <div
                        key={index}
                        onClick={() => goToSlide(index)}  // เปลี่ยนไปที่สไลด์ที่เลือก
                        className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 ${index === currentIndex ? "bg-red-600" : "bg-white"}`}
                    />
                ))}

                {/* Arrow icon */}
                <div className="border rounded-full p-2 flex items-center justify-center" style={{ width: '20px', height: '20px' }}>
                    <CaretRightOutlined style={{ fontSize: '16px', color: '#fff' }} />
                </div>
            </div>
        </div>


    );
};

export default Carousel;
