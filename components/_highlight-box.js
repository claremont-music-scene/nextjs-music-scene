export default function HighlightBox() {
    return (
        <div className="container px-5 mx-auto text-white bg-black lg:py-10 lg:px-20 shadow-green body-font">
            <a href="#">
            </a>
            <div className="flex flex-col w-full mb-10 text-center "><a href="#">
                <h1 className="mb-4 text-5xl font-black leading-none tracking-tighter text-white lg:text-8xl md:text-4xl">
                    <span className="italic">2020 in images</span>
                </h1>
                <p className="mx-auto text-xl font-normal leading-relaxed text-white lg:w-2/3">
                    We have put the most interesting news togheter in images, chechk it out.
                </p>
            </a><a href="#"
                   className="inline-flex items-center p-4 mx-auto mt-4 font-black text-white duration-500 ease-in-out border-b bg-green-900 text-1xl ransition md:mb-2 lg:mb-0 hover:text-pink-1000 ">
                Read it
                <svg className="w-10 h-10 ml-2 -m-32" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20"
                     height="20" fill="currentColor">
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z">
                    </path>
                </svg>
            </a>
            </div>

        </div>
    )
}