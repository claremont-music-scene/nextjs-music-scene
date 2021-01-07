import {authPoster} from "../../util/crud";
import { serialize } from 'cookie';

export default async function handler(req, res) {
    res.setHeader('Content-Type', 'application/json')
    const loginResult = await authPoster(req.query)
    if (loginResult['auth_token']) {
        res.setHeader('Set-Cookie', serialize('token', loginResult['auth_token'], {
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