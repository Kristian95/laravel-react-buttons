import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getButtons, updateButton } from '../api/buttonService';

const ButtonForm = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [color, setColor] = useState('');
    const [hyperlink, setHyperlink] = useState('');

    useEffect(() => {
        const fetchButton = async () => {
            if (id) {
                const buttons = await getButtons();
                const button = buttons.find(b => b.id.toString() === id);
                if (button) {
                    setColor(button.color);
                    setHyperlink(button.hyperlink);
                }
            }
        };
        fetchButton();
    }, [id]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const buttonData = { color, hyperlink };
        if (id) {
            await updateButton(id, buttonData);
        }
        navigate('/');
    };

    return (
        <div className="container my-4">
            <h3>{id ? 'Edit' : 'Add'} Button</h3>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">Color</label>
                    <input type="text" className="form-control" value={color} onChange={(e) => setColor(e.target.value)} required />
                </div>
                <div className="mb-3">
                    <label className="form-label">Hyperlink</label>
                    <input type="url" className="form-control" value={hyperlink} onChange={(e) => setHyperlink(e.target.value)} />
                </div>
                <button type="submit" className="btn btn-primary">Save</button>
            </form>
        </div>
    );
};

export default ButtonForm;
