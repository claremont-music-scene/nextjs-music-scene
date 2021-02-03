export default function FooterHugeMenu() {
    return (
        <div className="container px-5 mx-auto text-white bg-black lg:py-10 body-font">
            <div className="flex flex-col w-full mb-10 text-center ">
                    <span
                        className="my-20 mb-4 text-5xl font-black leading-relaxed tracking-tighter text-white transform skew-x-12 lg:text-18xl md:text-4xl ">
                        <a href="./inex.html" className="text-white hover:text-green">HOME</a>
                        <br/>
                    </span>
                <span
                    className="my-20 mb-4 text-5xl font-black leading-relaxed tracking-tighter text-white transform skew-y-12 lg:text-18xl md:text-4xl">
                        <a href="/blog" className="text-white hover:text-green">BLOG</a>
                    </span>
                <span
                    className="my-20 mb-4 text-5xl font-black leading-relaxed tracking-tighter text-white transform skew-x-12 lg:text-18xl md:text-4xl">
                        <a href="/about" className="text-white hover:text-green ">ABOUT</a>
                    </span>
            </div>
        </div>
    )
}