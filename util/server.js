
// server-side GET to the musicscene.city API
export const apiGetter = async (endpoint) => {
    try {
        const res = await fetch(`${process.env.API_URL}${endpoint}`);
        return res.json();
    }
    catch (err) {
        console.error(err);
    }
}

// server-side authenticated post to musicscene.city API
export const apiPoster = async (endpoint, body, session) => {

    // No help from Jobu
    var formBody = [];
    for (var property in body) {
        var encodedKey = encodeURIComponent(property);
        var encodedValue = encodeURIComponent(body[property]);
        formBody.push(encodedKey + "=" + encodedValue);
    }
    formBody = formBody.join("&");

    //make post to API
    const endUrl = `${process.env.API_URL}${endpoint}`
    const apiRes = await fetch(endUrl, {
        method: 'POST',
        body: formBody,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded',
            Authorization: `Token ${session.apiToken}`
        }
    })

    //TODO error handling
    const result = await apiRes.json()
    return result
}

// used by server to post authentication request to musicscene.city API
export const authPoster = (authUrl, data) => {
    return fetch(authUrl, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    }).then((res) => {
        //TODO handle fail
        return res.json()
    }).then((_d) => {
        return _d
    })
}