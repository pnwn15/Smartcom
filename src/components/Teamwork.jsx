import React from 'react'

function Teamwork() {
    const teamMembers = [
        {
            name: 'นายคัจพงษ์ เศรษฐบรมศักดิ์',
            position: 'กรรมการผู้จัดการ',
            image: '/user1.jpg',
        },
        {
            name: 'นายคัจพงษ์ เศรษฐบรมศักดิ์',
            position: 'กรรมการผู้จัดการ',
            image: '/user1.jpg',
        },
        {
            name: 'นายคัจพงษ์ เศรษฐบรมศักดิ์',
            position: 'กรรมการผู้จัดการ',
            image: '/user1.jpg',
        },
    ];
  return (
      <div class="flex flex-col items-center justify-center h-auto">
          <div class="text-center mt-10">
              <p class="text-4xl mb-4 text-red-600 border-b-2 font-bold">พบกับทีมงานของเรา</p>
          </div>
          <div className='flex flex-col text-center'>
              <img src="/user1.jpg" alt="Your Image" class="mx-auto mb-4 w-40 h-40 object-cover" />
              <p className='text-lg text-black font-bold'>นายคัจพงษ์ เศรษฐบรมศักดิ์</p>
              <p className='text-lg text-black font-bold'>กรรมการผู้จัดการ</p>
          </div>
          <div className='mt-5 mx-5 text-center tracking-wider'>
              ทีมงานที่มีความเชี่ยวชาญเฉพาะด้าน พร้อมทุ่มเทในการให้บริการโซลูชั่นที่มีคุณภาพแก่ลูกค้า
          </div>
          <div className="lg:flex-row md:flex-row flex-col flex sm:flex-col gap-6 mt-6">
              {teamMembers.map((member, index) => (
                  <div key={index} className="flex flex-col text-center">
                      <img src={member.image} alt="Your Image" className="mx-auto mb-4 w-40 h-40 object-cover" />
                      <p className="text-lg text-black font-bold">{member.name}</p>
                      <p className="text-lg text-black font-bold">{member.position}</p>
                  </div>
              ))}
          </div>
      </div>
  )
}
export default Teamwork
