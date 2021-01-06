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

export const poster = async data => {
    try {
        const fd = new FormData();
        for (let d in data) {
            fd.append(d, data[d]);
        }

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