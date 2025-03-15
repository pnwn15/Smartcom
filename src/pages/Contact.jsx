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
                    <Item sx={{ margin: 0 }}> {/* เพิ่ม margin 0 ให้กับ Item */}
                  =
                    </Item>
                </Grid>
                <Grid item xs={12}>
                    <Item sx={{ margin: 0 }}> {/* เพิ่ม margin 0 ให้กับ Item */}
                     
                    </Item>
                </Grid>
                <Grid item xs={12}>
                    <Item sx={{ margin: 0 }}> {/* เพิ่ม margin 0 ให้กับ Item */}
                       
                    </Item>


                </Grid>
                <Grid item xs={12}>
                    <Item sx={{ margin: 0 }}> {/* เพิ่ม margin 0 ให้กับ Item */}
                       
                    </Item>
                </Grid>
            </Grid>
        </Box>


    );
}



export default ContactComponent;