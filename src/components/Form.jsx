import React from 'react';

const FormCard = () => {
    const contactDetails = [
        {
            title: 'ที่อยู่สำนักงาน',
            items: [
                'สำนักงานใหญ่',
                '167 ซอยรามอินทรา 65',
                'ถนนรามอินทรา แขวงท่าแร้ง เขตบางเขน',
                'กรุงเทพมหานคร 10230',
            ],
        },
        {
            title: 'หมายเลขโทรศัพท์:',
            items: [
                'โทรศัพท์: 02-5094611',
                'มือถือ: 081-4712558',
            ],
        },
        {
            title: 'หมายเลขแฟกซ์:',
            items: ['Fax: 02-5094612'],
        },
        {
            title: 'อีเมล:',
            items: ['info@smartcom.co.th'],
        },
    ];
    return (
        <div className="w-full max-w-5xl mx-auto bg-white rounded-lg shadow-lg p-6 mt-10">
            <div className="flex flex-col-reverse p-12 lg:flex-row justify-between sm:flex-col-reverse md:flex-col-reverse ">
                {/* ที่อยู่ */}
                <div className="flex gap-9 flex-col lg:mt-0 sm:mt-10 mt-5">
                    {contactDetails.map((section, index) => (
                        <div key={index} className="text-start space-y-2">
                            <h1 className="text-xl font-extrabold text-red-600">{section.title}</h1>
                            {section.items.map((item, idx) => (
                                <p key={idx} className="text-lg font-normal text-black">{item}</p>
                            ))}
                        </div>
                    ))}
                </div>
                {/* ฟอร์ม */}
                <div>
                    <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">ส่งข้อความถึงเรา</h2>
                    <form action="#" method="POST">
                        <div className="flex flex-col lg:flex-row gap-6">
                            {/* ชื่อ */}
                            <div className="mb-4 w-full lg:w-1/2">
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    placeholder="ชื่อจริง"
                                    className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
                                    required
                                />
                            </div>

                            {/* อีเมล */}
                            <div className="mb-4 w-full lg:w-1/2">
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="E-Mail"
                                    className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
                                    required
                                />
                            </div>
                        </div>

                        <div className="flex flex-col lg:flex-row gap-6">
                            {/* เบอร์โทรศัพท์ */}
                            <div className="mb-4 w-full lg:w-1/2">
                                <input
                                    type="text"
                                    id="phone"
                                    name="phone"
                                    placeholder="เบอร์โทรศัพท์"
                                    className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
                                    required
                                />
                            </div>

                            {/* ชื่อบริษัท */}
                            <div className="mb-4 w-full lg:w-1/2">
                                <input
                                    type="text"
                                    id="company"
                                    name="company"
                                    placeholder="ชื่อบริษัท"
                                    className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
                                    required
                                />
                            </div>
                        </div>

                        <div className="flex flex-col lg:flex-row gap-6">
                            {/* ประเภทอุตสาหกรรม */}
                            <div className="mb-4 w-full lg:w-1/2">
                                <select
                                    id="industry"
                                    name="industry"
                                    className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
                                    required
                                >
                                    <option value="">เลือกประเภทอุตสาหกรรม</option>
                                    <option value="industry1">อุตสาหกรรม1</option>
                                    <option value="industry2">อุตสาหกรรม2</option>
                                </select>
                            </div>

                            {/* หัวข้อที่ต้องการสอบถาม */}
                            <div className="mb-4 w-full lg:w-1/2">
                                <select
                                    id="topic"
                                    name="topic"
                                    className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
                                    required
                                >
                                    <option value="">เลือกหัวข้อที่ต้องการสอบถาม</option>
                                    <option value="topic1">สอบถาม 1</option>
                                    <option value="topic2">สอบถาม 2</option>
                                </select>
                            </div>
                        </div>

                        {/* ข้อความ */}
                        <div className="mb-4">
                            <textarea
                                id="message"
                                name="message"
                                placeholder="กรุณากรอกข้อความ"
                                rows="4"
                                className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
                                required
                            />
                        </div>

                        <div className="mb-4">
                            <div className="flex gap-6">
                                <label className="flex items-center">
                                    <input
                                        type="radio"
                                        id="option1"
                                        name="option"
                                        value="option1"
                                        className="mr-2"
                                    />
                                    E-mail
                                </label>
                                <label className="flex items-center">
                                    <input
                                        type="radio"
                                        id="option2"
                                        name="option"
                                        value="option2"
                                        className="mr-2"
                                    />
                                    โทรศัพท์มือถือ
                                </label>
                                <label className="flex items-center">
                                    <input
                                        type="radio"
                                        id="option3"
                                        name="option"
                                        value="option3"
                                        className="mr-2"
                                    />
                                    อื่นๆ
                                </label>
                                
                            </div>
                        </div>
                        <div className="flex flex-col lg:flex-row gap-6">
                            {/* เบอร์โทรศัพท์ */}
                            <div className="mb-4 w-full lg:w-full">
                                <input
                                    type="text"
                                    id="phone"
                                    name="phone"
                                    placeholder="Captcha"
                                    className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
                                    required
                                />
                            </div>

                        </div>
                        <div className="mb-4">
                            <div className="flex gap-6">
                                <label className="flex items-center">
                                    <input
                                        type="checkbox"
                                        id="option1"
                                        name="option"
                                        value="option1"
                                        className="mr-2"
                                    />
                                    อนุญาตให้นำข้อมูลนี้ไปใช้ในการติดต่อกลับในเรื่องทางธุรกิจ
                                </label>
                            </div>
                        </div>
                        
                        {/* ปุ่มส่งข้อความ */}
                        <div className="text-center">
                            <button
                                type="submit"
                                className="w-full bg-red-600 text-white py-2 rounded-lg font-semibold hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            >
                                ปรึกษาเรา
                            </button>
                        </div>
                    </form>
                    
                </div>
            </div>
        </div>

    );
};

export default FormCard;
