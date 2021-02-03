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
            </div>
        </div>
    </footer>)
}