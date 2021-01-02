export const fetcher = async (...args) => fetch(...args).then(res => res.json());

export const poster = async ({ title, content }) => {
    if (!title || !content) { return; }

    fetch(
        'https://music-scene-api.herokuapp.com/api/bulletin_board/items/',
        {
            method: 'POST',
            mode: 'no-cors',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "title": 'asdf',
                "content": 'qwer',
                "meta": null
            })
        }
    ).then(response => {
        if (response.ok) {
            response.json().then(json => {
                console.log(json);
            })
        }
    }).catch(err => {
        console.log('error during post:', err);
    });
}