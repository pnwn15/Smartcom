import React from 'react';


const Google = () => (
    <div className='flex flex-col'>
        <div className='flex flex-col justify-center items-center '>
            <div className='text-center max-w-7xl'>
                <h1 className='text-red-600 text-2xl inline-block relative'>
                    เส้นทางและแผนที่
                    <span className='absolute bottom-0 left-0 right-0 border-b-2 border-red-600'></span>
                </h1>
            </div>
            <div className='w-full bg-gray-600 max-w-[1200px] h-[858px] mt-8'>
                {/* แผนที่ Google Map จะมาอยู่ตรงนี้ */}
                <div style={{ height: '100%', width: '100%' }}>
                    {/* สามารถใส่แผนที่หรือคอนเทนต์อื่นๆ ที่ต้องการได้ */}
                </div>
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
                {/* logo */}
                <div className="text-center">
                    <h1 className="text-2xl font-semibold mb-4">Social Media Links</h1>
                    <div className="flex flex-wrap justify-center space-x-6">
                        {/* Facebook */}
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-facebook-square text-xl text-blue-600 hover:text-blue-800"></i>
                        </a>

                        {/* Instagram */}
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-instagram text-xl text-pink-600 hover:text-pink-800"></i>
                        </a>

                        {/* Line */}
                        <a href="https://line.me" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-line text-xl text-green-600 hover:text-green-800"></i>
                        </a>

                        {/* Tel */}
                        <a href="tel:+1234567890" target="_blank" rel="noopener noreferrer">
                            <i className="fas fa-phone-alt text-xl text-gray-800 hover:text-gray-600"></i>
                        </a>
                    </div>
                </div>


            </div>
        </div>
    </div>

);

export default Google;
