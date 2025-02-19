import React from 'react';

const Button = ({ button, onClick }) => {
    return (
        <div className="col-lg-4 col-md-6 col-12 mb-3">
            <button
                className="btn w-100"
                style={{ backgroundColor: button.color, color: 'white' }}
                onClick={onClick}
            >
                X
            </button>
        </div>
    );
};

export default Button;