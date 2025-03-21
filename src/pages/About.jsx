import React, { useEffect, useState } from 'react'
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Carousel from '../components/Carousel';
import sildesSolutionData from '../Json/slidessolution.json';
import AbouteComponent from '../components/Aboute';
import Teamwork from '../components/Teamwork';
import { Position3 } from '../components/Position';
function Aboute() {
    const [slidessolution, setSlides1] = useState([]);

    // ดึงข้อมูลจากไฟล์ JSON เมื่อคอมโพเนนต์ทำการโหลด
    useEffect(() => {
        setSlides1(sildesSolutionData);
    }, []);
    console.log(slidessolution)

    const historyData = [
        {
            title: "เรื่องราวการก่อตั้ง",
            content: "บริษัท สมาร์ท คอม จำกัด ก่อตั้งขึ้นเพื่อเป็นผู้นำด้านเทคโนโลยีสารสนเทศและการสื่อสาร จากการเป็นตัวแทนจำหน่ายเครื่องคอมพิวเตอร์ยี่ห้อ COMPAQ และขยายไปสู่การให้บริการครอบคลุมจรดด้าน IT และความปลอดภัย"
        },
        {
            title: "การเติบโตและพัฒนา",
            content: "ตลอดระยะเวลา 25 ปี บริษัทประสบความสำเร็จในการวางระบบติดตั้ง และเป็นตัวแทนจำหน่ายระบบความปลอดภัยที่ทันสมัย"
        }
    ];

    const values = [
        {
            title: 'นวัตกรรม (Innovation)',
            description: 'เรายึดมั่นในนวัตกรรมใหม่และมองหาวิธีการปรับปรุงโซลูชันอย่างต่อเนื่อง',
        },
        {
            title: 'ความซื่อสัตย์ (Integrity)',
            description: 'เราดำเนินธุรกิจด้วยความซื่อสัตย์และโปร่งใส สร้างความเชื่อมั่นกับลูกค้าของเรา',
        },
        {
            title: 'การมุ่งเน้นลูกค้า (Customer Focus)',
            description: 'ลูกค้าของเราเป็นหัวใจหลักให้กับสิ่งที่เราทำ โดยเรามุ่งมั่นที่จะทำให้เกินความคาดหวัง',
        },
        {
            title: 'การทำงานร่วมกัน (Collaboration)',
            description: 'เราเชื่อในพลังของการทำงานร่วมกัน ทั้งภายในองค์กรและกับลูกค้า',
        },
    ];

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
                <Position3 />
                <Item>
                    <div className='flex-col flex relative mt-16 gap-14'>
                        <div className="flex flex-col bg-gray-600 text-white justify-center items-center border p-4 max-w-lg mx-auto">
                            <h2 className="text-xl font-bold text-center">SmartCom เรามุ่งมั่นที่จะนำเสนอโซลูชันที่ล้ำสมัย เพื่อช่วยให้ลูกค้าของเราประสบความสำเร็จ</h2>
                        </div>
                        <div className='bg-white max-w-full h-full'>
                            <AbouteComponent />
                        </div>
                    </div>
                </Item>
            </Grid>
            <Grid item xs={12}>
                <div className="bg-gray-100 h-auto mt-6 flex items-center justify-center">
                    <div className="bg-gray-200 p-6 rounded-lg border-black border shadow-lg w-full sm:w-full md:w-full lg:w-1/2 h-auto">
                        <div className="flex justify-center mt-10 w-full">
                            <h2 className="text-3xl font-semibold mb-4 text-red-600 border-b-2">ประวัติความเป็นมา</h2>
                        </div>
                        <div className="flex justify-start mt-12 flex-col w-full">
                            {historyData.map((item, index) => (
                                <div key={index}>
                                    <h2 className="text-2xl font-extrabold mb-4">{item.title}</h2>
                                    <p className="text-md font-extrabold mb-4">{item.content}</p>
                                </div>
                            ))}
                        </div>
                       
                    </div>
                </div>
            </Grid>
            <Grid item xs={12}>
                <Teamwork />
            </Grid>
            <Grid item xs={12}>
                <div className='bg-gray-100 h-auto mt-3'>
                    <div className="flex flex-col items-center py-12 justify-center gap-6">
                        <h1 className="text-3xl font-bold text-red-600">ค่านิยมของเรา</h1>
                        {values.map((value, index) => (
                            <div key={index} className="text-center  space-y-7">
                                <h1 className='font-bold text-2xl'>{value.title}</h1>
                                <p className='text-gray-500 text-md'>{value.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </Grid>
        </Grid>
    )
}
export default Aboute
