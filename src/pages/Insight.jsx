import React, { useEffect, useState } from 'react'
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Carousel from '../components/Carousel';
import sildesSolutionData from '../Json/slidessolution.json';
import { Card5 } from '../components/Card';
import ButtonList from '../components/Button';
import Blog from '../components/Blog';

function InsightPage() {
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
                    <div className='flex-col flex mt-16 gap-14'>
                        <div className="flex flex-col bg-gray-600 text-white justify-center items-center border p-4 max-w-lg mx-auto">
                            <h2 className="text-xl font-bold text-center">สำรวจเทรนส์ล่าสุด ข้อปฎิบัติที่ดีที่สุดในวงการ IT คัดสรรโดยผู้เชี่ยวชาญของเรา</h2>
                        </div>
                        <div className='bg-gray-100 max-w-full h-full'>
                            <div className='mt-16'>
                                <h1 className='text-[32px] text-black border-b-[2px] border-red-600 inline'>เรื่องที่น่าสนใจ</h1>
                            </div>
                            <div className='flex gap-5'>
                                <Card5 />
                            </div>
                        </div>
                    </div>
                </Item>
            </Grid>

            <Grid item xs={12}>
                <div className="flex flex-col w-full h-full max-w-7xl  items-start">
                    <Blog />
                </div>
            </Grid>

        </Grid>




    )
}

export default InsightPage
