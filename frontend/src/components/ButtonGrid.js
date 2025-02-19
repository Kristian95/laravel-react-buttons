import React, { useEffect, useState } from 'react';
import {deleteButton, getButtons} from '../api/buttonService';
import Button from './Button';
import { useNavigate } from 'react-router-dom';
import '../HeaderWithButtons.css';

const ButtonGrid = () => {
    const [buttons, setButtons] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchButtons = async () => {
            const data = await getButtons();
            setButtons(data);
        };
        fetchButtons();
    }, []);

    const handleButtonClick = (button) => {
        if (button.hyperlink) {
            window.location.href = button.hyperlink;
        } else {
            navigate(`/configure/${button.id}`);
        }
    };

    const handleButtonUpdate = (button) => {
        navigate(`/configure/${button.id}`);
    };

    const handleButtonDelete = async (button) => {
        if (window.confirm('Are you sure you want to delete this button?')) {
            await deleteButton(button.id);
        }
    }

    return (
        <div className="container">
            <header className="header">
                <h1>Shkolo</h1>
                <hr className="divider" />
            </header>
            <div className="grid">
                {buttons.map((button) => (
                    <Button
                        key={button.id}
                        button={button}
                        onClick={() => handleButtonClick(button)}
                        onDelete={() => handleButtonDelete(button)}
                        onUpdate={() => handleButtonUpdate(button)}
                    />
                ))}
            </div>
        </div>
    );
};

export default ButtonGrid;
