export default function CardFullWidthImageLeft() {
    return (
        <div className="container w-full pt-20 pb-10 mx-auto ">
            <div className="bg-white shadow-green">
                <div className="flex flex-wrap p-4 ">
                    <div className=" lg:w-1/2 sm:w-1/2">
                        <div className="flex h-full">
                            <img alt="gallery" className="object-center w-full h-full "
                                 src="https://d33wubrfki0l68.cloudfront.net/ea01c698278aa88372052a9f6b910e9d2e4d5921/e67ea/assets/figmamike2.svg"/>
                        </div>
                    </div>

                    <div className="lg:w-1/2 md:w-1/2 lg:-mt-12">
                        <div className="flex h-full">
                            <div className="w-full px-8 py-10 bg-black">
                                <div className="mb-1 bg-black">
                                    <h1 className="py-4 text-2xl font-black leading-none tracking-tighter text-transparent uppercase lg:text-5xl bg-gradient-to-tr from-blue-1000 to-pink-1000 bg-clip-text">
                                        “Are you surprised at my tears sir? Strong men also cry. Strong men... also cry”
                                    </h1>

                                </div>
                                <h1 className="py-4 mb-3 text-lg font-medium text-white uppercase border-b border-pink-1000">
                                    skills
                                    <small className="text-xs text-pink-1000 ">
                                        <span className="text-gray-500">...</span>
                                        say, what?
                                    </small>
                                </h1>
                                <p className="my-4 font-medium leading-none tracking-tighter text-white">
                                    You want a toe dude? I can get you a toe. I can get you a toe by 2 o'clock today. There are ways dude, trust me you don't wanna know about 'em</p>
                                <a href="#"
                                   className="inline-flex items-center p-4 mt-4 font-black text-white duration-500 ease-in-out border-b text-1xl ransition group-hover:text-black bg-gradient-to-tr from-blue-1000 to-pink-1000 md:mb-2 lg:mb-0 hover:text-blue-1000 ">
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
                </div>
            </div>
        </div>
    )
}