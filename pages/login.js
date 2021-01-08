import SingleColumnLayout from "../components/layouts/single-column";
import {useForm} from "react-hook-form";
import { useRouter } from 'next/router';


export async function getStaticProps() {
    const siteUrl = process.env.SITE_URL
    return {props: {siteUrl}}
}

export default function Login({ siteUrl }) {
    const router = useRouter();

    const { register, handleSubmit, errors } = useForm(),
        onSubmit = async (data) => {
            let url = new URL(`${siteUrl}/api/login`)
            fetch(url, {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then((res) => {

                if (res.ok) {
                    console.log('redirecting to bulletins')
                    router.push('/community/bulletins')
                }
                //TODO error message
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