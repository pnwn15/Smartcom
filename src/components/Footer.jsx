import React from 'react'

function Footer() {
    const footerData = [
        {
            title: 'ลิ้งค์ที่เกี่ยวข้อง',
            links: [
                { text: 'Home', url: 'https://flowbite.com/' },
                { text: 'Solution', url: 'https://tailwindcss.com/' },
                { text: 'Industry', url: 'https://tailwindcss.com/' },
                { text: 'Insight', url: 'https://tailwindcss.com/' },
                { text: 'About', url: 'https://tailwindcss.com/' },
            ],
        },
        {
            title: 'เกี่ยวกับเรา',
            links: [
                { text: 'We are team of passionate people whose goal is to improve everyone life through disruptive products. We build great products to solve your business problem.' },
                { text: 'Our products are designed for small to medium size companies willing to optimize their performance' },
            ],
        },
        {
            title: 'ข้อมูลการติดต่อ',
            links: [
                { text: 'Privacy Policy', url: '#' },
                { text: 'Terms & Conditions', url: '#' },
            ],
        },
    ];
  return (
      <footer className="relative bg-cover bg-no-repeat bg-center bottom-0 mb-0" style={{ backgroundImage: "url('/bgfoot1.png')" }}>
          <div className="w-full p-4 py-6 lg:py-8">
              <div className="md:flex md:justify-center gap-6">
                  <div className="mb-6 md:mb-0 flex items-center">
                      <a href="https://flowbite.com/" className="flex items-center">
                          <img src="/smartcom.png" className="h-20 me-3" alt="FlowBite Logo" />
                      </a>
                  </div>

                  <div className="flex flex-wrap gap-6">
                      {footerData.map((section, index) => (
                          <div key={index}>
                              <h2 className="mb-2 text-lg font-extrabold text-gray-900 uppercase dark:text-white">
                                  {section.title}
                              </h2>
                              <div className='sm:border-b-2 border-b-2 sm:border-black md:border-b-2 md:border-black border-black lg:border-b-0 w-full'>
                              <ul className="text-white dark:text-white font-medium mb-0  w-full">
                                  {/* The lg:border-b-0 class removes the border on lg and larger screens */}
                                  {section.links.map((link, linkIndex) => (
                                      <li key={linkIndex} className="mb-2 max-w-2xl">
                                          <a href={link.url} className="hover:underline">
                                              {link.text}
                                          </a>
                                      </li>
                                  ))}
                                  </ul>
                              </div>
                          </div>
                      ))}
                  </div>

              </div>
          </div>
      </footer>



  )
}

export default Footer
