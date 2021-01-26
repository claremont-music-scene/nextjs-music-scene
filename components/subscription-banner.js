export default function SignupBanner() {
    return (
        <section className="">
            <div className="container flex flex-wrap items-center px-5 mx-auto ">
                <div className="flex flex-col w-full p-8 mt-10 bg-black lg:w-4/6 md:w-1/2 md:ml-auto md:mt-0">
                    <h1 className="text-5xl font-black leading-none tracking-tighter text-transparent bg-gradient-to-tr from-blue to-pink bg-clip-text text-shadow-3d lg:text-8xl">Become
                        a reader.</h1>
                    <p className="mt-4 text-2xl font-bold leading-relaxed text-white ">Subscribe .</p>
                    <span
                        className="inline-block w-20 h-1 mt-6 mb-4 bg-gradient-to-r from-green to-pink"></span>
                </div>
                <div className="flex flex-col w-full p-8 lg:w-2/6 md:w-1/2 md:ml-auto lg:mt-10 md:mt-0">
                    <div className="relative mb-4">
                        <input type="email" id="email" name="email" placeholder="email@example.com"
                               className="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-white border border-gray-300 outline-none focus:border-black"/>
                    </div>
                    <button
                        className="px-8 py-2 font-bold text-white transition duration-500 ease-in-out transform border-0 bg-pink-1000 hover:text-black focus:outline-none hover:bg-green ">Subscribe
                    </button>
                    <p className="mt-3 text-xs text-gray-500">You won't get spam.</p>
                </div>
            </div>
        </section>
    )
}