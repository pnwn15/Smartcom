import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';

function CookieConsent() {
    const [isAccepted, setIsAccepted] = useState(false);

    // ตรวจสอบว่าเคยยอมรับคุกกี้หรือไม่
    useEffect(() => {
        const cookieConsent = Cookies.get('cookieConsent');
        if (cookieConsent === 'true') {
            setIsAccepted(true);
        }
    }, []);

    // ฟังก์ชันสำหรับการยอมรับคุกกี้
    const handleAccept = () => {
        // ตั้งค่า cookie ว่ายอมรับคุกกี้แล้ว
        Cookies.set('cookieConsent', 'true', { expires: 365, path: '/' }); // expires = 365 วัน
        setIsAccepted(true); // ซ่อนบาร์หลังจากยอมรับ
    };

    return (
        !isAccepted && (
            <div className="fixed bottom-0 left-0 w-full border bg-white text-black p-4 text-start z-50">
                <div className='flex justify-center items-center'>
                <p>เราใช้คุกกี้เพื่อเพิ่มประสิทธิภาพและประสบการณ์ที่ดีในการใช้งานเว็ปไซต์ ท่านสามารถศึกษารายละเอียดการใช้ คุกกี้ได้ที่
                        <a className='text-red-600' href=''>นโยบายความเป็นส่วนตัว</a> และสามารถเลือกตั้งค่าการใช้ คุกกี้ได้โดยคลิก  "ตั้งค่าคุกกี้" หรือคลิกที่ " ยอมรับทั้งหมด" 
                    </p>
                </div>
                    <br />
                    <div className='flex mt-2'>
                        <button onClick={handleAccept} className="ml-2 text-red-600 w-1/2 rounded-md p-3 bg-white border-red-600 border underline">
                            ตั่งค่าคุกกี้
                        </button>
                    <button  onClick={handleAccept} className="ml-2 text-white w-1/2 rounded-md p-3 bg-red-600 underline">
                            ยอมรับทั้งหมด
                        </button>
                    </div>

                
            </div>
        )
    );
}

export default CookieConsent;
