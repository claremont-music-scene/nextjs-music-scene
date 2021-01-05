import SingleColumnLayout from "../components/layouts/single-column";
import {useForm} from "react-hook-form";
import {fetcher, poster} from "../util/crud";
import Router from "next/router";



export default function Login() {

    const { register, handleSubmit, errors } = useForm(),
        onSubmit = (data) => {
            console.log('attempting to submit data:', data);
            const fd = new FormData();
            fd.append('username', username);
            // TODO password field
            fd.append('password', password);


            //fetcher('http://local.music-scene-data.com:8000/api/set-csrf/')
            //const csrftoken = getCookie('csrftoken');
            //fd.append('csrf_token', csrftoken)

            poster({formData: fd, endpoint: '/login/', redirectPath: '/community/bulletins'});
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