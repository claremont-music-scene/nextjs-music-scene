export default function CategoryAndDescriptionCard({headline, bgColor='yellow'}) {

    const cardStyle = `w-full px-8 py-10 bg-${bgColor}`
    return (
        <div className="lg:w-1/3 md:w-1/2 lg:-mt-12">

            <div className="flex h-full">

                <div className={cardStyle}>
                    <a href="#">
                        <div className="p-4 mb-1 bg-black">
                            <h1 className="text-5xl font-teal leading-none tracking-tighter text-transparent bg-gradient-to-tr from-yellow to-orange bg-clip-text">
                                {headline}
                            </h1>
                        </div>
                        <h1 className="p-4 mb-3 text-lg font-medium text-white uppercase bg-black">
                            TECH
                            <small className="text-xs text-red ">
                                <span className="text-gray-500">BY</span>
                                Ginger Chris
                            </small>
                        </h1>
                        <p className="my-4 font-medium leading-none tracking-tighter">Because of the large
                            footprint, it may seem flat, but actually ranges up to 5 stories tall.</p>
                    </a>


                    <a href="#"
                       className="inline-flex items-center p-4 mt-4 font-black text-black text-1xl bg-gradient-to-tr from-blue-1000 to-pink-1000 md:mb-2 lg:mb-0 hover:text-white ">
                        Read it
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
    )
}