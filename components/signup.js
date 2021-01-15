import { signIn } from 'next-auth/client'

export default function SignUp () {
    return (
        <>
            <h1>Register or Sign In</h1>
            <p>
                <a href="/api/auth/signin"
                   onClick={(e) => {
                       e.preventDefault()
                       signIn()
                   }}>Sign In</a>
            </p>
        </>
    )
}