import Link from 'next/link'
import UserState from "./user-state";
import HeaderSocialLinks from "./header-social-links";

export default function Header() {
    const showUserState = false
    return (
        <section className="text-white bg-midnight">
            <div className="container flex flex-col flex-wrap px-5 pt-4 mx-auto lg:px-16 sm:flex-row">
                <HeaderSocialLinks/>
                {showUserState && <UserState/>}
            </div>
            <div className="container flex flex-col items-center px-5 pb-4 mx-auto lg:px-10 md:flex-row">
                <div className="flex flex-col items-center text-center lg:flex-grow md:items-start md:text-left">
                    <Link href='/'><a className="no-underline">
                        <h1 className="mb-8 text-2xl sm:text-4xl font-black f leading-none tracking-tighter text-center text-orange lg:text-left md:text-6xl text-shadow-3d title-font">
                            Claremont <span className="text-red text-13xl">Music</span> Scene
                        </h1>
                    </a></Link>
                </div>
            </div>
        </section>
    )
}