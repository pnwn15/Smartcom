import React from 'react'

function AbouteComponent() {
    const data = [
        {
            title: 'เราเป็นใคร',
            description: `บริษัท สมาร์ท คอม จำกัด ก่อตั้งขึ้นเมื่อวันที่ 29 มีนาคม 2537 ด้วยทุนจดทะเบียน 2,000,000 บาท โดยมี นายคัจฉพงษ์ เศรษฐบรมศักดิ์ เป็นกรรมการผู้จัดการ
                        เรามีความเชี่ยวชาญในการให้บริการโซลูชัน IT และความปลอดภัยที่ล้ำสมัย
                        บริษัทให้บริการด้านการจำหน่าย ออกแบบ และติดตั้งระบบคอมพิวเตอร์ ระบบอัตโนมัติ (System Integrator) และมุ่งมั่นที่จะสร้างความพึงพอใจให้กับลูกค้าด้วยการให้บริการที่เป็นเลิศ`,
            imageUrl: '/smartbg.jpg',
        },
    ];

    const data1 = [
        {
            title: 'พันธกิจและวิสัยทัศน์ของเรา',
            head1: 'พันธกิจ',
            head11: 'วิสัยทัศน์',
            description: `มุ่งมั่นความเป็นเลิศด้านบริการ สร้างความไว้วางใจจากลูกค้า สามารถตอบโจทย์และสนองความต้องการได้ตรงใจลูกค้า นำเสนอดีที่สุดที่มีแก่ลูกค้า ดำเนินงานอย่างรวดเร็ว ตรงเวลา เป็นไปตามเป้าหมาย`,
            description1: `มีความล้ำหน้าด้านเทคโนโลยี พัฒนางานบริการตลอดเวลา เพื่อตอบสนองความต้องการและสร้างความพึงพอใจให้แก่ลูกค้าสูงสุด ตามเป้าหมายหลักของบริษัท`,
            imageUrlLeft: '/smartbg.jpg',  // รูปซ้าย
            imageUrlRight: '/smartbg.jpg', // รูปขวา
        },
    ];

    return (
        <div className="mx-auto container space-y-12 mb-4">
            <div>
            {/* ใช้ map() เพื่อวนลูปข้อมูลใน data */}
            {data.map((item, index) => (
                <div key={index} className="flex items-center flex-wrap justify-center gap-4">
                    <div className="text-left flex-1">
                        <h1 className="text-red-600 font-bold tracking-wider text-4xl">{data1.title}</h1>
                        <p className="text-xl font-bold max-w-4xl">{item.description}</p>
                    </div>
                    <div className="flex  ">
                        <img
                            src={item.imageUrl}
                            alt={item.title}
                            className="w-full h-full  bg-cover object-center"
                        />
                    </div>

                </div>
            ))}
            </div>
            {/* ใช้ map() เพื่อวนลูปข้อมูลใน data1 */}
            <div className="">
                <h1 className='text-red-600 font-bold tracking-wider text-4xl'>พันธกิจและวิสัยทัศน์ของเรา</h1>
                {data1.map((item, index) => (
                    <div key={index} className="flex lg:flex-row sm:flex-col items-center flex-col mt-24 justify-center ">
                        {/* รูปซ้าย */}
                        <div className="flex-shrink-0">
                            <img src={item.imageUrlLeft} alt="Image Left" className="w-60 h-60 object-cover rounded-lg" />
                        </div>

                   
                        {/* กล่องข้อความกลาง */}
                        <div className="text-center flex-1 mt-4 w-full h-full space-y-6">
                            <h2 className="text-2xl text-black font-bold">{item.head1}</h2>
                            <p className="text-lg  text-black font-bold max-w-xl mx-auto">{item.description}</p>
                            <h2 className="text-2xl text-black font-bold mt-3">{item.head11}</h2>
                            <p className="text-lg  text-black font-bold max-w-xl mx-auto">{item.description1}</p>
                        </div>

                        {/* รูปขวา */}
                        <div className="flex-shrink-0">
                            <img src={item.imageUrlRight} alt="Image Right" className="w-60 h-60 object-cover rounded-lg" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default AbouteComponent;
