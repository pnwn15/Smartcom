import React from 'react'

const Team = () => {
    const teamMembers = [
        {
            name: 'System lntegration',
            role: 'ขับเคลื่อนธุรกิจของคุณด้วยโซลูซั่นอัจฉริยะ',
            avatar: 'https://www.bespokesoftwaredevelopment.com/blog/wp-content/uploads/2022/05/integration-system.jpg',
        },
        {
            name: 'IT Infrastructure',
            role: 'ขับเคลื่อนธุรกิจของคุณด้วยโซลูซั่นอัจฉริยะ',
            avatar: 'https://blog.it-planet.com/wp-content/uploads/2023/07/aufbau-it-infrastruktur.jpg',
        },
        {
            name: 'Security Solution',
            role: 'ขับเคลื่อนธุรกิจของคุณด้วยโซลูซั่นอัจฉริยะ',
            avatar: 'https://www.bitlyft.com/hubfs/Cybersecurity-solutions.jpeg',
        },
        {
            name: 'Digital Transformation',
            role: 'ขับเคลื่อนธุรกิจของคุณด้วยโซลูซั่นอัจฉริยะ',
            avatar: 'https://cdn.prod.website-files.com/602a13d5ad7fdadf5eba5c48/62d3c94cada6060a76891929_SEO%20Waymaker%207%20-%20%20Digital%20transformation.jpeg',
        },
    ];
    return (
        <div className='flex flex-col gap-10'>
            <div className="flex justify-end xl:max-w-6xl md:max-w-4xl sm:max-w-lg">
                <h1 className="text-red-600 font-bold text-lg">
                    Smart
                    <span className="text-black font-bold text-lg">Solution</span>
                </h1>
            </div>

      <div className="grid  grid-cols-2 gap-8 lg:gap-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {teamMembers.map((member, index) => (
              <div key={index} className="text-center text-gray-500 dark:text-gray-400">
                  <img
                      className="mx-auto mb-4 w-36 h-36 rounded-full"
                      src={member.avatar}
                      alt={`${member.name} Avatar`}
                  />
                  <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      <a href="#">{member.name}</a>
                  </h3>
                  <p>{member.role}</p>
              </div>
          ))}
            </div>
        </div>
  )
}

export default Team
