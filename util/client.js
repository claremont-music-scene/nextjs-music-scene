

// used by clients to POST to MSC API via site API proxy
export const apiPoster = async (endpoint, data, session) => {

    //console.log('apiPoster', endpoint, data, session)

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
