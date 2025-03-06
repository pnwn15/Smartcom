import React from 'react';

const Homepage = () => {
    return (
        <div className="min-h-screen w-full bg-gray-100 flex flex-col items-center justify-center">

            {/* Main Content */}
            <main className="flex-grow flex flex-col justify-center items-center text-center py-16">
                <h2 className="text-4xl font-bold text-gray-800">Start Building Your Future</h2>
                <p className="mt-4 text-xl text-gray-600">Your journey to success starts here. Discover more below.</p>

                {/* Buttons */}
                <div className="mt-8">
                    <button className="bg-blue-600 text-white px-6 py-2 rounded-lg text-xl hover:bg-blue-700 transition duration-300 mr-4">
                        Get Started
                    </button>
                    <button className="bg-gray-500 text-white px-6 py-2 rounded-lg text-xl hover:bg-gray-600 transition duration-300">
                        Learn More
                    </button>
                </div>
            </main>

            {/* Footer */}
            <footer className="w-full bg-blue-600 text-white p-4 mt-8">
                <div className="max-w-screen-xl mx-auto text-center">
                    <p>&copy; 2025 My Website. All Rights Reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default Homepage;
