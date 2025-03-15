import React, { useState, useEffect } from 'react';
import Carousel from "../components/Carousel";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Card, Card1, Card2, Card3 } from "../components/Card";
import { Position, Position1 } from "../components/Position";
import Team from "../components/Team";
import Refer from "../components/Refer";
import sildesData from '../Json/slides.json';
import FormCard from '../components/Form';

const ContactComponent = () => {
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
                    <Item sx={{ margin: 0 }}> 
                        <div className='flex-col flex mt-16 gap-14'>
                            <div className="flex flex-col bg-gray-600 text-white justify-center items-center border p-4 max-w-lg mx-auto">
                                <h2 className="text-xl font-bold text-center">เราเชื่อว่าความร่วมมืออย่างจริงใจ คือเส้นทางสู่ความสำเร็จที่ยั่งยืน</h2>
                            </div>
                            <div className='bg-gray-100 w-full h-full py-5'>
                                <FormCard />
                            </div>
                        </div>
                    </Item>
                </Grid>
            </Grid>
        </Box>


    );
}



export default ContactComponent;