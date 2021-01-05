import SingleColumnLayout from "../components/layouts/single-column";
import {useForm} from "react-hook-form";
import {poster} from "../util/crud";
import Router from "next/router";

export default function Login() {

    const { register, handleSubmit, errors } = useForm(),
        onSubmit = async (data) => {
            console.log('attempting to submit data:', data);
            const fd = new FormData();
            fd.append('username', username);
            fd.append('password', password);

            // TODO password field
            // TODO CSRF token
            try {
                await fetch(`http://local.music-scene-data.com:8000/login/`, {
                    method: 'POST',
                    mode: 'no-cors',
                    body: fd
                });
                await Router.push(redirectPath);
            }
            catch (err) {
                console.error(err);
            }
            //poster({formData: fd, endpoint: '/bulletin_board/items/'});
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