import axios from 'axios';

export const jobsApi = axios.create({
    baseURL: process.env.JOBS_API_URL,
    headers: {
        Authorization: `Bearer ${process.env.JOBS_API_KEY}`,
    },
});

export const portalToWorkApi = axios.create({
    baseURL: process.env.PORTAL_TO_WORK_URL,
});
