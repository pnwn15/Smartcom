import React from 'react';
import Social from './Social';

const Google = () => (
    <div className='flex flex-col'>
        <div className='flex flex-col justify-center items-center'>
            <div className='text-center max-w-7xl'>
                <h1 className='text-red-600 text-2xl inline-block relative'>
                    เส้นทางและแผนที่
                    <span className='absolute bottom-0 left-0 right-0 border-b-2 border-red-600'></span>
                </h1>
            </div>
            <div className='w-full bg-gray-600 max-w-[1200px] h-[858px] mt-8'>
                {/* แผนที่ Google Map จะมาอยู่ตรงนี้ */}
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4766.634668224335!2d100.64426399767397!3d13.848855223465398!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x311d62c3ed813e25%3A0xc2f8674607b768b5!2zMTY3IOC4i-C4reC4oiDguKPguLLguKHguK3guLTguJnguJfguKPguLIgNjUgS2h3YWVuZyBUaGEgUmFlbmcsIEtoZXQgQmFuZyBLaGVuLCBLcnVuZyBUaGVwIE1haGEgTmFraG9uIDEwMjIw!5e1!3m2!1sen!2sth!4v1742546318590!5m2!1sen!2sth"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                />
            </div>
            <div className='flex w-full flex-wrap  p-10 max-w-7xl justify-between'>
                <div className='flex flex-col'>
                    <div className='text-start font-bold text-black'>
                        <h1 className='text-xl'>เวลาทำการ</h1>
                        <div className='mt-5'>
                            <h1>จันทร์ - เสาร์: 8:00 น. - 17:00 น</h1>
                            <h1>อาทิตย์: ปิดทำการ</h1>
                        </div>
                    </div>
                </div>
                <div className="text-center">
                    <h1 className="text-2xl font-semibold mb-4">Social Media Links</h1>
                    {/* logo */}
                    <Social />
                </div>
            </div>
        </div>
    </div>
);

export default Google;
