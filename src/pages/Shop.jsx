import React, { useState, useEffect, useRef } from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Carousel from '../components/Carousel';
import sildesSolutionData from '../Json/slidessolution.json';
import { useNavigate, } from 'react-router-dom';
import { ShoppingCartOutlined } from '@ant-design/icons'; // นำเข้าไอคอนจาก Ant Design
import axios from 'axios';

function Shop() {
    const [slidessolution, setSlides1] = useState([]);
    const [activeTab, setActiveTab] = useState(0);
    const [cartItems, setCartItems] = useState([]);
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();
    const fileInputRef = useRef(null);
    const tabs = ["All product","Fidus", "Lilin", "Ionetworks", "Gatekeeper","Blauberg","Shany","Honeywell","Cambium Networks"];

    useEffect(() => {
        setSlides1(sildesSolutionData);

        // ดึงข้อมูลสินค้าจาก API
        axios.get('http://localhost:3000/cart/')
            .then(response => {
                setProducts(response.data);
            })
            .catch(error => {
                console.error("Error fetching products:", error);
            });
    }, []);

    const uploadImage = async (file) => {
        const formData = new FormData();
        formData.append('image', file);

        try {
            const response = await axios.post('http://localhost:3000/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            console.log(response.data);
        } catch (error) {
            console.error('Error uploading image', error);
        }
    };

    useEffect(() => {
        if (fileInputRef.current) {
            fileInputRef.current.addEventListener('change', handleFileChange);
        }
        return () => {
            if (fileInputRef.current) {
                fileInputRef.current.removeEventListener('change', handleFileChange);
            }
        };
    }, []);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            uploadImage(file);
        }
    };

    const filteredItems = products?.filter(product => {
        if (activeTab === 0) return true; // All Products
        if (tabs[activeTab] === product.category) return true;
        return false;
    }) || [];

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

    const Item = styled(Paper)(({ theme }) => ({
        ...theme.typography.body2,
        textAlign: 'center',
        color: theme.palette.text.secondary,
        borderRadius: 0,
    }));

    return (
        <Grid container spacing={0} direction="column">
            <Grid item xs={12}>
                <Item sx={{ margin: 0, border: 'none' }}>
                    <Carousel slides={slidessolution} />
                </Item>
            </Grid>

            <Grid item xs={12} sx={{ border: 'none' }}>
                <Item>
                    <div className="bg-white h-full">
                        <div className="mx-auto container max-w-7xl my-auto py-16 sm:px-6 sm:py-24 mt-5 lg:px-8 t">
                            <div className="mb-6">
                                <nav className="flex lg:space-x-8 space-x-2 items-center text-center flex-wrap   justify-center overflow-auto">
                                    {tabs.map((tab, index) => (
                                        <button
                                            key={index}
                                            onClick={() => setActiveTab(index)}
                                            className={`text-sm font-medium ${activeTab === index ? 'text-red-600 border-b-2 p-2 border border-red-600' : 'text-gray-500 hover:text-gray-700'}`}
                                        >
                                           / {tab}
                                        </button>
                                    ))}
                                </nav>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold tracking-tight text-gray-900">Products</h2>

                                <div className="mt-6 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-x-2 gap-y-10">
                                    {filteredItems.map((product) => (
                                        <div key={product.id} className="group relative">
                                            {/* ภาพสินค้า */}
                                            <img
                                                alt={product.imageAlt}
                                                src={product.imagesrc || 'https://dummyimage.com/150x150/000/fff'}
                                                className="aspect-square w-full rounded-md bg-center bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
                                            />

                                            {/* ข้อมูลสินค้า */}
                                            <div className="absolute inset-0 flex flex-col justify-end p-4 bg-gradient-to-t from-black to-transparent rounded-md">
                                                <h3 className="text-sm text-white">
                                                    <a href={product.href}>
                                                        <span aria-hidden="true" className="absolute inset-0" />
                                                        {product.name}
                                                    </a>
                                                </h3>
                                                <p className="text-sm font-medium text-white">{product.price}</p>
                                                <p className="mt-1 text-sm text-gray-300">{product.color}</p>
                                            </div>

                                            {/* ปุ่ม Buy - ปุ่มนี้จะถูกแสดงเมื่อ hover */}
                                            <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                <button
                                                    onClick={() => {
                                                        console.log('Clicked Buy button');
                                                        addToCart(product);  // เพิ่มสินค้าไปในตะกร้า
                                                        goToProductDetail(product);  // นำทางไปที่หน้า ProductDetail พร้อมข้อมูลสินค้า
                                                    }}
                                                    className="text-black bg-white border border-black px-6 py-3 rounded-full text-lg font-medium z-10 flex items-center justify-center"
                                                >
                                                    <ShoppingCartOutlined className="w-5 text-black" /> {/* ขยายไอคอนให้ใหญ่ขึ้น */}
                                                </button>


                                            </div>
                                        </div>
                                    ))}

                                  
                                </div>

                            </div>
                        </div>
                    </div>
                </Item>
            </Grid>


        </Grid>
    );
}

export default Shop;
