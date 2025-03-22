import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Container, Typography, Grid, Card, CardContent, CardMedia, Box } from '@mui/material';
import { ShoppingCartOutlined, HeartOutlined, ShareAltOutlined } from '@ant-design/icons';
import Social from '../components/Social';
import Category from '../components/Category';
import { useNavigate, } from 'react-router-dom';
function ProductDetail() {
    const { state } = useLocation(); // ดึงข้อมูลจาก state ที่ส่งมาจากหน้า Shop
    const product = state?.product; // ตรวจสอบว่ามีข้อมูลสินค้าใน state หรือไม่
    const [quantity, setQuantity] = useState(1);
    const navigate = useNavigate();

    // Calculate the total price
    const totalPrice = product.price * quantity;

    // Handle quantity increase
    const increaseQuantity = () => {
        setQuantity(prevQuantity => prevQuantity + 1);
    };

    // Handle quantity decrease
    const decreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity(prevQuantity => prevQuantity - 1);
        }
    };
    if (!product) {
        return <Typography variant="h6">Product not found!</Typography>;
    }

    // Assuming the product has an array of additional images
    const additionalImages = [
        product.image1,
        product.image2,
        product.image3,
        product.image4,
    ];

    // Handle adding to the cart
    const addToCart = () => {
        console.log(`${product.name} added to cart. Quantity: ${quantity}, Total Price: $${totalPrice}`);
        // Add logic to update the cart here
    };

    const handleBuyNow = () => {
        const cartItem = {
            id: product.id,
            name: product.name,
            price: product.price,
            color: product.color,
            imagesrc: product.imagesrc,
            imagedetail: product.imagedetail,
            quantity: quantity,
        };

        // ดึงข้อมูลตะกร้าจาก localStorage
        const storedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

        // ตรวจสอบว่ามีสินค้านี้ในตะกร้าหรือไม่
        const existingItemIndex = storedCartItems.findIndex(item => item.id === cartItem.id);

        if (existingItemIndex !== -1) {
            // ถ้ามีสินค้านี้อยู่แล้วในตะกร้า ให้เพิ่มจำนวน
            storedCartItems[existingItemIndex].quantity += cartItem.quantity;
        } else {
            // ถ้ายังไม่มี ให้เพิ่มสินค้าลงไป
            storedCartItems.push(cartItem);
        }

        // บันทึกข้อมูลลงใน localStorage
        localStorage.setItem('cartItems', JSON.stringify(storedCartItems));

        // นำทางไปยังหน้าตะกร้าสินค้า
        navigate('/allcart');
    };



    return (
        <Container maxWidth="lg" sx={{ marginTop: 16 }}>
            <Grid container spacing={4}>

                <Grid item xs={12}>
                    <div className="container mx-auto p-4 ">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            <div>
                                {/* Product Image */}
                                <div className="border border-black">
                                    {/* Main Product Image */}
                                    <img
                                        src={product.imagesrc || 'https://dummyimage.com/150x150/000/fff'}
                                        alt={product.name}
                                        className="w-full h-96 object-cover rounded-lg"
                                    />

                                    {/* Image Album Below */}

                                </div>
                                <div className="grid grid-cols-4 gap-2 mt-4">
                                    {additionalImages.map((image, index) => (
                                        <div className='border border-black'>
                                            <img
                                                key={index} // It's good practice to use a unique key for each element in a loop
                                                src={product.imagesrc || 'https://dummyimage.com/150x150/000/fff'}
                                                alt={`${product.name} image ${index + 1}`}
                                                className="w-full h-24 object-cover rounded-2xl"
                                            />
                                        </div>
                                        
                                    ))}
                                </div>
                            </div>
                            <div className="flex flex-col space-y-4 mx-auto container">
                                <h2 className="text-sm border border-red-200 bg-red-200 w-30 rounded-4xl text-red-600 py-1 px-2">
                                    {product.category}
                                </h2>
                                <h1 className="text-3xl font-bold">{product.name}</h1>
                                <p className="text-md text-gray-500">{`Color: ${product.color}`}</p>
                                <p className="text-2xl font-semibold  text-red-600">{`$: ${totalPrice}`}</p>
                                <div className="flex items-center space-x-4">
                                    <button
                                        className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md"
                                        onClick={decreaseQuantity}
                                    >
                                        -
                                    </button>
                                    <p className="text-xl font-semibold">{quantity}</p>
                                    <button
                                        className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md"
                                        onClick={increaseQuantity}
                                    >
                                        +
                                    </button>
                                    <div className="flex items-center flex-wrap space-x-4 ">
                                        {/* Cart Logo/Button */}
                                        <button className="px-4 py-2 bg-gray-400 hover:bg-amber-500 text-white rounded-lg flex items-center space-x-2" onClick={addToCart}>
                                            <ShoppingCartOutlined className="text-white w-5 h-5" />
                                            <span>เพิ่มในตะกร้าสินค้า</span>
                                        </button>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-4 w-full">
                                    {/* Cart Logo/Button */}
                                    <button className="px-4 py-2 bg-gray-400 w-1/2 hover:bg-red-600  text-white rounded-lg flex items-center space-x-2" onClick={handleBuyNow}>
                                        <div className='flex justify-center items-center w-full'>
                                            <ShoppingCartOutlined className="text-white w-5 h-5" />
                                            <span>ซื้อเลย</span>
                                        </div>
                                    </button>
                                </div>
                                <hr />
                                <div className='flex justify-between'>
                                    <div className="flex space-x-4">
                                        <div className='border rounded-full group hover:bg-red-500 hover:text-white'>
                                            {/* Heart Icon */}
                                            <HeartOutlined className="text-red-500 text-md p-2" />
                                        </div>
                                        <div className='border rounded-full hover:bg-red-500 hover:text-white'>
                                            {/* Share Icon */}
                                            <ShareAltOutlined className="text-blue-500 p-2 text-md" />
                                        </div>
                                    </div>
                                    <div>
                                        <Social />
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                        <div className='flex flex-col mt-4 gap-7 justify-center items-center'>
                            <h1 className='text-4xl font-extrabold'>Detail</h1>
                            <img src={product.imagedetail || 'https://dummyimage.com/150x150/000/fff'} alt="" />
                        </div>
                    </div>
                </Grid>
            <hr />
                <Grid item xs={12}>
                    <Category />
                </Grid>
            </Grid>
        </Container>
    );
}

export default ProductDetail;
