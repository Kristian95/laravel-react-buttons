import React, { useState } from 'react';
import axios from 'axios';

const ButtonEditor = ({ button, onDelete }) => {
    const [color, setColor] = useState(button.color);
    const [hyperlink, setHyperlink] = useState(button.hyperlink);

    const handleDelete = async () => {
        if (window.confirm('Are you sure you want to delete this button?')) {
            try {
                await axios.delete(`/api/buttons/${button.id}`);
                onDelete(button.id);
            } catch (error) {
                console.error('Error deleting button:', error);
            }
        }
    };

    return (
        <div className="button-editor">
            <form>
                <input
                    type="text"
                    value={color}
                    onChange={(e) => setColor(e.target.value)}
                    placeholder="Button Color"
                    required
                />
                <input
                    type="text"
                    value={hyperlink}
                    onChange={(e) => setHyperlink(e.target.value)}
                    placeholder="Button Hyperlink"
                />
                <button type="submit">Update Button</button>
                <button type="button" onClick={handleDelete}>Delete Button</button>
            </form>
        </div>
    );
};

export default ButtonEditor;
