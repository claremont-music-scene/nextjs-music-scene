export default function Header() {
    return (
        <section className="text-white bg-midnight">
            <div className="container flex flex-col flex-wrap px-5 pt-4 mx-auto lg:px-16 sm:flex-row">
                    <span
                        className="inline-flex justify-center px-4 py-2 mt-2 bg-black sm:ml-auto sm:mt-0 sm:justify-start shadow-green">
                        <a className="text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" className={"icon icon-tabler icon-tabler-rss"} width="20"
                                 height="20" viewBox="0 0 24 24" strokeWidth={"1.5"} stroke="currentColor" fill="none"
                                 strokeLinecap={"round"} strokeLinejoin={"round"}>
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                <circle cx="5" cy="19" r="1"></circle>
                                <path d="M4 4a16 16 0 0 1 16 16"></path>
                                <path d="M4 11a9 9 0 0 1 9 9"></path>
                            </svg>
                        </a>
                        <a className="ml-3 text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-twitter"
                                 width="20" height="20" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"
                                 fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                <path
                                    d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c-.002 -.249 1.51 -2.772 1.818 -4.013z"></path>
                            </svg>
                        </a>
                    </span>
            </div>
            <div className="container flex flex-col items-center px-5 pb-4 mx-auto lg:px-10 md:flex-row">
                <div className="flex flex-col items-center text-center lg:flex-grow md:items-start md:text-left">
                    <h1 className="mb-8 text-2xl font-black leading-none tracking-tighter text-center text-orange lg:text-left lg:text-8xl text-shadow-3d title-font">
                        Claremont <span className="text-red text-13xl">Music</span> Scene
                    </h1>
                </div>
            </div>
        </section>
    )
}