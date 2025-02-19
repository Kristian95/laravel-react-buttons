// axiosConfig.js
import axios from 'axios';

// Set the CSRF token for Axios
axios.defaults.headers.common['X-CSRF-TOKEN'] = document.querySelector('meta[name="csrf-token"]').getAttribute('content');

// Optionally, set other default headers
axios.defaults.headers.common['Content-Type'] = 'application/json';

export default axios;
