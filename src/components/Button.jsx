import React from 'react';

const ButtonList = () => {
    const colors = ['blue', 'green', 'red', 'yellow', 'indigo', 'purple', 'pink', 'gray'];

    return (
        <div className="flex space-x-4">
            {colors.map((color, index) => (
                <button
                    key={index}
                    className={`px-4 py-2 text-white rounded bg-${color}-500 hover:bg-${color}-600`}
                >
                    Button {index + 1}
                </button>
            ))}
        </div>
    );
};

export default ButtonList;
