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


export const poster = async (data, listName, redir) => {
    const tempMetaFields = [
        'email',
        'layout',
    ];

    try {
        const fd = new FormData(),
            meta = {};

        for (let d in data) {
            if (tempMetaFields.indexOf(d) === -1) {
                fd.append(d, data[d]);
            }
            else {
                meta[d] = data[d];
            }
        }

        fd.append('meta', JSON.stringify(meta));

        await fetch(`https://music-scene-api.herokuapp.com/api/v1/${listName}/items/`, {
            method: 'POST',
            mode: 'no-cors',
            body: fd
        });

        await Router.push(redir);
    }
    catch (err) {
        console.error(err);
    }
}

export const serverSidePoster = async (data, listName) => {
    const res = await fetch(`https://music-scene-api.herokuapp.com/api/v1/${listName}/items/`, {
        method: 'POST',
        body: data
    })
}

export const authPoster = (data) => {
    return fetch(`https://music-scene-api.herokuapp.com/api/auth/token/login/`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    }).then((res) => {
        //TODO handle fail
        console.log('got auth resp')
        return res.json()
    }).then((_d) => {
        console.log('returning auth resp data', _d)
        return _d
    })
}