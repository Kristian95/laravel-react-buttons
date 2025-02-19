import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Button = ({ button, onClick, onDelete, onUpdate }) => {
    return (
        <div>
            <div style={{ display: 'flex' }}>
                <button className="btn"
                    style={{ width: '10%', height: '10%', backgroundColor: 'azure' }}
                    onClick={onUpdate}
                >
                    <i className="fa-solid fa-pen text-primary"
                       style={{ backgroundColor: 'white', color: 'black'}}
                    ></i>
                </button>
                <button className="btn"
                    style={{ width: '10%', height: '10%', backgroundColor: 'azure'}}
                    onClick={onDelete}
                >
                    <i className="fa-solid fa-trash text-danger"
                       style={{ backgroundColor: 'white', color: 'black'}}
                    ></i>
                </button>
            </div>

            <button className="btn w-100 d-flex align-items-center justify-content-center p-4"
                style={{ backgroundColor: 'white', border: '1px solid black' }}
                onClick={onClick}
            >
                <i className="fa-solid fa-plus"
                   style={{ backgroundColor: button.color, color: 'white', borderRadius: '15%' }}
                ></i>
            </button>
        </div>
    );
};

export default Button;