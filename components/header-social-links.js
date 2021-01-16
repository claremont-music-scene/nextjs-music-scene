import Link from 'next/link'
import { signIn, signOut, useSession } from 'next-auth/client'

export default function HeaderSocialLinks() {
    const [ session, loading ] = useSession()
    console.log('HSL ', session)
    return (
        <header id="header"><Link href="/" ><a className="logo"><strong>Claremont Music Scene</strong></a></Link>

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

            <ul className="icons">
                <li><a href="https://www.instagram.com/claremont.music/"
                       className="icon brands fa-instagram"><span className="label">Instagram</span></a>
                </li>
                <li><a href="https://www.facebook.com/ClaremontMusicScene/"
                       className="icon brands fa-facebook-f"><span className="label">Facebook</span></a>
                </li>
                <li><a href="https://twitter.com/Claremont_Music" className="icon brands fa-twitter"><span
                    className="label">Twitter</span></a></li>
            </ul>
        </header>
    )
}