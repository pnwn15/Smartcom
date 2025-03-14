import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

export function Detail() {
    const data = {
        heading: "System Integration", // ชื่อหัวข้อ
        description: "เป็นการวางแผนในการประยุกต์ใช้ ซอฟต์แวร์ และการจัดการระบบที่สมบูรณ์แบบของลูกค้า โดยมีเป้าหมายสูงสุดเพื่อให้เป็นไปตามความต้องการหลักอย่างไม่ย่อท้อ เพิ่มประสิทธิภาพการทำงาน ความมั่นคงเชื่อถือได้ และรองรับการขยายตัวอย่างต่อเนื่อง", // คำอธิบาย
        services: [
            { name: "Smart Silo" },
            { name: "Integration" },
            { name: "Project Management and Consulting" }
        ]
    };
  return (
    <div>
          <div className="flex flex-col md:flex-row bg-slate-800 text-white justify-center items-start border p-4 max-w-5xl mx-auto">
              <img src="/pg1.jpg" alt="Your Image" className="w-full md:w-1/2 h-auto mb-4 md:mb-0 mr-0 md:mr-4" /> {/* รูปภาพ */}
              <div className="flex flex-col justify-center gap-6 items-start">
                  {/* ใช้ข้อมูลจาก data สำหรับ heading */}
                  <h2 className="text-xl font-bold text-red-600 text-left">
                      {data.heading.split(" ")[0]} <span className='text-black font-bold'>{data.heading.split(" ")[1]}</span>
                  </h2>
                  {/* ใช้ข้อมูลจาก data สำหรับ description */}
                  <p className="text-xs font-bold text-left">
                      {data.description}
                  </p>

                  {/* ใช้ map เพื่อแสดงบริการใน ul */}
                  <ul className="flex flex-col space-y-3 w-full">
                      {data.services.map((service, index) => (
                          <li key={index} className="flex justify-between border-b-2 items-center text-left">
                              <span>{service.name}</span>
                              <FontAwesomeIcon icon={faArrowRight} className="ml-2 border p-0.5 bg-blue-300 mb-1" />
                          </li>
                      ))}
                  </ul>

                  <button
                      type="button"
                      className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 
                      font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                  >
                      ดูเพิ่มเติม
                  </button>
              </div>
          </div>


    </div>
  )
}
export function Detail1() {
    const data = {
        heading: "IT Infrastructure", // ชื่อหัวข้อ
        description: "องค์ประกอบพื้นฐานที่รองรับ การบริการด้านไอทีภายในองค์กร ซึ่งรวมถึงเซิร์ฟเวอร์ ซอฟต์แวร์ ระบบเครือข่าย และการจัดเก็บข้อมูล ซึ่งทั้งหมดนี้จำเป็นสำหรับการดำเนินงาน การจัดการ และความปลอดภัยของระบบภายในองค์กร หากมีระบบ IT ที่แข็งแกร่งก็สามารถรับรองว่าธุรกิจสามารถทำงานได้อย่างราบรื่นและปลอดภัย", // คำอธิบาย
        services: [
            { name: "Servers" },
            { name: "Networking" },
            { name: "Storage Solution" }
        ]
    };
  return (
    <div>
          <div className="flex flex-col gap-3 md:flex-row-reverse bg-slate-800 text-white justify-center items-start border p-4 max-w-5xl mx-auto">
              <img src="/pg1.jpg" alt="Your Image" className="w-full md:w-1/2 h-auto mb-4 md:mb-0 mr-0 md:mr-4" /> {/* รูปภาพ */}
              <div className="flex flex-col justify-center gap-6 items-start">
                  {/* ใช้ข้อมูลจาก data สำหรับ heading */}
                  <h2 className="text-xl font-bold text-red-600 text-left">
                      {data.heading.split(" ")[0]} <span className='text-black font-bold'>{data.heading.split(" ")[1]}</span>
                  </h2>
                  {/* ใช้ข้อมูลจาก data สำหรับ description */}
                  <p className="text-xs font-bold text-left">
                      {data.description}
                  </p>

                  {/* ใช้ map เพื่อแสดงบริการใน ul */}
                  <ul className="flex flex-col space-y-3 w-full">
                      {data.services.map((service, index) => (
                          <li key={index} className="flex justify-between border-b-2 items-center text-left">
                              <span>{service.name}</span>
                              <FontAwesomeIcon icon={faArrowRight} className="ml-2 border p-0.5 bg-blue-300 mb-1" />
                          </li>
                      ))}
                  </ul>

                  <button
                      type="button"
                      className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 
            font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                  >
                      ดูเพิ่มเติม
                  </button>
              </div>
          </div>



    </div>
  )
}
export function Detail2() {
    const data = {
        heading: "Security Solution", // ชื่อหัวข้อ
        description: "เป็นโซลูชันเทคโนโลยีที่ออกแบบมาเพื่อปกป้องทรัพย์สิน ข้อมูล และบุคลากรขององค์กร ทั้งมาตรการรักษาความปลอดภัยทางกายภาพ เช่น ระบบเฝ้าระวังและการควบคุมการเข้าถึง แล้วมีมาตรการรักษาความปลอดภัยทางไซเบอร์ ด้วยศูนย์ควบคุมที่มีความซับซ้อนเพิ่มขึ้น โซลูชันนี้ครอบคลุมถึงมีความมั่นใจในการปกป้องธุรกิจจากความเสี่ยงที่มาจากภัยภาพและทางดิจิทัล", // คำอธิบาย
        services: [
            { name: "Security Cameras" },
            { name: "Access Control System" },
            { name: "Cybersecurity" }
        ]
    };
  return (
    <div>
          <div className="flex flex-col gap-3 md:flex-row-reverse bg-slate-800 text-white justify-center items-start border p-4 max-w-5xl mx-auto">
              <img src="/pg1.jpg" alt="Your Image" className="w-full md:w-1/2 h-auto mb-4 md:mb-0 mr-0 md:mr-4" /> {/* รูปภาพ */}
              <div className="flex flex-col justify-center gap-6 items-start">
                  {/* ใช้ข้อมูลจาก data สำหรับ heading */}
                  <h2 className="text-xl font-bold text-red-600 text-left">
                      {data.heading.split(" ")[0]} <span className='text-black font-bold'>{data.heading.split(" ")[1]}</span>
                  </h2>
                  {/* ใช้ข้อมูลจาก data สำหรับ description */}
                  <p className="text-xs font-bold text-left">
                      {data.description}
                  </p>

                  {/* ใช้ map เพื่อแสดงบริการใน ul */}
                  <ul className="flex flex-col space-y-3 w-full">
                      {data.services.map((service, index) => (
                          <li key={index} className="flex justify-between border-b-2 items-center text-left">
                              <span>{service.name}</span>
                              <FontAwesomeIcon icon={faArrowRight} className="ml-2 border p-0.5 bg-blue-300 mb-1" />
                          </li>
                      ))}
                  </ul>

                  <button
                      type="button"
                      className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 
            font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                  >
                      ดูเพิ่มเติม
                  </button>
              </div>
          </div>



    </div>
  )
}
export function Detail3() {
    const data = {
        heading: "Digital Transformation", // ชื่อหัวข้อ
        description: "การบูรณาการเครื่องมือและกระบวนการดิจิทัลเข้ากับทุกด้านของธุรกิจ ส่งผลให้การดำเนินงานมีประสิทธิภาพมากยิ่งขึ้น ประสบการณ์ของลูกค้าดียิ่งขึ้น และเพิ่มศักยภาพในการสร้างสรรค์นวัตกรรมและแข่งขันในภูมิทัศน์ดิจิทัลที่เปลี่ยนแปลงอย่างรวดเร็ว", // คำอธิบาย
        services: [
            { name: "Automation" },
            { name: "Process Optimization" },
            { name: "Internet of Things (IoT)" },
            { name: "Cloud Computing" }
        ]
    };
  return (
    <div>
          <div className="flex flex-col md:flex-row  bg-slate-800 text-white justify-center items-start border p-4 max-w-5xl mx-auto">
              <img src="/pg1.jpg" alt="Your Image" className="w-full md:w-1/2 h-auto mb-4 md:mb-0 mr-0 md:mr-4" /> {/* รูปภาพ */}
              <div className="flex flex-col justify-center gap-6 items-start">
                  {/* ใช้ข้อมูลจาก data สำหรับ heading */}
                  <h2 className="text-xl font-bold text-red-600 text-left">
                      {data.heading.split(" ")[0]} <span className='text-black font-bold'>{data.heading.split(" ")[1]}</span>
                  </h2>
                  {/* ใช้ข้อมูลจาก data สำหรับ description */}
                  <p className="text-xs font-bold text-left">
                      {data.description}
                  </p>

                  {/* ใช้ map เพื่อแสดงบริการใน ul */}
                  <ul className="flex flex-col space-y-3 w-full">
                      {data.services.map((service, index) => (
                          <li key={index} className="flex justify-between border-b-2 items-center text-left">
                              <span>{service.name}</span>
                              <FontAwesomeIcon icon={faArrowRight} className="ml-2 border p-0.5 bg-blue-300 mb-1" />
                          </li>
                      ))}
                  </ul>

                  <button
                      type="button"
                      className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 
            font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                  >
                      ดูเพิ่มเติม
                  </button>
              </div>
          </div>



    </div>
  )
}
