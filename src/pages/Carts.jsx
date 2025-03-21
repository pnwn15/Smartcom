import React, { useEffect, useState } from 'react';
import { Container, Typography, Grid, Card, CardContent, CardMedia, Button, Box, Dialog, DialogActions, DialogContent, DialogTitle, TextField, Input } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Category from '../components/Category';

function Cartss() {
    const [CartsItems, setCartsItems] = useState([]); // State สำหรับเก็บรายการสินค้าในตะกร้า
    const [openDialog, setOpenDialog] = useState(false); // State สำหรับเปิด/ปิด Dialog
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [location, setLocation] = useState('');
    const [payment, setPayment] = useState('');
    const [file, setFile] = useState(null);
    const navigate = useNavigate();

    // ดึงข้อมูลสินค้าในตะกร้าจาก localStorage เมื่อโหลดหน้า
    useEffect(() => {
        const storedCartsItems = JSON.parse(localStorage.getItem('cartItems')) || [];
        setCartsItems(storedCartsItems);
    }, []);  // Ensure this runs only once on component mount

    // ฟังก์ชันที่จะถูกเรียกเมื่อผู้ใช้เลือกไฟล์
    const handleFileChange = (event) => {
        const selectedFile = event.target.files[0];
        if (selectedFile) {
            setFile(selectedFile);
        }
    };
    // คำนวณราคารวม
    const calculateTotalPrice = () => {
        return CartsItems.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    // ลบสินค้าออกจากตะกร้า
    const removeFromCart = (productId) => {
        const updatedCartsItems = CartsItems.filter(item => item.id !== productId);
        setCartsItems(updatedCartsItems);
        localStorage.setItem('cartItems', JSON.stringify(updatedCartsItems));  // Use 'cartItems' consistently
    };

    // ปรับจำนวนสินค้า
    const updateQuantity = (productId, newQuantity) => {
        const updatedCartsItems = CartsItems.map(item =>
            item.id === productId ? { ...item, quantity: newQuantity } : item
        );
        setCartsItems(updatedCartsItems);
        localStorage.setItem('cartItems', JSON.stringify(updatedCartsItems));  // Use 'cartItems' consistently
    };

    // Handle clicking a product to go to its details page
    const handleProductClick = (productId) => {
        navigate(`/product/${productId}`);
    };

    // เปิด Dialog สำหรับกรอกที่อยู่
    const handleCheckoutClick = () => {
        setOpenDialog(true);
    };

    // ปิด Dialog
    const handleCloseDialog = () => {
        setOpenDialog(false);
    };

    const handleSubmitAddress = () => {
        // การจัดการส่งข้อมูลเมื่อกด "ยืนยัน"
        console.log("ข้อมูลที่กรอก:", { name, phone, email, location, payment });
        handleCloseDialog();
    };

    return (
        <Container maxWidth="lg" sx={{
            marginTop: 16,
            marginBottom: 10
        }}>
            <Typography
                sx={{
                    border: '2px solid #FFFFFF',
                    padding: '10px',
                    borderRadius: '4px',
                    textAlign: 'center',
                    backgroundColor: 'red',
                    color: 'white'
                }}
                variant="h4"
                gutterBottom
            >
                สินค้าในตะกร้า
            </Typography>

            {CartsItems.length === 0 ? (
                <Typography variant="h6">ตะกร้าสินค้าว่างเปล่า</Typography>
            ) : (
                <Grid container spacing={4}>
                    <Grid item xs={12} md={8}>
                        {CartsItems.map((item) => (
                            <Card
                                key={item.id}
                                sx={{
                                    marginBottom: 2,
                                    border: '2px solid #FF0000',
                                    borderRadius: '8px',
                                }}
                            >
                                <CardContent>
                                    <Grid container spacing={2}>
                                        <Grid item xs={4}>
                                            <CardMedia
                                                component="img"
                                                image={item.imagesrc || 'https://dummyimage.com/150x150/000/fff'}
                                                alt={item.name}
                                                sx={{ width: '100%', height: 'auto' }}
                                                onClick={() => handleProductClick(item.id)}
                                                style={{ cursor: 'pointer' }}
                                            />
                                        </Grid>
                                        <Grid item xs={8}>
                                            <Typography variant="h6">{item.name}</Typography>
                                            <Typography variant="body1">สี: {item.color}</Typography>
                                            <Typography variant="body1">ราคาต่อชิ้น: ${item.price}</Typography>
                                            <Box sx={{ display: 'flex', alignItems: 'center', marginTop: 2 }}>
                                                <Button
                                                    variant="outlined"
                                                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                    disabled={item.quantity <= 1}
                                                >
                                                    -
                                                </Button>
                                                <Typography variant="body1" sx={{ marginX: 2 }}>
                                                    {item.quantity}
                                                </Typography>
                                                <Button
                                                    variant="outlined"
                                                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                >
                                                    +
                                                </Button>
                                                <Button
                                                    variant="contained"
                                                    color="error"
                                                    sx={{ marginLeft: 2 }}
                                                    onClick={() => removeFromCart(item.id)}
                                                >
                                                    ลบ
                                                </Button>
                                            </Box>
                                        </Grid>
                                    </Grid>
                                </CardContent>
                            </Card>
                        ))}
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Card>
                            <CardContent>
                                <Typography variant="h6" gutterBottom>
                                    Order Summary
                                </Typography>
                                <Typography variant="body1">
                                    จำนวนสินค้า: {CartsItems.reduce((total, item) => total + item.quantity, 0)}
                                </Typography>
                                <Typography variant="body1">
                                    ส่วนลด
                                </Typography>
                                <Typography variant="body1">
                                    Subtotal: ${calculateTotalPrice()}
                                </Typography>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    fullWidth
                                    sx={{ marginTop: 2 }}
                                    onClick={handleCheckoutClick} // นำทางไปแสดง Dialog สำหรับกรอกที่อยู่
                                >
                                    ชำระเงิน
                                </Button>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            )}

            <Dialog open={openDialog} onClose={handleCloseDialog}>
                <DialogTitle>กรุณากรอกข้อมูลการชำระเงิน</DialogTitle>
                <DialogContent>
                    {/* ชื่อ-นามสกุล */}
                    <TextField
                        margin="dense"
                        label="ชื่อ-นามสกุล"
                        type="text"
                        fullWidth
                        value={name}
                        onChange={(e) => setName(e.target.value)} // Update name state
                        sx={{ marginBottom: 2 }}
                    />
                    {/* เบอร์ติดต่อ */}
                    <TextField
                        margin="dense"
                        label="เบอร์ติดต่อ"
                        type="text"
                        fullWidth
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)} // Update phone state
                        sx={{ marginBottom: 2 }}
                    />
                    {/* อีเมลล์ */}
                    <TextField
                        margin="dense"
                        label="อีเมลล์"
                        type="email"
                        fullWidth
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} // Update email state
                        sx={{ marginBottom: 2 }}
                    />
                    {/* สถานที่ */}
                    <TextField
                        margin="dense"
                        label="สถานที่"
                        type="text"
                        fullWidth
                        value={location}
                        onChange={(e) => setLocation(e.target.value)} // Update location state
                        sx={{ marginBottom: 2 }}
                    />
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around' }}>
                        {/* รูปทางซ้าย */}
                        <img
                            src="/bank.jpg"
                            alt="Account"
                            style={{ width: 200, height: 200, objectFit: 'cover' }}
                        />

                        {/* เลขบัญชีทางขวา */}
                        <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                            เลขบัญชี: 123-456-7890
                        </Typography>
                    </Box>
                    {/* การชำระเงิน */}
                    <div className='mt-10'>
                        {/* Label สำหรับอัปโหลดไฟล์ */}
                        <Input
                            type="file"
                            onChange={handleFileChange}
                            inputProps={{ accept: '.jpg,.jpeg,.png,.pdf,.doc,.docx' }} // กำหนดประเภทไฟล์ที่สามารถเลือกได้
                            sx={{ display: 'none' }}  // ซ่อน Input ที่ใช้เลือกไฟล์
                            id="upload-file"
                        />
                        <label htmlFor="upload-file">
                            {/* ปุ่มที่ให้ผู้ใช้คลิกเพื่อเลือกไฟล์ */}
                            <Button variant="contained" component="span">
                                อัปโหลดไฟล์
                            </Button>
                        </label>

                        {/* แสดงชื่อไฟล์ที่ถูกเลือก */}
                        {file && (
                            <div style={{ marginTop: 10 }}>
                                <strong>ไฟล์ที่เลือก: </strong>{file.name}
                            </div>
                        )}
                    </div>

               
                </DialogContent>
                <DialogActions sx={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                    <Button onClick={handleCloseDialog} color="primary">
                        ยกเลิก
                    </Button>
                    <Button onClick={handleSubmitAddress} color="primary">
                        ยืนยัน
                    </Button>
                </DialogActions>
            </Dialog>

            <Grid item xs={12} md={4}>
                <Category />
            </Grid>
        </Container>
    );
}

export default Cartss;
