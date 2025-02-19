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
                    setColor(button.color || ''); // Ensure it's a string
                    setHyperlink(button.hyperlink || ''); // Ensure it's a string
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
        <div className="container my-4 p-4 shadow-lg rounded bg-white w-50">
            <h3 className="mb-4 text-center fw-bold">{id ? 'Edit' : 'Add'} Box</h3>
            <form>
                {/* Color Input */}
                <div className="mb-3">
                    <label className="form-label fw-semibold">Button Color</label>
                    <input
                        type="text"
                        className="form-control form-control-color w-100 p-2 border rounded"
                        value={color}
                        onChange={(e) => setColor(e.target.value)}
                        required
                    />
                </div>

                {/* Hyperlink Input */}
                <div className="mb-3">
                    <label className="form-label fw-semibold">Hyperlink</label>
                    <input
                        type="text"
                        className="form-control p-2 border rounded"
                        value={hyperlink}
                        onChange={(e) => setHyperlink(e.target.value)}
                        placeholder="Enter URL (optional)"
                    />
                </div>

                {/* Action Buttons */}
                <div className="d-flex justify-content-between mt-4 gap-2 w-50">
                    <button
                        type="button"
                        className="btn btn-sm btn-outline-secondary p-1 fs-7"
                        onClick={() => navigate('/')}
                    >
                        Cancel
                    </button>
                    <button
                        type="button"
                        className="btn btn-sm btn-primary p-1 fs-7"
                        onClick={handleSubmit} // Call handleSubmit manually
                    >
                        Save
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ButtonForm;
