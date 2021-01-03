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

export const poster = async ({ title, content }) => {
    try {
        const fd = new FormData();
        fd.append('title', title);
        fd.append('content', content);

        await fetch('https://music-scene-api.herokuapp.com/api/bulletin_board/items/', {
            method: 'POST',
            mode: 'no-cors',
            body: fd
        });
        await Router.push('/community/bulletins/');
    }
    catch (err) {
        console.error(err);
    }
}