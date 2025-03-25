import React, {useState,useEffect } from 'react';
import Grid from '@mui/material/Grid';
import { FileTextOutlined, InboxOutlined, UserOutlined } from '@ant-design/icons';  // Import the specific ic
function AccountPage() {

    const [username, setUsername] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    // Simulate login state (this can be replaced with your actual authentication logic)

    useEffect(() => {
            const token = localStorage.getItem('token');
            if (token) {
                try {
                    const decodedToken = JSON.parse(atob(token.split('.')[1]));
                    setUsername(decodedToken.email);
                    setIsLoggedIn(true);
                } catch (error) {
                    console.error('Error decoding token:', error);
                }
            }
        }, []);
        
    const handleSignOut = () => {
        localStorage.removeItem('token');
        setIsLoggedIn(false);
        setUsername('');
        window.location.href = '/login';
    };

    return (
        <Grid
            container
            spacing={2}
            direction="column"
            sx={{
                backgroundImage: 'url(/wallpaper1.png)', // Background image
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                minHeight: '100vh', // Full viewport height
            }}
        >
            {/* Profile Section */}
            <Grid
                item
                xs={12}
                display='flex'
                justifyContent='center'
                alignItems='center'
                sx={{ minHeight: '70vh' }}
            >
                {/* Profile container */}
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                    {/* Circular Profile Image */}
                    <div
                        style={{
                            width: '150px',
                            height: '150px',
                            borderRadius: '50%',
                            border: '1px solid #ccc',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginBottom: '15px',
                            overflow: 'hidden',
                        }}
                    >
                        <img
                            src="cre.png"  // Replace with your image path
                            alt="profile"
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                            }}
                        />
                    </div>

                    <div className="flex flex-col justify-center">
                        {isLoggedIn ? (
                            <>
                                <div className="text-gray-900 px-4 py-2 font-semibold text-center text-lg">username: {username}</div>
                                <p className='text-[12px] tracking-widest text-center'>จัดการผู้ใช้</p>
                                {/* Menu Items */}
                                <ul className="space-y-2 mt-2 w-80">
                                    <div className='border rounded-xl '>
                                        <li className="px-4 py-2 rounded-md hover:bg-gray-100 flex justify-center  items-center space-x-2">
                                            <FileTextOutlined />
                                            <a
                                                href="https://scc-vpn.from-sc.com/"
                                                className="text-gray-900 text-sm font-medium hover:text-blue-500"
                                            >
                                                การเข้างาน/ออกงาน
                                            </a>
                                        </li>
                                    </div>
                                    <div className='border rounded-xl '>
                                        <li className="px-4 py-2 rounded-md hover:bg-gray-100 flex justify-center  items-center space-x-2">
                                            <InboxOutlined />
                                        <a
                                            href="/addproduct"
                                            className="text-gray-900 text-sm font-medium hover:text-blue-500"
                                        >
                                            เพิ่มสินค้า
                                        </a>
                                    </li>
                                    </div>

                                    {/* Sign out button */}
                                    <div className='border rounded-xl '>
                                        <li className="px-4 py-2 rounded-md hover:bg-gray-100 flex justify-center  items-center space-x-2">
                                            <UserOutlined />
                                        <button
                                            onClick={handleSignOut}
                                            className="text-red-600 font-medium text-sm  text-left hover:bg-red-100"
                                        >
                                            Sign Out
                                        </button>
                                        </li>
                                    </div>
                                </ul>
                            </>
                        ) : (
                            <>
                                    <ul className="space-y-2 mt-2 w-80">
                                        <div className='border rounded-xl '>
                                            <li className="px-4 py-2 rounded-md hover:bg-gray-100 flex justify-center  items-center space-x-2">
                                                <UserOutlined />
                                        <a
                                            href="/login"
                                            className="block text-gray-900 text-sm font-medium hover:text-blue-500"
                                        >
                                            Login
                                        </a>
                                            </li>
                                        </div>
                                        <div className='border rounded-xl '>
                                            <li className="px-4 py-2 rounded-md hover:bg-gray-100 flex justify-center  items-center space-x-2">
                                                <UserOutlined />
                                        <a
                                            href="/signup"
                                            className="block text-gray-900 text-sm font-medium hover:text-blue-500"
                                        >
                                            Sign Up
                                                </a>                       
                                            </li>
                                        </div>
                                      
                                </ul>
                            </>
                        )}
                    </div>

                   
                  
                </div>
            </Grid>    
        </Grid>
    );
}

export default AccountPage;
