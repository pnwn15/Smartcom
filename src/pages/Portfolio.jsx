import React, { useState } from 'react';
import { Box, Grid, Container, Typography, Tabs, Tab } from '@mui/material';

function Portfolio() {
    const [value, setValue] = useState(0);
    const items = [
        {
            name: "Gate Barrier",
            href: "#",
            description: "Description for Gate Barrier",
            images: ["/gate1.jpg", "/gate2.jpg", "/gate3.jpg", "/gate4.jpg", "/gate5.jpg", "/gate6.jpg", "/gate7.jpg", "/gate8.jpg", "/gate9.jpg", "/gate10.jpg", "/gate11.jpg", "/gate12.jpg",]
        },
        {
            name: "Install camera puff & pie shop",
            href: "#",
            description: "Description for Install camera puff & pie shop",
            images: ["/puff1.jpg", "/puff2.jpg", "/puff3.jpg", "/puff4.jpg", "/puff5.jpg", "/puff6.jpg", "/puff7.jpg", "/puff8.jpg","/puff9.jpg","/puff10.jpg"]
        },
        {
            name: "Glass repair work at Cargo",
            href: "#",
            description: "Description for Glass repair work at Cargo",
            images: ["/glass1.jpg", "/glass2.jpg", "/glass3.jpg", "/glass4.jpg", "/glass5.jpg", "/glass6.jpg", "/glass7.jpg", "/glass8.jpg","/glass9.jpg","/glass10.jpg",]
        },
        {
            name: "Puff & Pie Camera Repair",
            href: "#",
            description: "Description for Puff & Pie Camera Repair",
            images: ["/pie1.jpg", "/pie2.jpg", "/pie3.jpg", "/pie4.jpg", "/pie5.jpg", "/pie6.jpg", "/pie7.jpg", "/pie8.jpg",]
        },
        {
            name: "Bo cylinder work (Don Muang)",
            href: "#",
            description: "Description for Bo cylinder work (Don Muang)",
            images: ["/bo1.jpg", "/bo2.jpg", "/bo3.jpg", "/bo4.jpg", "/bo5.jpg", "/bo6.jpg", "/bo7.jpg", "/bo8.jpg", "/bo9.jpg", "/bo10.jpg",]
        },
        {
            name: "Fiber Optic Repair at ACM Building",
            href: "#",
            description: "Description for Fiber Optic Repair at ACM Building",
            images: ["/Fiber1.jpg", "/Fiber2.jpg", "/Fiber3.jpg", "/Fiber4.jpg", "/Fiber5.jpg", "/Fiber6.jpg", "/Fiber7.jpg", "/Fiber8.jpg", "/Fiber9.jpg", "/Fiber10.jpg",]
        },
        {
            name: "Change the floor Rubber tiles",
            href: "#",
            description: "Description for Change the floor Rubber tiles",
            images: ["/ch1.jpg", "/ch2.jpg", "/ch3.jpg", "/ch4.jpg", "/ch5.jpg", "/ch6.jpg", "/ch7.jpg", "/ch8.jpg", "/ch9.jpg", "/ch10.jpg",]
        },
        {
            name: "Installed CCTV at ACM building",
            href: "#",
            description: "Description for Installed CCTV at ACM building",
            images: ["/install1.jpg", "/install2.jpg", "/install3.jpg", "/install4.jpg", "/install5.jpg", "/install6.jpg", "/install7.jpg", "/install8.jpg", "/install9.jpg", "/install10.jpg",]
        },
        {
            name: "Installed CCTV at the Cargo Terminal Building",
            href: "#",
            description: "Description for Installed CCTV at the Cargo Terminal Building",
            images: ["/in1.jpg", "/in2.jpg", "/in3.jpg", "/in4.jpg", "/in5.jpg", "/in6.jpg", "/in7.jpg", "/in8.jpg", "/in9.jpg", "/in10.jpg", "/in11.jpg", "/in12.jpg", "/in13.jpg", "/in14.jpg", "/in15.jpg",]
        },
        {
            name: "Install CCTV at Concourse b",
            href: "#",
            description: "Description for Install CCTV at Concourse b",
            images: ["/in1.jpg", "/in2.jpg", "/in3.jpg", "/in4.jpg", "/in5.jpg", "/in6.jpg", "/in7.jpg", "/in8.jpg", "/in9.jpg", "/in10.jpg", "/in11.jpg", "/in12.jpg", "/in13.jpg", "/in14.jpg", "/in15.jpg",]
        },
        {
            name: "Install the server at the ACM building",
            href: "#",
            description: "Description for Install the server at the ACM building",
            images: ["/acm1.jpg", "/acm2.jpg", "/acm3.jpg", "/acm4.jpg", "/acm5.jpg", "/acm6.jpg", "/acm7.jpg", "/acm8.jpg", "/acm9.jpg", "/acm10.jpg", ]
        },
        {
            name: "Repair fiber cable",
            href: "#",
            description: "Description for Repair fiber cable",
            images: ["/Repair1.jpg", "/Repair2.jpg", "/Repair3.jpg", "/Repair4.jpg", "/Repair5.jpg", "/Repair6.jpg", "/Repair7.jpg", "/Repair8.jpg", "/Repair9.jpg", "/Repair10.jpg",]
        },
        // เพิ่ม items อื่นๆ ตามที่ต้องการ
    ];

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Container maxWidth="xl">
            <Box>
                <Grid container sx={{ my: '7%' }}>
                    <Grid item xs={12}>
                        <div className='h-full w-full relative'>
                            <img className='h-[327px] w-full object-cover' src="/port.jpg" alt="carousel" />
                            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-white font-bold text-3xl">
                                <h2 className='text-white text-4xl p-4 font-extrabold tracking-wider'>Portfolio</h2>
                            </div>
                        </div>
                    </Grid>
                    <Grid container spacing={2} alignItems="center">
                        {/* ส่วนของ Tabs */}
                        <Grid item xs={12}>
                            <Typography variant="h4" component="h2" align="center">
                                <Tabs
                                    value={value}
                                    onChange={handleChange}
                                    aria-label="tabs example"
                                    centered
                                    variant="scrollable"
                                    scrollButtons="auto"
                                    sx={{
                                        border: 2, // เพิ่มเส้นขอบด้านล่าง
                                        borderColor: 'gray.300', // สีขอบ
                                        '& .MuiTab-root': {
                                            padding: '10px 20px', // กำหนดขนาดของแต่ละแท็บ
                                        },
                                    }}
                                >
                                    {items.map((item, index) => (
                                        <Tab key={index} label={item.name} />
                                    ))}
                                </Tabs>
                            </Typography>
                            {/* แสดงเนื้อหาของ Tab ที่เลือก */}
                            <div className="flex flex-col mt-8 justify-center items-center max-w-2xl mx-auto">
                                <div className="text-center">
                                    {items[value] && (
                                        <a href={items[value].href} className="text-xl text-red-600">
                                            {items[value].name}
                                        </a>
                                    )}

                                    {/* แสดงคำอธิบายของแต่ละ Tab */}
                                    <Typography variant="body1" className="mt-2">
                                        {items[value].description}
                                    </Typography>

                                    {/* ส่วนที่แสดงภาพ */}
                                    <div className="mt-4 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-center">
                                        {items[value].images.map((image, index) => (
                                            <Box
                                                key={index}
                                                component="img"
                                                sx={{
                                                    width: '100%',
                                                    height: '100%',
                                                    borderRadius: '8px', // ทำให้รูปภาพมีขอบโค้ง
                                                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // เพิ่มเงาให้รูปภาพ
                                                    transition: 'transform 0.3s ease', // เพิ่มการเคลื่อนไหวเมื่อ hover
                                                    '&:hover': {
                                                        transform: 'scale(1.05)', // เมื่อ hover ให้ขยายรูปภาพเล็กน้อย
                                                        boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)', // เมื่อ hover เพิ่มเงา
                                                    },
                                                }}
                                                alt={`Image ${index + 1}`}
                                                src={image}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
}

export default Portfolio;
