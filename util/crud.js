import Router from 'next/router';

export const fetcher = async (...args) => fetch(...args).then(res => res.json());

export const poster = async ({ title, content }) => {
    // if (!title || !content) { return; }

    try {
        const fd = new FormData();
        fd.append('title', title);
        fd.append('content', content);

        const res = await fetch('https://music-scene-api.herokuapp.com/api/bulletin_board/items/', {
            method: 'POST',
            mode: 'no-cors',
            body: fd
        });
        const data = await res.json();
        console.log('🚀 ~ poster ~ data', data);
        await Router.push('/');
    }
    catch (error) {
        console.error(error);
    }

}