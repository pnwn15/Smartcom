import React, { useEffect, useState } from 'react'
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Carousel from '../components/Carousel';
import sildesSolutionData from '../Json/slidessolution.json';
import Serve from '../components/Serve';
import Case from '../components/Case';
import Blog1 from '../components/Blog1';
import { Button } from '@mui/material';


function Industries() {
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
                <Item>
                    <div className='flex-col flex relative mt-16 gap-14'>
                        <div className="flex flex-col bg-gray-600 text-white justify-center items-center border p-4 max-w-lg mx-auto">
                            <h2 className="text-xl font-bold text-center">แต่ละอุตสาหกรรมมีลักษณะเฉพาะตัวการเข้าใจ อุปสรรคถือเป็นกุญแจสู่ความสำเร็จ</h2>
                        </div>
                        <div className='bg-gray-100 max-w-full h-full'>
                            <div className='mt-16'>
                                <h1 className='text-[32px] text-red-600 border-b-[2px] border-red-600 inline'>Industries <span className='text-black'>We Serve</span></h1>
                            </div>
                            <div className='flex justify-center items-center w-full h-full'>
                                <Serve />
                            </div>
                        </div>
                    </div>
                </Item>
            </Grid>
            <Grid item xs={12} sx={{ border: 'none' }}>
                <Item>
                    <div className="flex-col flex relative mt-24 mb-10 gap-14">
                        <div className="bg-gray-100 max-w-full" sx={{ height: '800px' }}>
                            <div className="mt-16">
                                <h1 className="text-[32px] text-red-600 border-b-[2px] border-red-600 inline">
                                    Case <span className="text-black">Study</span>
                                </h1>
                            </div>
                            <div sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: 'auto', minHeight: '400px' }}>
                                {/* Adjust the min height as needed */}
                                <Case />
                            </div>
                        </div>
                    </div>
                </Item>
            </Grid>
            <Grid item xs={12} sx={{ border: 'none' }}>
                <Item>
                    <div className="flex-col flex relative  mt-10 mb-10 gap-14">
                        <div className='gap-6' sx={{ height: '800px' }}>
                            <div className="mt-16 flex flex-col gap-4">
                                <h1 className="text-[32px] text-black">
                                    ทำไมอุตสาหกรรมชั้นนำถึงเลือก <span className="text-red-600">Smart Com </span>
                                </h1>
                                <h1 className="text-lg text-black ">
                                    SMART COM มีความสามารถจัดการแก้ปัญญา คิดเร็ว ทำไว ประมวลผลตามความต้องการด้วยผลลัพธ์และเพื่อบริการที่มั่นใจ
                                </h1>
                            </div>
                            <div className="mb-2 mt-10" sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '100%', height: 'auto', minHeight: '400px' }}>
                                <Blog1 />
                            </div>

                        </div>
                    </div>
                </Item>
            </Grid>
            <Grid item xs={12} sx={{ border: 'none' }}>
                <Item>
                    <div className="flex-col flex bg-gray-100 h-auto   gap-14">
                        <div className='gap-6 mb-6' >
                            <div className="mt-16 flex flex-col gap-4">
                                <h1 className="text-[32px] text-black">
                                    ไม่พบอุตสาหกรรมของคุณ ไม่มีปัญหา ด้วยความเชี่ยวชาญของเรา <br />
                                    เราสามารถช่วยเหลือคุณได้ เพียงแค่ปรึกษากับเราฟรี
                                </h1>
                            </div>
                            <Button className='w-24 h-12 ' variant="contained" sx={{ backgroundColor: 'red', '&:hover': { backgroundColor: 'darkred' } }}>
                                ดูเพิ่มเติม
                            </Button>
                        </div>
                    </div>
                </Item>
            </Grid>
        </Grid>
    )
}

export default Industries
