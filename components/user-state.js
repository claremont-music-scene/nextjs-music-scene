import {signIn, signOut, useSession} from "next-auth/client";

export default function UserState() {
    const [ session, loading ] = useSession()

    return (
        <div>
            <p>
                {!session && <>
                    <span>You are not signed in</span>
                    <a
                        href={`/api/auth/signin`}
                        onClick={(e) => {
                            e.preventDefault()
                            signIn()
                        }}
                    >
                        Sign in
                    </a>
                </>}
                {session && <>
                    {session.user.image && <span style={{backgroundImage: `url(${session.user.image})` }} />}
                    <span>
              <small>Signed in as</small><br/>
              <strong>{session.username}</strong>
              </span>
                    <a
                        href={`/api/auth/signout`}
                        onClick={(e) => {
                            e.preventDefault()
                            signOut()
                        }}
                    >
                        Sign out
                    </a>
                </>}
            </p>
        </div>
    )
}