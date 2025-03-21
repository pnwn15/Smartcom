import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignUpPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false); // สำหรับเช็คสถานะการโหลด
    const navigate = useNavigate(); // สำหรับการนำทางไปยังหน้าล็อกอิน

    const handleSubmit = (e) => {
        e.preventDefault();

        // ตรวจสอบอีเมลและรหัสผ่าน
        if (!email || !password || !confirmPassword) {
            setErrorMessage('กรุณากรอกอีเมลและรหัสผ่าน');
            return;
        }

        // ตรวจสอบว่ารหัสผ่านและการยืนยันรหัสผ่านตรงกันหรือไม่
        if (password !== confirmPassword) {
            setErrorMessage('รหัสผ่านและการยืนยันรหัสผ่านไม่ตรงกัน');
            return;
        }

        // ตรวจสอบรูปแบบอีเมล
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailPattern.test(email)) {
            setErrorMessage('กรุณากรอกอีเมลที่ถูกต้อง');
            return;
        }

        // เคลียร์ข้อความผิดพลาดและแสดงข้อความสำเร็จ
        setErrorMessage('');
        setSuccessMessage('');
        setIsLoading(true); // เริ่มการโหลด

        // ส่งข้อมูลไปยัง API /register โดยใช้ .then() และ .catch()
        fetch('http://localhost:3000/users/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),  // ส่งข้อมูลอีเมลและรหัสผ่าน
        })
            .then(response => response.json())  // แปลงคำตอบจาก API เป็น JSON
            .then(data => {
                setIsLoading(false); // หยุดการโหลด
                if (data.message === 'สมัครสมาชิกสำเร็จ!') {
                    setSuccessMessage('สมัครสมาชิกสำเร็จ! กรุณาล็อกอินเพื่อใช้งาน');
                    // นำทางไปที่หน้า Login
                    setTimeout(() => {
                        navigate('/login');
                    }, 2000); // เลื่อนการนำทางหลังจาก 2 วินาที
                } else {
                    setErrorMessage(data.message || 'เกิดข้อผิดพลาด');
                }
            })
            .catch(error => {
                setIsLoading(false); // หยุดการโหลด
                setErrorMessage('เกิดข้อผิดพลาดในการสมัครสมาชิก');
            });
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
                {/* Logo */}
                <div className="flex justify-center mb-6">
                    <img
                        src="/smartcom.png"  // แทนที่ด้วย URL ของโลโก้ของคุณ
                        alt="Logo"
                        className="h-16"
                    />
                </div>

                <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">สมัครสมาชิก</h2>

                <form onSubmit={handleSubmit}>
                    {/* Email */}
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-600">อีเมล</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>

                    {/* Password */}
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-gray-600">รหัสผ่าน</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>

                    {/* Confirm Password */}
                    <div className="mb-6">
                        <label htmlFor="confirmPassword" className="block text-gray-600">ยืนยันรหัสผ่าน</label>
                        <input
                            type="password"
                            id="confirmPassword"
                            name="confirmPassword"
                            className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                        />
                    </div>

                    {/* Error Message */}
                    {errorMessage && (
                        <p className="text-green-500 text-sm mb-4">{errorMessage}</p>
                    )}

                    {/* Success Message */}
                    {successMessage && (
                        <p className="text-green-500 text-sm mb-4">{successMessage}</p>
                    )}

                    {/* Loading Spinner */}
                    {isLoading && (
                        <p className="text-blue-500 text-sm mb-4">กำลังสมัครสมาชิก...</p>
                    )}

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 focus:outline-none"
                        disabled={isLoading} // ปิดปุ่มเมื่อกำลังสมัคร
                    >
                        {isLoading ? 'สมัครสมาชิก...' : 'สมัครสมาชิก'}
                    </button>
                </form>

                <div className="mt-4 text-center">
                    <p className="text-sm text-gray-600">
                        มีบัญชีอยู่แล้ว?{' '}
                        <a href="/login" className="text-blue-500 hover:text-blue-600">
                            เข้าสู่ระบบ
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SignUpPage;
