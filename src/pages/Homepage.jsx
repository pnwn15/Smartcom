import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Homepage = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    return (
        <div className="min-h-screen">
            {/* Main Content with Background Image */}
            <main className="relative w-full h-screen bg-cover bg-center flex flex-col justify-center items-center text-center py-16" style={{ backgroundImage: 'url(/Carou1.png)' }}>
                <h2 className="text-4xl font-bold text-white">Starter Way</h2>
                <p className="mt-4 text-xl text-gray-300">มุ่งมั่นสู่ความเป็นเลิศ เป็นผู้นำด้านเทคโนโลยี</p>

                {/* Image Carousel with Background Images */}
                <div className="absolute inset-0 w-full h-full z-10">
                    <Slider {...settings}>
                        <div className="h-full w-full bg-cover bg-center rounded-lg" style={{ backgroundImage: 'url(/Carou1.png)' }}></div>
                        <div className="h-full w-full bg-cover bg-center rounded-lg" style={{ backgroundImage: 'url(/Carou2.jpg)' }}></div>
                        <div className="h-full w-full bg-cover bg-center rounded-lg" style={{ backgroundImage: 'url(/Carou3.png)' }}></div>
                    </Slider>
                </div>

                {/* Buttons */}
                <div className="mt-8 z-20">
                    <button className="bg-blue-600 text-white px-6 py-2 rounded-lg text-xl hover:bg-blue-700 transition duration-300 mr-4">
                        Get Started
                    </button>
                    <button className="bg-gray-500 text-white px-6 py-2 rounded-lg text-xl hover:bg-gray-600 transition duration-300">
                        Learn More
                    </button>
                </div>
            </main>
        </div>
    );
};

export default Homepage;
