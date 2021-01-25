import Header from "../components/header";
import Menu from "../components/nav/menu";
import CategoryAndDescriptionCard from "../components/cards/category-and-description";
import CardRow from "../components/cards/row";

export default function HomePage() {
    return (<>

        <Header/>
        <Menu/>

        <section className="px-5 lg:px-24 bg-midnight">

           <CardRow>
                <CategoryAndDescriptionCard headline="First A Box" bgColor="yellow"/>
                <CategoryAndDescriptionCard headline="Then Another" bgColor="teal"/>
                <CategoryAndDescriptionCard headline="Looks like we're on a roll here" bgColor="cream"/>
           </CardRow>

            <CardRow>
                <CategoryAndDescriptionCard headline="A second row" bgColor="pink-600" bgGradientFrom="red-light" bgGradientTo="skyblue"/>
                <CategoryAndDescriptionCard headline="Row Row Row" bgColor="skyblue" bgGradientFrom="green" bgGradientTo="cream"/>
                <CategoryAndDescriptionCard headline="Looks like we're on a row here" bgColor="green"/>
            </CardRow>

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

            <div className="container w-full py-10 mx-auto ">
                <div className="bg-white shadow-green">
                    <div className="flex flex-wrap p-4">
                        <div className="w-full border-2 border-white lg:w-1/2">
                            <a href="#">
                                <div className="flex h-full">
                                    <div
                                        className="w-full px-8 py-10 transition duration-500 ease-in-out bg-black hover:bg-white group">
                                        <div className="mb-1">
                                            <h1 className="py-4 text-2xl font-black leading-none tracking-tighter text-transparent uppercase bg-gradient-to-tr from-blue-1000 to-pink-1000 bg-clip-text">
                                                Lime unveils next-gen scooter as it continues to inch toward
                                                profitability,
                                                so you know
                                            </h1>
                                        </div>
                                        <h1 className="py-4 mb-3 text-lg font-medium text-white uppercase transition duration-500 ease-in-out border-b group-hover:text-black border-pink-1000">
                                            Scooters
                                            <small className="text-xs text-pink-1000 ">
                                                <span className="text-gray-500">BY</span>
                                                Jack Sparrow </small>
                                        </h1>
                                        <div
                                            className="inline-flex items-center p-4 mt-4 font-black text-white duration-500 ease-in-out border-b text-1xl ransition group-hover:text-black bg-gradient-to-tr from-blue-1000 to-pink-1000 md:mb-2 lg:mb-0 hover:text-blue-1000 ">
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
                        <div className="w-full border-2 border-white lg:w-1/2">
                            <a href="#">
                                <div className="flex h-full">
                                    <div
                                        className="w-full px-8 py-10 transition duration-500 ease-in-out bg-black hover:bg-white group">
                                        <div className="mb-1">
                                            <h1 className="py-4 text-2xl font-black leading-none tracking-tighter text-transparent uppercase bg-gradient-to-tr from-blue-1000 to-pink-1000 bg-clip-text">
                                                Lime unveils next-gen scooter as it continues to inch toward
                                                profitability,
                                                so you know
                                            </h1>
                                        </div>
                                        <h1 className="py-4 mb-3 text-lg font-medium text-white uppercase transition duration-500 ease-in-out border-b group-hover:text-black border-pink-1000">
                                            Scooters
                                            <small className="text-xs text-pink-1000 ">
                                                <span className="text-gray-500">BY</span>
                                                Jack Sparrow </small>
                                        </h1>
                                        <div
                                            className="inline-flex items-center p-4 mt-4 font-black text-white duration-500 ease-in-out border-b text-1xl ransition group-hover:text-black bg-gradient-to-tr from-blue-1000 to-pink-1000 md:mb-2 lg:mb-0 hover:text-blue-1000 ">
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
                        <div className="w-full border-2 border-white lg:w-1/2">
                            <a href="#">
                                <div className="flex h-full">
                                    <div
                                        className="w-full px-8 py-10 transition duration-500 ease-in-out bg-black hover:bg-white group">
                                        <div className="mb-1">
                                            <h1 className="py-4 text-2xl font-black leading-none tracking-tighter text-transparent uppercase bg-gradient-to-tr from-blue-1000 to-pink-1000 bg-clip-text">
                                                Lime unveils next-gen scooter as it continues to inch toward
                                                profitability,
                                                so you know
                                            </h1>
                                        </div>
                                        <h1 className="py-4 mb-3 text-lg font-medium text-white uppercase transition duration-500 ease-in-out border-b group-hover:text-black border-pink-1000">
                                            Scooters
                                            <small className="text-xs text-pink-1000 ">
                                                <span className="text-gray-500">BY</span>
                                                Jack Sparrow </small>
                                        </h1>
                                        <div
                                            className="inline-flex items-center p-4 mt-4 font-black text-white duration-500 ease-in-out border-b text-1xl ransition group-hover:text-black bg-gradient-to-tr from-blue-1000 to-pink-1000 md:mb-2 lg:mb-0 hover:text-blue-1000 ">
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
                        <div className="w-full border-2 border-white lg:w-1/2">
                            <a href="#">
                                <div className="flex h-full">
                                    <div
                                        className="w-full px-8 py-10 transition duration-500 ease-in-out bg-black hover:bg-white group">
                                        <div className="mb-1">
                                            <h1 className="py-4 text-2xl font-black leading-none tracking-tighter text-transparent uppercase bg-gradient-to-tr from-blue-1000 to-pink-1000 bg-clip-text">
                                                Lime unveils next-gen scooter as it continues to inch toward
                                                profitability,
                                                so you know
                                            </h1>
                                        </div>
                                        <h1 className="py-4 mb-3 text-lg font-medium text-white uppercase transition duration-500 ease-in-out border-b group-hover:text-black border-pink-1000">
                                            Scooters
                                            <small className="text-xs text-pink-1000 ">
                                                <span className="text-gray-500">BY</span>
                                                Jack Sparrow </small>
                                        </h1>
                                        <div
                                            className="inline-flex items-center p-4 mt-4 font-black text-white duration-500 ease-in-out border-b text-1xl ransition group-hover:text-black bg-gradient-to-tr from-blue-1000 to-pink-1000 md:mb-2 lg:mb-0 hover:text-blue-1000 ">
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
                    </div>
                </div>
            </div>
        </section>

        <footer className="bg-black border-t border-gray-900 body-font">
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
            <div className="bg-black border-t border-gray-900 body-font">
                <div className="container flex flex-col items-center px-5 py-10 mx-auto lg:py-8 sm:flex-row">
                    <a href="#"
                       className="text-lg font-semibold rounded-lg tracking-widestuppercase focus:outline-none focus:shadow-outline">
                        <h1 className="text-2xl font-bold tracking-tighter text-white uppercase lg:text-3xl">
                            WickedTemplates
                            <span className="text-xs">©</span>
                        </h1>
                    </a>
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
        </footer>


        </>)
}