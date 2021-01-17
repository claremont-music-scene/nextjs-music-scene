// used by clients to make GET requests to the site's API proxy
export const proxyGetter = async (endpoint) => {
    try {
        const res = await fetch(endpoint);
        return res.json();
    }
    catch (err) {
        console.error(err);
    }
}


// used by clients to POST to the site's API proxy
export const proxyPoster = async (endpoint, data, session) => {

    //console.log('proxyPoster', endpoint, data, session)

    return fetch(`/api${endpoint}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    }).then((res) => {
        //TODO handle fail
        return res.json()
    }).then((_d) => {
        return _d
    })
}
