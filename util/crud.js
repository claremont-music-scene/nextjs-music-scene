import Router from 'next/router';

export const fetcher = async (...args) => {
    try {
        const res = await fetch(...args, { mode: 'no-cors' });
        return res.json();
    }
    catch (err) {
        console.error(err);
    }
};

export const poster = async ({ formData, endpoint, redirectPath }) => {
    try {
        await fetch(`http://local.music-scene-data.com:8000/api${endpoint}`, {
            method: 'POST',
            mode: 'no-cors',
            body: fd
        });
        await Router.push(redirectPath);
    }
    catch (err) {
        console.error(err);
    }
}