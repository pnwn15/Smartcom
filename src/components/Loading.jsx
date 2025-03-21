import React from 'react';


const Loading = () => {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="flex items-center space-x-2 flex-col">
                {/* ใส่โลโก้เป็นภาพ */}
                <img
                    className="w-full h-30"
                    src="/smartcom.png" // ใส่ URL ของโลโก้ที่ต้องการ
                    alt="Loading..."
                />
                <div className='flex'>
                <img
                    className="w-20 h-20"
                    src="/pixel.gif" // ใส่ URL ของโลโก้ที่ต้องการ
                    alt="Loading..."
                />
                </div>
            </div>
        </div>
    );
};

export default Loading;
