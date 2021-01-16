import Router from 'next/router';
import { getSession } from 'next-auth/client'


export const fetcher = async (...args) => {
    try {
        const res = await fetch(...args, { mode: 'no-cors' });
        return res.json();
    }
    catch (err) {
        console.error(err);
    }
};


export const poster = async (data, endpoint, redir) => {
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

        await fetch(endpoint, {
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


export const formJSONtoFormData = (data) => {
    const tempMetaFields = [
        'email',
        'layout',
    ];

    try {
        const fd = new FormData()
        const meta = {};

        for (let d in data) {
            if (tempMetaFields.indexOf(d) === -1) {
                fd.append(d, data[d]);
            }
            else {
                meta[d] = data[d];
            }
        }

        fd.append('meta', JSON.stringify(meta));
        return fd
    }
    catch (err) {
        console.error(err);
    }
}


export const securePoster = async (endpoint, data) => {

    console.log('securePoster', endpoint, data)
    const session = await getSession()
    console.log('session is', session)

    return fetch(`/api${endpoint}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Token ${session.apiToken}`
        },
        body: JSON.stringify(data)
    }).then((res) => {
        //TODO handle fail
        console.log('got secure post resp')
        return res.json()
    }).then((_d) => {
        console.log('returning post resp data', _d)
        return _d
    })
}


export const authPoster = (authUrl, data) => {
    return fetch(authUrl, {
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