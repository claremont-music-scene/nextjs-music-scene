export default function DetailHeader({headline, author}) {
    return (
        <section className="px-5 lg:px-24">
            <div className="container w-full pt-10 pb-20 mx-auto">
                <div className="flex flex-wrap p-4">
                    <div className="w-full shadow-green">
                        <div className="flex h-full">
                            <div className="w-full px-8 py-10 transition duration-500 ease-in-out bg-black ">
                                <div className="mb-1">
                                    <h1
                                        className="py-4 font-black leading-none tracking-tighter text-transparent uppercase lg:text-5xl bg-gradient-to-tr from-blue to-pink bg-clip-text">
                                        {headline}
                                    </h1>
                                </div>
                                <h1
                                    className="py-4 mb-3 text-lg font-medium text-white uppercase transition duration-500 ease-in-out border-b border-pink-1000 ">
                                    NEWS |
                                    <small className="text-xs text-pink ">
                                        <span className="text-gray-500">BY</span>
                                        {author}
                                    </small>
                                </h1>
                                <span className="inline-flex items-center ">
                                    <a className="text-white hover:text-green">
                                        <svg xmlns="http://www.w3.org/2000/svg"
                                             className="icon icon-tabler icon-tabler-rss"
                                             width="20" height="20" viewBox="0 0 24 24" strokeWidth="1.5"
                                             stroke="currentColor" fill="none" strokeLinecap="round"
                                             strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                            <circle cx="5" cy="19" r="1"/>
                                            <path d="M4 4a16 16 0 0 1 16 16"/>
                                            <path d="M4 11a9 9 0 0 1 9 9"/>
                                        </svg>
                                    </a>
                                    <a className="ml-3 text-white hover:text-green">
                                        <svg xmlns="http://www.w3.org/2000/svg"
                                             className="icon icon-tabler icon-tabler-brand-twitter" width="20"
                                             height="20"
                                             viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none"
                                             strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                            <path
                                                d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c-.002 -.249 1.51 -2.772 1.818 -4.013z"/>
                                        </svg>
                                    </a>
                                </span>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}