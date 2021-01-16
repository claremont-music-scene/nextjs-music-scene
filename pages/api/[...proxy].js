import {getSession} from "next-auth/client";
import {formJSONtoFormData} from "../../util/crud";


export default async function handler(req, res) {
    const {
        query: { proxy },
        body
    } = req
    const session = await getSession({ req })

    //console.log('API proxy', proxy, body)

    // No help from Jobu
    var formBody = [];
    for (var property in body) {
        var encodedKey = encodeURIComponent(property);
        var encodedValue = encodeURIComponent(body[property]);
        formBody.push(encodedKey + "=" + encodedValue);
    }
    formBody = formBody.join("&");

    //make post to API
    const endUrl = `${process.env.API_URL}/${proxy.join('/')}/`
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

    console.log('returning API res', result)
    res.end(JSON.stringify(result))
}
