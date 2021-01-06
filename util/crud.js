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

        fetch(`http://dev.claremontmusicscene.com:8000/api${endpoint}`, {
            method: 'POST',
            mode: 'no-cors',
            credentials: 'include',
            headers: {'X-CSRFToken': csrfToken},
            body: formData
        })


    }
    catch (err) {
        console.error(err);
    }
}