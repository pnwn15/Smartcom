import React, { useEffect, useState } from 'react';
import Slider from 'react-slick'; // Importing react-slick component
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import axios from 'axios'; // Importing axios for API calls
import { ShoppingCartOutlined } from '@ant-design/icons'; // Importing ShoppingCartOutlined icon from Ant Design
import { useNavigate, } from 'react-router-dom';

function Category() {
    const [products, setProducts] = useState([]);
    const [cartItems, setCartItems] = useState([]);
    const [loading, setLoading] = useState(true); // State for loading status
    const [error, setError] = useState(null); // State for error handling
    const navigate = useNavigate();
    useEffect(() => {
        // Fetch data when component mounts
        axios
            .get('http://localhost:3000/cart/') // Replace with your API URL
            .then((response) => {
                setProducts(response.data); // Update state with the fetched categories
                setLoading(false); // Stop loading once data is fetched
            })
            .catch(() => {
                setError('Failed to fetch categories'); // Handle error if API call fails
                setLoading(false); // Stop loading in case of error
            });
    }, []); // Empty dependency array means this effect runs once when the component mounts

    // Loading and error handling
    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    const addToCart = (product) => {
        console.log('Product added to cart:', product);
        const updatedCartItems = [...cartItems, product];
        setCartItems(updatedCartItems); // อัปเดต state
        localStorage.setItem('cartItems', JSON.stringify(updatedCartItems)); // บันทึกลง localStorage
        navigate(`/product/${product.id}`, { state: { product } });
    };

    const goToProductDetail = (product) => {
        console.log('Navigating to product detail:', product);
        navigate(`/product/${product.id}`, { state: { product } });
    };

    const settings = {
        dots: true, // Shows dots navigation
        infinite: true, // Infinite scroll
        speed: 500, // Transition speed
        slidesToShow: 4, // Number of items to show
        slidesToScroll: 1, // Number of items to scroll per navigation
        autoplay: true, // Enables autoplay
        autoplaySpeed: 1000, // Time in milliseconds between slide transitions (3 seconds)
        responsive: [
            {
                breakpoint: 1024, // At a width of 1024px or more
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                    autoplay: true,
                    autoplaySpeed: 3000, // Same autoplay speed for this breakpoint
                },
            },
            {
                breakpoint: 600, // At a width of 600px or more
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    dots: true,
                    autoplay: true,
                    autoplaySpeed: 3000, // Same autoplay speed for this breakpoint
                },
            },
            {
                breakpoint: 480, // At a width of 480px or more
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,
                    autoplay: true,
                    autoplaySpeed: 3000, // Same autoplay speed for this breakpoint
                },
            },
        ],
    };


    return (
        <div className="category-slider-container border-t-2">
            <h2 className="text-center font-bold text-lg mb-6 mt-3">จากหมวดหมู่เดียวกัน</h2>
            
            <Slider {...settings}>
                {products.map((product) => (
                    <div
                        key={product.id}
                        className="group relative flex justify-center px-4 py-6" // Added padding and margin for spacing between cards
                    >
                        {/* Card container with shadow and rounded corners */}
                        <div className="relative w-full h-full bg-white rounded-lg shadow-lg overflow-hidden transform group-hover:scale-105 transition-transform duration-300">
                            {/* ภาพสินค้า */}
                            <div className="relative w-full h-60">
                                <img
                                    alt={product.name}
                                    src={product.imagesrc || 'https://dummyimage.com/150x150/000/fff'}
                                    className="w-full h-full object-cover rounded-t-lg group-hover:opacity-80 transition-opacity duration-300"
                                />
                            </div>

                            {/* ข้อมูลสินค้า */}
                            <div className="absolute inset-0 flex flex-col justify-end items-center text-center p-4 bg-gradient-to-t from-black to-transparent rounded-b-lg">
                                <h3 className="text-lg font-semibold text-white mb-2">
                                    <a href={product.href}>
                                        <span aria-hidden="true" className="absolute inset-0" />
                                        {product.name}
                                    </a>
                                </h3>
                                <p className="text-md font-medium text-white">{product.price}</p>
                                <p className="mt-1 text-sm text-gray-300">{product.color}</p>
                            </div>

                            {/* ปุ่ม Buy - ปุ่มนี้จะถูกแสดงเมื่อ hover */}
                            <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <button
                                    onClick={() => {
                                        console.log('Clicked Buy button');
                                        addToCart(product); // เพิ่มสินค้าไปในตะกร้า
                                        goToProductDetail(product); // นำทางไปที่หน้า ProductDetail พร้อมข้อมูลสินค้า
                                    }}
                                    className="text-black bg-white border border-black px-6 py-3 rounded-full text-lg font-medium flex items-center justify-center"
                                >
                                    <ShoppingCartOutlined className="w-5 text-black" /> {/* ขยายไอคอนให้ใหญ่ขึ้น */}
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>


        </div>
    );
}

export default Category;
