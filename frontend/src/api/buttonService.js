import axios from 'axios';

axios.defaults.headers.common['X-CSRF-TOKEN'] = document.querySelector('meta[name="csrf-token"]').getAttribute('content');

const API_URL = 'http://localhost:8000/api/buttons';

export const getButtons = async () => {
    const response = await axios.get(API_URL);
    return response.data;
};

export const updateButton = async (id, buttonData) => {
    const response = await axios.post(`${API_URL}/${id}`, buttonData);
    return response.data;
};
