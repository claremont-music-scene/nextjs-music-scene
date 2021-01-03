import Router from 'next/router';

export const fetcher = async (...args) => fetch(...args, { mode: 'no-cors' }).then(res => res.json()); // temp fix, will cause merge conflict

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
    catch (error) {
        console.error(error);
    }
}