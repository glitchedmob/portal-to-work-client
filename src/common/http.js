import axios from 'axios';

export default axios.create({
    baseURL: process.env.JOBS_API_URL,
    headers: {
        Authorization: `Bearer ${process.env.JOBS_API_KEY}`,
    },
});
