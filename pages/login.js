import SingleColumnLayout from "../components/layouts/single-column";
import {useForm} from "react-hook-form";
import { useRouter } from 'next/router';
import Box from "../components/box";


export async function getStaticProps() {
    const { SITE_URL, SITE_NAME } = process.env
    return {props: {SITE_NAME, SITE_URL}}
}

export default function Login({ SITE_NAME, SITE_URL }) {
    const router = useRouter();

    const { register, handleSubmit, errors } = useForm(),
        onSubmit = async (data) => {
            let url = new URL(`${SITE_URL}/api/login`)
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
        <h3>Login to {SITE_NAME}</h3>
        <style>{`.box {background: var(--sitecolor-lightestgray)}`}</style>
        <Box>
             <form onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <label htmlFor='username'>Username</label>
                        <input name='username' id='username' type="text" ref={register({ required: true })} />
                        <div className="field-error">{errors.username && 'Email or username required.'}</div>
                    </div>
                    <div>
                        <label htmlFor='password'>Password</label>
                        <input name='password' id='password' type="password" ref={register({ required: true })} />
                        <div className="field-error">{errors.password && 'Password required.'}</div>
                    </div>
                    <input type='submit' value="Sign In"/>
                </form>
        </Box>

    </SingleColumnLayout>)
}