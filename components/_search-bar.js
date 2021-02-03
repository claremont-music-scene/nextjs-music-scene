export default function SearchBar() {
    return (
        <section className="bg-black">
            <div className="container flex flex-wrap items-center px-5 py-8 mx-auto">
                <div className="flex items-center justify-center w-full flex-nowrap md:justify-center">
                    <div className="relative w-full lg:mr-2 sm:mr-4">
                        <input type="text" id="footer-field" name="footer-field" placeholder="search"
                               className="w-full px-3 py-4 placeholder-white transition-colors duration-200 ease-in-out bg-transparent border-b itemscenter focus:placeholder-black lg:text-6xl border-pink-1000 outlne-none borde focus:ring-2 focus:bg-pink-1000 focus:ring-blue-1000 focus:border-pink-1000 text-green"/>
                    </div>
                    <button
                        className="z-10 inline-flex items-center px-3 ml-auto font-black transition-colors duration-200 ease-in-out lg:text-7xl text-green focus:outline-none hover:text-white">
                        <svg className="lg:h-32 lg:w-32 lg:-ml-44" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                             width="20" height="20" fill="currentColor">
                            <path fill="none" d="M0 0h24v24H0z"></path>
                            <path
                                d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z">
                            </path>
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    )
}