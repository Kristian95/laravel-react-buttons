import axios from 'axios';

const API_URL = 'http://localhost:8000/api/buttons';

export const getButtons = async () => {
    const response = await axios.get(API_URL);
    return response.data;
};

export const updateButton = async (id, buttonData) => {
    const response = await axios.post(`${API_URL}`, buttonData);
    return response.data;
};

export const deleteButton = async (id) => {
    return await axios.delete(`${API_URL}/${id}`);
};
