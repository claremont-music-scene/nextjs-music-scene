export default function HeadlineCard() {
    return (
        <div className="w-full border-2 border-white lg:w-1/2">
            <a href="#">
                <div className="flex h-full">
                    <div
                        className="w-full px-8 py-10 transition duration-500 ease-in-out bg-black hover:bg-white group">
                        <div className="mb-1">
                            <h1 className="py-4 text-2xl font-black leading-none tracking-tighter text-transparent uppercase bg-gradient-to-tr from-blue to-orange bg-clip-text">
                                Lime unveils next-gen scooter as it continues to inch toward
                                profitability,
                                so you know
                            </h1>
                        </div>
                        <h1 className="py-4 mb-3 text-lg font-medium text-white uppercase transition duration-500 ease-in-out border-b group-hover:text-black border-green">
                            Scooters
                            <small className="text-xs text-pink-1000 ">
                                <span className="text-gray-500">BY</span>
                                Jack Sparrow </small>
                        </h1>
                        <div
                            className="inline-flex items-center p-4 mt-4 font-black text-white duration-500 ease-in-out border-b text-1xl transition group-hover:text-black bg-gradient-to-tr from-blue-900 to-pink-900 md:mb-2 lg:mb-0 hover:text-blue-1000 ">
                            Read it
                            <svg className="w-10 h-10 ml-2 -m-32" xmlns="http://www.w3.org/2000/svg"
                                 viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                                <path fill="none" d="M0 0h24v24H0z"></path>
                                <path
                                    d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z">
                                </path>
                            </svg>
                        </div>
                    </div>
                </div>
            </a>
        </div>
    )
}