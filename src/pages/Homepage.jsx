import React, { useState, useEffect } from 'react';
import Carousel from "../components/Carousel";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Card, Card1,Card2,Card3 } from "../components/Card";
import { Position, Position1 } from "../components/Position";
import Team from "../components/Team";
import Refer from "../components/Refer";
import sildesData from '../Json/slides.json';

const Homepage = () => {
    const [slides, setSlides] = useState([]);

    // ดึงข้อมูลจากไฟล์ JSON เมื่อคอมโพเนนต์ทำการโหลด
    useEffect(() => {
        setSlides(sildesData);
    }, []);

    
    const Item = styled(Paper)(({ theme }) => ({
        ...theme.typography.body2,
        textAlign: 'center',
        color: theme.palette.text.secondary,
        borderRadius: 0,  // เอามุมกลมออก
    }));

    return (
        <Box sx={{ flexGrow: 0 }}>
            <Grid container spacing={0}> {/* ลบ spacing */}
                <Grid item xs={12}>
                    <Item sx={{ margin: 0 }}> {/* เพิ่ม margin 0 ให้กับ Item */}
                        <div className=""><Carousel slides={slides} /></div>
                    </Item>
                </Grid>
                <Grid item xs={12}>
                    <Item sx={{ margin: 0 }}> {/* เพิ่ม margin 0 ให้กับ Item */}
                        <div className="h-[650px] w-full container mx-auto flex-col">
                            <Position />
                            <div className="flex justify-center mt-10">
                                <h1 className="font-bold text-2xl tracking-wide text-black">
                                    ประสบการณ์กว่า<span className="text-red-600 text-3xl font-extrabold">30+</span> ปี
                                </h1>
                            </div>
                            <div className="mt-14 absolute flex justify-center left-1/2  w-full -translate-x-1/2 ">
                                <Card
                                    title="ทำไมต้อง"
                                    subtitle="Smart Com"
                                    description="ขับเคลื่อนธุรกิจด้วยโซลูซั่นอัจฉลิยะที่ผสมผสานประสิทธิภาพความปลอดภัย เเละนวัตกกรรม 
                                         เพื่อความก้าวล้ำที่เหนือกว่าร่วมเป็นพันธมิตรกับเราเพื่อเปลี่ยนธุรกิจของคุณให้ก้าวล้ำหน้าให้ทุกมิติ"
                                    link="#"
                                />
                                <Card1 />
                            </div>
                        </div>
                        <section className="bg-black">
                            <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-4 lg:px-6">
                                <Team />
                            </div>
                        </section>
                        <div className="xl:h-[880px] md:h-[1450px] lg:h-[850px] h-[1430px] sm:h-[1430px] w-full container mx-auto flex-col">
                            <Position1 />
                            <div className="flex justify-center mt-10">
                                <h1 className="font-bold text-2xl tracking-wide text-black">
                                    เเก้ปัญหากว่า <span className="text-red-600 text-3xl font-extrabold">100+</span> ปัญหา
                                </h1>

                            </div>
                            <div className="mt-14 left-1/2 w-full -translate-x-1/2 absolute gap-3 flex-wrap mb-4 flex justify-center">
                                <Card2 />
                                <Card3 />
                            </div>
                            
                        </div>
                        <section className=" py-5">
                            <Refer />
                        </section>
                    </Item>
                </Grid>
              
            </Grid>
        </Box>


    );
}



export default Homepage;