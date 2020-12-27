import Link from 'next/link'

export default function HeaderSocialLinks() {
    return (
        <header id="header"><Link href="/" ><a className="logo"><strong>Claremont Music Scene</strong></a></Link>
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