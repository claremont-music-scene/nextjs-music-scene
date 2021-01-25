export default function Footer() {
    return (<footer className="bg-black border-t border-gray-900 body-font">

        <div className="bg-black border-t border-gray-900 body-font">
            <div className="container flex flex-col items-center px-5 py-10 mx-auto lg:py-8 sm:flex-row">
                <a href="#"
                   className="text-lg font-semibold rounded-lg tracking-widestuppercase focus:outline-none focus:shadow-outline">
                    <h1 className="text-2xl font-bold tracking-tighter text-white uppercase lg:text-3xl">
                        Claremont Music Scene
                        <span className="text-xs">©</span>
                    </h1>
                </a>
                <span className="text-gray mx-2">A MusicScene.city Project</span>
                <span className="inline-flex justify-center mt-4 sm:ml-auto sm:mt-0 sm:justify-start">
                        <a className="ml-3 text-white">
                            <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                 className="w-5 h-5" viewBox="0 0 24 24">
                                <path
                                    d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z">
                                </path>
                            </svg>
                        </a>
                    </span>
            </div>
        </div>
    </footer>)
}