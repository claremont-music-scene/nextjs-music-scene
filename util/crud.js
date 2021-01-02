export const fetcher = async (...args) => fetch(...args).then(res => res.json());

export const poster = async ({ title, content }) => {
    if (!title || !content) { return; }

    fetch(
        'https://music-scene-api.herokuapp.com/api/bulletin_board/items/',
        {
            method: 'POST',
            mode: 'no-cors',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                "title": title,
                "content": content,
                "meta": null
            })
        }
    ).then(posted => {
        console.log('posted: ', posted);
    }).catch(err => {
        console.log('error during fetch:', err);
    });
}