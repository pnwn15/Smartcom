import React from 'react';


const Loading = () => {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="flex items-center space-x-2 flex-col">
                {/* ใส่โลโก้เป็นภาพ */}
                <img
                    className="w-60 h-30"
                    src="/smartcom.png" // ใส่ URL ของโลโก้ที่ต้องการ
                    alt="Loading..."
                />
                
            </div>
        </div>

    );
};

export default Loading;
