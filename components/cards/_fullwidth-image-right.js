export default function CardFullWidthImageRight() {
    return (
        <div className="container w-full py-10 mx-auto ">
            <div className="bg-cream shadow-green">
                <div className="flex flex-wrap p-4 ">
                    <div className="lg:w-1/2 md:w-1/2 lg:-mt-12 ">
                        <div className="flex h-full">
                            <div className="w-full px-8 py-10 bg-green">
                                <div className="p-4 mb-1 bg-black ">
                                    <h1 className="py-4 text-2xl font-black leading-none tracking-tighter text-transparent uppercase lg:text-5xl bg-gradient-to-tr from-blue to-pink bg-clip-text">
                                        She give me her monkey hand in a rambler sedan, I'm the King of Milwaukee
                                    </h1>
                                </div>
                                <h1 className="p-4 mb-3 text-lg font-medium text-white uppercase bg-black">
                                    skills
                                    <small className="text-xs text-pink ">
                                        <span className="text-gray-500">....</span>
                                        stuff</small>
                                </h1>
                                <p className="my-4 font-medium leading-none tracking-tighter">Her juju beads are so nice, she kissed my third cousin twice, I'm the King of Pomona
                                </p>
                                <a href="#"
                                   className="inline-flex items-center p-4 mt-4 font-black text-black text-1xl bg-gradient-to-tr from-blue to-pink md:mb-2 lg:mb-0 hover:text-white ">
                                    his twitter
                                    <svg className="w-10 h-10 ml-2 -m-32" xmlns="http://www.w3.org/2000/svg"
                                         viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                                        <path fill="none" d="M0 0h24v24H0z"></path>
                                        <path
                                            d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z">
                                        </path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className=" lg:w-1/2 sm:w-1/2">
                        <div className="flex h-full">
                            <img alt="gallery" className="object-center w-full h-full "
                                 src="https://d33wubrfki0l68.cloudfront.net/11f68cb0c7516ac351cf05ec3d30a824cbd4269f/63821/assets/figmamike3.svg"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}