import React, { useEffect, useState } from 'react'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Carousel from '../components/Carousel';
import sildesSolutionData from '../Json/slidessolution.json';
import { Detail, Detail1, Detail2, Detail3 } from '../components/Detail';
import { Card4 } from '../components/Card';

function Solutions() {
    const [slidessolution, setSlides1] = useState([]);

    // ดึงข้อมูลจากไฟล์ JSON เมื่อคอมโพเนนต์ทำการโหลด
    useEffect(() => {
        setSlides1(sildesSolutionData);
    }, []);
    console.log(slidessolution)


    const Item = styled(Paper)(({ theme }) => ({
        ...theme.typography.body2,
        textAlign: 'center',
        color: theme.palette.text.secondary,
        borderRadius: 0,  // เอามุมกลมออก
    }));
    return (
        <Grid container spacing={0} direction="column">
            <Grid item xs={12}>
                <Item sx={{ margin: 0, border: 'none' }}> {/* เพิ่ม border: 'none' */}
                    <div className=""><Carousel slides={slidessolution} /></div>
                </Item>
            </Grid>
            <Grid item xs={12} sx={{ border: 'none' }}>
                <Item
                    className="m-0 h-auto container mx-auto w-full bg-cover bg-center bg-no-repeat text-white text-center p-5 border-0"
                    style={{
                        backgroundImage: 'url("/Carou1.png")', // ใส่รูปภาพที่ใช้เป็นแบ็คกราวด์                    
                        backgroundSize: 'cover', // ทำให้ภาพครอบคลุมเต็มหน้าจอ
                        backgroundPosition: 'center', // จัดตำแหน่งของภาพให้อยู่ตรงกลาง
                    }}
                >
                    <div className='flex-col flex gap-14'>
                        <div className="flex flex-col bg-gray-600 text-white justify-center items-center border p-4 max-w-lg mx-auto">
                            <h2 className="text-xl font-bold text-center">เรานำเสนอโซลูชั่นไอทีที่ล้ำสมัยโดยให้ความสำคัญกับการบริการและมาตรฐานสากลอย่างไม่หยุดยั้ง</h2>
                        </div>
                        <div className='flex flex-col gap-5'>
                            <Detail />
                            <Detail1 />
                            <Detail2 />
                            <Detail3 />
                        </div>
                    </div>

                </Item>
            </Grid>

            <Grid item xs={12}>
                <Item className="border-0 ">
                    <div className="flex flex-col h-auto bg-gray-100 ">
                        <div className='flex justify-between items-center mx-auto gap-5  text-3xl text-black font-extrabold mt-12'>
                            <h1 className='text-red-600 font-bold'>Smart <span className='text-black font-bold'>Insight</span> </h1>

                            <select className="border-2 border-gray-300 rounded-md p-2 text-lg">
                                <option value="option1">System Integration</option>
                                <option value="option2">IT Infrastructure</option>
                                <option value="option3">Digital Transformation</option>
                                <option value="option3">Security Solutions</option>
                            </select>
                        </div>

                        <Card4 />
                    </div>
                </Item> {/* ใช้ border-0 */}
            </Grid>
        </Grid>




    )
}

export default Solutions
