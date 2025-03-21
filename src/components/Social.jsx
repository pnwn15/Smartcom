import React from 'react'

function Social() {
    const socialLinks = [
        { name: 'facebook', url: 'https://facebook.com', icon: 'fab fa-facebook-square', color: 'text-blue-600', hoverColor: 'hover:text-blue-800' },
        { name: 'instagram', url: 'https://instagram.com', icon: 'fab fa-instagram', color: 'text-pink-600', hoverColor: 'hover:text-pink-800' },
        { name: 'line', url: 'https://line.me', icon: 'fab fa-line', color: 'text-green-600', hoverColor: 'hover:text-green-800' },
        { name: 'phone', url: 'tel:+1234567890', icon: 'fas fa-phone-alt', color: 'text-gray-800', hoverColor: 'hover:text-gray-600' }
    ];
    return (
        <div className="flex flex-wrap justify-center space-x-6">
            {socialLinks.map((link) => (
                <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <i
                        className={`${link.icon} text-xl ${link.color} ${link.hoverColor}`}
                    ></i>
                </a>
            ))}
        </div>
    )
}

export default Social
