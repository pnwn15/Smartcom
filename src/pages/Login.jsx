import React, { useState } from 'react';
import axios from 'axios'; // นำเข้า axios

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [rememberMe, setRememberMe] = useState(false);

    // ฟังก์ชันสำหรับส่งข้อมูลไปยัง backend
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!email || !password) {
            setErrorMessage('กรุณากรอกอีเมลและรหัสผ่าน');
            return;
        }
        setErrorMessage('');  // เคลียร์ error ก่อนการส่งข้อมูล

        try {
            // ส่งข้อมูลล็อกอินไปยัง backend
            const response = await axios.post('http://localhost:3000/users/login', { email, password });

            // รับ JWT จากเซิร์ฟเวอร์
            const { token } = response.data;

            // เก็บ JWT ใน localStorage
            localStorage.setItem('token', token);

            // นำทางไปที่หน้า profile หรือหน้าหลัก
            window.location.href = '/';  // เปลี่ยนเส้นทางไปที่หน้าโปรไฟล์
        } catch (error) {
            // หากเกิดข้อผิดพลาด (เช่น ข้อมูลไม่ถูกต้อง)
            setErrorMessage(error.response?.data?.message || 'เกิดข้อผิดพลาดในการเข้าสู่ระบบ');
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            {/* UI ของหน้า Login */}
            <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
                {/* Logo */}
                <div className="flex justify-center mb-6">
                    <img
                        src="/smartcom.png"  // ใส่ URL ของโลโก้
                        alt="Logo"
                        className="h-16"
                    />
                </div>

                <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">เข้าสู่ระบบ</h2>

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
                    <div className="mb-6">
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

                    {/* Remember Me */}
                    <div className="mb-4 flex items-center">
                        <input
                            type="checkbox"
                            id="rememberMe"
                            name="rememberMe"
                            className="mr-2"
                            checked={rememberMe}
                            onChange={() => setRememberMe(!rememberMe)}
                        />
                        <label htmlFor="rememberMe" className="text-sm text-gray-600">จดจำรหัสผ่าน</label>
                    </div>

                    {/* Error Message */}
                    {errorMessage && (
                        <p className="text-red-500 text-sm mb-4">{errorMessage}</p>
                    )}

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 focus:outline-none"
                    >
                        เข้าสู่ระบบ
                    </button>
                </form>

                <div className="mt-4 text-center">
                    <p className="text-sm text-gray-600">
                        ยังไม่มีบัญชี?{' '}
                        <a href="/register" className="text-blue-500 hover:text-blue-600">
                            สมัครสมาชิก
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
