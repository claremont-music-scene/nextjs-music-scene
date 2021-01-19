import {apiPoster} from "../../util/server";
import {apiGetter} from "../../util/server";
import {getSession} from "next-auth/client";



export default async function handler(req, res) {
    const {query: {proxy}} = req
    //console.log('API proxy', req.method, proxy)

    if (req.method == 'GET') {
        return await apiGetter(proxy)
    }
    else if (req.method == "POST") {
        const {body} = req
        const session = await getSession({ req })
        const postRes = await apiPoster(`/${proxy.join('/')}/`, body, session)
        res.send(JSON.stringify(postRes))
    }
}
