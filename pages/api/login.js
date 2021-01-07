import {authPoster} from "../../util/crud";
//import {useCookies} from 'react-cookie';
import { serialize } from 'cookie';

export default async function handler(req, res) {
    //const [cookies, setCookie, removeCookie] = useCookies(['token']);
    res.setHeader('Content-Type', 'application/json')

    console.log('query', req.query)

    const loginResult = await authPoster(req.query)
    console.log('got login result', loginResult)
    if (loginResult['auth_token']) {
        //cookies.set('token', loginResult['auth_token'])
        //setCookie('token', loginResult['auth_token'], {path: '/'})

        res.setHeader('Set-Cookie', serialize('token', loginResult['auth_token'], {
            //httpOnly: true,
            //one week
            maxAge: 60 * 60 * 24 * 7,
            path: '/',
            sameSite: true
        }));

        res.statusCode = 200
        res.end(JSON.stringify(loginResult))
    } else {
        res.statusCode = 400
        res.end(JSON.stringify({'error': 'login failed'}))
    }
}
