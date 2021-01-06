import SingleColumnLayout from "../components/layouts/single-column";
import {useForm} from "react-hook-form";
import {fetcher, poster} from "../util/crud";
import Router from 'next/router';



export async function getServerSideProps(context) {
    // if request is post, post to API
    console.log(context.req.method)

    const req = context.req
    if (req.method == "POST") {
        let body = ''
        req.on('data', (chunk) => {
            body += chunk
        })
        req.on('end', () => {
            console.log(body);
            let bp = JSON.parse(body)
            fetch('http://local.music-scene-data.com:8000/api/auth/token/login/', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({username: bp.username, password: bp.password})

            }).then((res) => {
                console.log("API Login status", res.status)
                console.log("returning redirect")
                return {
                    redirect: {
                        destination: '/community/bulletins',
                        permanent: false
                    }
                }
            })
        });

    }
    console.log('returning')
    return {props: {}}

}

export default function Login() {

    const { register, handleSubmit, errors } = useForm(),
        onSubmit = (data) => {
            console.log('attempting to submit data:', data);
            fetch('/login', {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json'
                }})

            //post to /login
            //poster({formData: fd, endpoint: '/login/', redirectPath: '/community/bulletins'});
        };

    return (<SingleColumnLayout>
        <div>
            Login to Claremont Music Scene:
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor='username'>Email or Username</label>
                    <input name='username' id='username' ref={register({ required: true })} />
                    <div className="field-error">{errors.username && 'Email or username required.'}</div>
                </div>
                <div>
                    <label htmlFor='password'>Password</label>
                    <input name='password' id='password' ref={register({ required: true })} />
                    <div className="field-error">{errors.password && 'Password required.'}</div>
                </div>
                <input type='submit' />
            </form>
        </div>
    </SingleColumnLayout>)
}