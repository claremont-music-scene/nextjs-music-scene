import {getSession} from "next-auth/client";
import {formJSONtoFormData} from "../../util/crud";

export default async function handler(req, res) {
    const {
        query: { proxy },
        body
    } = req
    const session = await getSession({ req })

    console.log('API proxy', proxy, body)

    console.log('convert to FD', formJSONtoFormData(body))
    var formBody = [];
    for (var property in body) {
        var encodedKey = encodeURIComponent(property);
        var encodedValue = encodeURIComponent(body[property]);
        formBody.push(encodedKey + "=" + encodedValue);
    }
    formBody = formBody.join("&");
    console.log('formbody is', formBody)

    //make post to API
    const endUrl = `${process.env.API_URL}/${proxy.join('/')}/`
    //const endUrl = 'https://3a3b5c241d65629533f3f0b756a6cfdd.m.pipedream.net'
    const apiRes = await fetch(endUrl, {
        method: 'POST',
        body: formBody,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded',
            Authorization: `Token ${session.apiToken}`
        }
    })

    console.log('got API result', apiRes, apiRes.body, apiRes.headers)
    res.end(`shazam`)
}
