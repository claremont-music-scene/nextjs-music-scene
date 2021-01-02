import Router from 'next/router';

export const fetcher = async (...args) => fetch(...args).then(res => res.json());

export const poster = async ({ title, content }) => {
    // if (!title || !content) { return; }

    try {
        const body = {
            "title": title,
            "content": content,
            "meta": null
        };
        console.log('🚀 ~ poster ~ body', body);
        console.log('🚀 ~ poster ~ JSON.stringify(body)', JSON.stringify(body));

        const res = await fetch(`https://music-scene-api.herokuapp.com/api/bulletin_board/items/`, {
            method: 'POST',
            mode: 'no-cors',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body),
        });
        const data = await res.json();
        console.log('🚀 ~ poster ~ data', data);
        await Router.push('/');
    }
    catch (error) {
        console.error(error);
    }

    // fetch(
    //     'https://music-scene-api.herokuapp.com/api/bulletin_board/items/',
    //     {
    //         method: 'POST',
    //         mode: 'no-cors',
    //         headers: {
    //             'Accept': 'application/json',
    //             'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify({
    //             "title": title,
    //             "content": content,
    //             // "meta": null
    //         })
    //     }
    // ).then(response => {
    //     if (response.ok) {
    //         response.json().then(json => {
    //             console.log(json);
    //         })
    //     }
    // }).catch(err => {
    //     console.log('error during post:', err);
    // });
}