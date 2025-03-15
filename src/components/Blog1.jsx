import React from 'react';

function Cards() {
    const cardData = [
        { id: 1, head1: 'S', background: 'bg-[#E3F2FD]', title: 'Specific', text: '"SPECIFIC" มุ่งเน้นความเป็นเลิศด้านบริการจากผลิตภัณฑ์ บริหารงาน ธนาคารด้านเทคโนโลยี', alignment: 'start' },
        { id: 2, head1: 'M', background: 'bg-[#E8F5E9]', title: 'Specific', text: '"SPECIFIC" มุ่งเน้นความเป็นเลิศด้านบริการจากผลิตภัณฑ์ บริหารงาน ธนาคารด้านเทคโนโลยี', alignment: 'end' },
        { id: 3, head1: 'A', background: 'bg-[#FFF3E0]', title: 'Specific', text: '"SPECIFIC" มุ่งเน้นความเป็นเลิศด้านบริการจากผลิตภัณฑ์ บริหารงาน ธนาคารด้านเทคโนโลยี', alignment: 'start' },
        { id: 4, head1: 'R', background: 'bg-[#F3E5F5]', title: 'Specific', text: '"SPECIFIC" มุ่งเน้นความเป็นเลิศด้านบริการจากผลิตภัณฑ์ บริหารงาน ธนาคารด้านเทคโนโลยี', alignment: 'end' },
        { id: 5, head1: 'R', background: 'bg-[#FFEBEE]', title: 'Specific', text: '"SPECIFIC" มุ่งเน้นความเป็นเลิศด้านบริการจากผลิตภัณฑ์ บริหารงาน ธนาคารด้านเทคโนโลยี', alignment: 'start' },
    ];

    return (
        <div className="space-y-4 container mx-auto">
            {cardData.map((card) => (
                <div key={card.id} className={`flex justify-${card.alignment} w-full h-full`}>
                    {/* Card */}
                    <div className={`${card.background} p-4 border-l-6 border-red-600 rounded-lg shadow-lg w-1/2 h-[200px] flex flex-col justify-center items-center`}>
                        <div className='flex flex-col justify-center items-center'>
                            <h1 className='border-black bg-black rounded-full p-2 w-12 text-white text-lg font-extrabold mb-4'>
                                {card.head1}
                            </h1>
                            <h3 className="text-xl font-semibold text-black">{card.title}</h3>
                            <p className="text-md text-gray-700">{card.text}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Cards;
