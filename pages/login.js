import SingleColumnLayout from "../components/layouts/single-column";
import {useForm} from "react-hook-form";
import {authPoster, fetcher, poster, serverSidePoster} from "../util/crud";
import Router from 'next/router';
import getRawBody from 'raw-body';
import { useRouter } from 'next/router';



export default function Login() {
    const router = useRouter();

    const { register, handleSubmit, errors } = useForm(),
        onSubmit = async (data) => {
            console.log('attempting to submit data:', data);
            let url = new URL('http://localhost:3000/api/login')
            Object.keys(data).forEach(key => url.searchParams.append(key, data[key]))
            fetch(url, {
                params: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then((res) => {
                if (res.ok) {
                    res.json().then((data) => {
                        console.log('response data ', data)
                    })
                }
            })


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