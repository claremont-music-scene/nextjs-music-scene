export default function Tailwinder() {
    return (
        <body class="text-black transition-colors duration-1000">
        <section class="text-white">
            <div class="container flex flex-col flex-wrap px-5 pt-4 mx-auto lg:px-16 sm:flex-row">
                <span
                    class="inline-flex justify-center px-4 py-2 mt-2 bg-black sm:ml-auto sm:mt-0 sm:justify-start shadow-green">
                    <a class="text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-rss" width="20"
                             height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none"
                             stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <circle cx="5" cy="19" r="1"></circle>
                            <path d="M4 4a16 16 0 0 1 16 16"></path>
                            <path d="M4 11a9 9 0 0 1 9 9"></path>
                        </svg>
                    </a>
                    <a class="ml-3 text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-twitter"
                             width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                             fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path
                                d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c-.002 -.249 1.51 -2.772 1.818 -4.013z"></path>
                        </svg>
                    </a>
                </span>
            </div>
            <div class="container flex flex-col items-center px-5 pb-4 mx-auto lg:px-10 md:flex-row">
                <div class="flex flex-col items-center text-center lg:flex-grow md:items-start md:text-left">
                    <h1 class="mb-8 text-2xl font-black leading-none tracking-tighter text-center text-white lg:text-left lg:text-8xl text-shadow-3d title-font">
                        The <span class="text-black text-13xl">mag</span> azine.
                    </h1>
                    <p class="p-2 mb-3 text-xl font-black tracking-tighter text-black bg-white shadow-green"> FRIDAY,
                        JANUARY 8, 2021
                    </p>
                </div>
            </div>
        </section>

        <div class="w-full bg-black border-t-4 border-b border-green-1000">
            <div x-data="{ open: false }"
                 class="flex flex-col max-w-screen-xl px-5 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-10">
                <div class="flex flex-row items-center justify-between p-4 ">
                    <a href="#"
                       class="text-lg font-semibold rounded-lg tracking-widestuppercase focus:outline-none focus:shadow-outline">
                        <h1 class="text-2xl font-bold tracking-tighter text-white uppercase md:text-sm ">
                            WickedTemplates
                            <span class="text-xs">©</span>
                        </h1>
                    </a>
                    <button class="rounded-lg md:hidden focus:outline-none focus:shadow-outline">
                        <svg fill="#ffffff" viewBox="0 0 20 20" class="w-10 h-10">
                            <path x-show="!open" fill-rule="evenodd"
                                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                                  clip-rule="evenodd"></path>
                        </svg>
                    </button>
                </div>
                <nav class="flex-col flex-grow hidden pb-4 md:pb-0 lg:justify-end md:flex md:flex-row lg:ml-10">
                    <a class="px-4 py-2 mt-2 text-sm font-semibold tracking-tighter text-white transition duration-500 ease-in-out transform bg-transparent bg-opacity-20 md:mt-0 md:ml-4 hover:text-black focus:text-white hover:bg-white focus:outline-none focus:shadow-outline"
                       href="#">Action</a>
                    <a class="px-4 py-2 mt-2 text-sm font-semibold tracking-tighter text-white transition duration-500 ease-in-out transform bg-transparent bg-opacity-20 md:mt-0 md:ml-4 hover:text-black focus:text-white hover:bg-white focus:outline-none focus:shadow-outline"
                       href="#">Action</a>
                    <a class="px-4 py-2 mt-2 text-sm font-semibold tracking-tighter text-white transition duration-500 ease-in-out transform bg-transparent bg-opacity-20 md:mt-0 md:ml-4 hover:text-black focus:text-white hover:bg-white focus:outline-none focus:shadow-outline"
                       href="#">Action</a>
                    <div class="relative items-center" x-data="{ open: false }">
                        <button
                            class="flex flex-row items-center w-full px-4 py-2 mt-2 font-semibold text-left text-white transition duration-500 ease-in-out transform bg-transparent text-md md:w-auto md:inline md:mt-0 md:ml-4 hover:text-black focus:text-white hover:bg-white focus:outline-none focus:shadow-outline">
                            <span>Dropdown</span>
                            <svg viewBox="0 0 20 20"
                                 class="inline w-4 h-4 mt-1 ml-1 transition-transform duration-200 transform fill-current text-green-1000 md:-mt-1 rotate-0">
                                <path fill-rule="evenodd"
                                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                      clip-rule="evenodd">
                                </path>
                            </svg>
                        </button>
                    </div>
                    <div class="relative items-center" x-data="{ open: false }">
                        <button
                            class="flex flex-row items-center w-full px-4 py-2 mt-2 font-semibold text-left text-white transition duration-500 ease-in-out transform bg-transparent text-md md:w-auto md:inline md:mt-0 md:ml-4 hover:text-black focus:text-white hover:bg-white focus:outline-none focus:shadow-outline">
                            <span>Dropdown</span>
                            <svg viewBox="0 0 20 20"
                                 class="inline w-4 h-4 mt-1 ml-1 transition-transform duration-200 transform rotate-0 fill-current text-green-1000 md:-mt-1">
                                <path fill-rule="evenodd"
                                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                      clip-rule="evenodd"></path>
                            </svg>
                        </button>

                    </div>
                    <div class="relative items-center" x-data="{ open: false }">
                        <button
                            class="flex flex-row items-center w-full px-4 py-2 mt-2 font-semibold text-left text-white transition duration-500 ease-in-out transform bg-transparent text-md md:w-auto md:inline md:mt-0 md:ml-4 hover:text-black focus:text-white hover:bg-white focus:outline-none focus:shadow-outline">
                            <span>Dropdown</span>
                            <svg fill="currentColor" viewBox="0 0 20 20"
                                 class="inline w-4 h-4 mt-1 ml-1 transition-transform duration-200 transform rotate-0 fill-current text-green-1000 md:-mt-1">
                                <path fill-rule="evenodd"
                                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                      clip-rule="evenodd"></path>
                            </svg>
                        </button>

                    </div>
                </nav>
            </div>
        </div>
        <section class="bg-black">
            <div class="container flex flex-wrap items-center px-5 py-8 mx-auto">
                <div class="flex items-center justify-center w-full flex-nowrap md:justify-center">
                    <div class="relative w-full lg:mr-2 sm:mr-4">
                        <input type="text" id="footer-field" name="footer-field" placeholder="search"
                               class="w-full px-3 py-4 placeholder-white transition-colors duration-200 ease-in-out bg-transparent border-b itemscenter focus:placeholder-black lg:text-6xl border-pink-1000 outlne-none borde focus:ring-2 focus:bg-pink-1000 focus:ring-blue-1000 focus:border-pink-1000 text-green-1000"/>
                    </div>
                    <button
                        class="z-10 inline-flex items-center px-3 ml-auto font-black transition-colors duration-200 ease-in-out lg:text-7xl text-green-1000 focus:outline-none hover:text-white">
                        <svg class="lg:h-32 lg:w-32 lg:-ml-44" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
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

        <section class="px-5 lg:px-24">

            <div class="container w-full pt-20 pb-10 mx-auto ">
                <div class="bg-white shadow-green">
                    <div class="flex flex-wrap p-4 ">
                        <div class=" lg:w-1/3 sm:w-1/2">
                            <div class="flex h-full">
                                <img alt="gallery" class="object-cover object-center w-full h-full "
                                     src="https://www.shethepeople.tv/wp-content/uploads/2020/12/elon-musk.jpg"/>
                            </div>
                        </div>
                        <div class="lg:w-1/3 md:w-1/2 lg:-mt-12">
                            <a href="#">
                            </a>
                            <div class="flex h-full"><a href="#">
                            </a>
                                <div class="w-full px-8 py-10 bg-green-1000"><a href="#">
                                    <div class="p-4 mb-1 bg-black">
                                        <h1 class="text-5xl font-black leading-none tracking-tighter text-transparent bg-gradient-to-tr from-blue-1000 to-pink-1000 bg-clip-text">
                                            MEL, ON TASK
                                        </h1>
                                    </div>
                                    <h1 class="p-4 mb-3 text-lg font-medium text-white uppercase bg-black">
                                        TECH
                                        <small class="text-xs text-pink-1000 ">
                                            <span class="text-gray-500">BY</span>
                                            Ginger Chris
                                        </small>
                                    </h1>
                                    <p class="my-4 font-medium leading-none tracking-tighter">Because of the large
                                        footprint, it may seem flat, but actually ranges up to 5 stories tall.</p>
                                </a><a href="#"
                                       class="inline-flex items-center p-4 mt-4 font-black text-black text-1xl bg-gradient-to-tr from-blue-1000 to-pink-1000 md:mb-2 lg:mb-0 hover:text-white ">
                                    Read it
                                    <svg class="w-10 h-10 ml-2 -m-32" xmlns="http://www.w3.org/2000/svg"
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
                        <div class="lg:w-1/3 md:w-1/2 lg:-mt-12">
                            <a href="#">
                                <div class="flex h-full">
                                    <div class="w-full px-8 py-10 bg-black">
                                        <div class="mb-1 bg-black">
                                            <h1 class="py-4 text-2xl font-black leading-none tracking-tighter text-transparent uppercase bg-gradient-to-tr from-blue-1000 to-pink-1000 bg-clip-text">
                                                “PROBABLY THE MOST PROGRESSIVE THING THAT WE’VE DONE SINCE 1964”
                                            </h1>
                                        </div>
                                        <h1 class="py-4 mb-3 text-lg font-medium text-white uppercase border-b border-pink-1000">
                                            Cars
                                            <small class="text-xs text-pink-1000 ">
                                                <span class="text-gray-500">BY</span>
                                                DHH
                                            </small>
                                        </h1>
                                        <p class="my-4 font-medium leading-none tracking-tighter text-white">
                                            General Motors debuted a new logo to convey the automaker’s renewed
                                            commitment
                                            to electric vehicles.</p>
                                        <div
                                            class="inline-flex items-center p-4 mt-4 font-black text-white duration-500 ease-in-out border-b text-1xl ransition group-hover:text-black bg-gradient-to-tr from-blue-1000 to-pink-1000 md:mb-2 lg:mb-0 hover:text-blue-1000 ">
                                            Read it
                                            <svg class="w-10 h-10 ml-2 -m-32" xmlns="http://www.w3.org/2000/svg"
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

            <div class="container w-full py-10 mx-auto ">
                <div class="bg-white shadow-green">
                    <div class="flex flex-wrap p-4 ">
                        <div class="lg:w-1/3 md:w-1/2 lg:-mt-12 ">
                            <a href="#">
                            </a>
                            <div class="flex h-full"><a href="#">
                            </a>
                                <div class="w-full px-8 py-10 bg-green-1000"><a href="#">
                                    <div class="p-4 mb-1 bg-black ">
                                        <h1 class="text-5xl font-black leading-none tracking-tighter text-transparent bg-gradient-to-tr from-blue-1000 to-pink-1000 bg-clip-text">
                                            What was was that, then?
                                        </h1>
                                    </div>
                                    <h1 class="p-4 mb-3 text-lg font-medium text-white uppercase bg-black">
                                        food
                                        <small class="text-xs text-pink-1000 ">
                                            <span class="text-gray-500">BY</span>
                                            Mike andreuzza </small>
                                    </h1>
                                    <p class="my-4 font-medium leading-none tracking-tighter">Burger King has
                                        carried
                                        out a comprehensive rebrand to update all elements of its visual identity
                                        with a
                                        design that it
                                        describes as "mouthwatering, big and bold, playfully irreverent and proudly
                                        true.
                                    </p>
                                </a><a href="#"
                                       class="inline-flex items-center p-4 mt-4 font-black text-black text-1xl bg-gradient-to-tr from-blue-1000 to-pink-1000 md:mb-2 lg:mb-0 hover:text-white ">
                                    Read it
                                    <svg class="w-10 h-10 ml-2 -m-32" xmlns="http://www.w3.org/2000/svg"
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
                        <div class="lg:w-1/3 md:w-1/2 lg:-mt-12 ">
                            <a href="#">
                                <div class="flex h-full">
                                    <div class="w-full px-8 py-10 bg-black">
                                        <div class="mb-1 bg-black">
                                            <h1 class="py-4 text-2xl font-black leading-none tracking-tighter text-transparent uppercase bg-gradient-to-tr from-blue-1000 to-pink-1000 bg-clip-text">
                                                Lime unveils next-gen scooter as it continues to inch toward
                                                profitability,
                                                so you know
                                            </h1>
                                        </div>
                                        <h1 class="py-4 mb-3 text-lg font-medium text-white uppercase border-b border-pink-1000">
                                            Scooters
                                            <small class="text-xs text-pink-1000 ">
                                                <span class="text-gray-500">BY</span>
                                                Jack Sparrow </small>
                                        </h1>
                                        <p class="my-4 font-medium leading-none tracking-tighter text-white">
                                            Lime unveiled its fourth-generation electric scooter with a swappable
                                            battery
                                            and enhanced safety features. The company
                                            also announced it was “cash flow positive” in the third quarter of 2020.</p>
                                        <div
                                            class="inline-flex items-center p-4 mt-4 font-black text-white duration-500 ease-in-out border-b text-1xl ransition group-hover:text-black bg-gradient-to-tr from-blue-1000 to-pink-1000 md:mb-2 lg:mb-0 hover:text-blue-1000 ">
                                            Read it
                                            <svg class="w-10 h-10 ml-2 -m-32" xmlns="http://www.w3.org/2000/svg"
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
                        <div class=" lg:w-1/3 sm:w-1/2">
                            <div class="flex h-full">
                                <img alt="gallery" class="object-cover object-center w-full h-full "
                                     src="https://cdn.vox-cdn.com/thumbor/WF8o9kZbcn0YYoc813ahCDU54_Q=/0x0:3500x2412/920x613/filters:focal(1470x926:2030x1486):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/67818577/Lime_Gen4.0.jpg"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="container px-5 mx-auto text-white bg-black lg:py-10 lg:px-20 shadow-green body-font">
                <a href="#">
                </a>
                <div class="flex flex-col w-full mb-10 text-center "><a href="#">
                    <h1 class="mb-4 text-5xl font-black leading-none tracking-tighter text-white lg:text-8xl md:text-4xl">
                        <span class="italic">2020 in images</span>
                    </h1>
                    <p class="mx-auto text-xl font-normal leading-relaxed text-white lg:w-2/3">
                        We have put the most interesting news togheter in images, chechk it out.
                    </p>
                </a><a href="#"
                       class="inline-flex items-center p-4 mx-auto mt-4 font-black text-white duration-500 ease-in-out border-b bg-green-1000 text-1xl ransition md:mb-2 lg:mb-0 hover:text-pink-1000 ">
                    Read it
                    <svg class="w-10 h-10 ml-2 -m-32" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20"
                         height="20" fill="currentColor">
                        <path fill="none" d="M0 0h24v24H0z"></path>
                        <path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z">
                        </path>
                    </svg>
                </a>
                </div>

            </div>

            <div class="container w-full py-10 mx-auto ">
                <div class="bg-white shadow-green">
                    <div class="flex flex-wrap p-4">
                        <div class="w-full border-2 border-white lg:w-1/2">
                            <a href="#">
                                <div class="flex h-full">
                                    <div
                                        class="w-full px-8 py-10 transition duration-500 ease-in-out bg-black hover:bg-white group">
                                        <div class="mb-1">
                                            <h1 class="py-4 text-2xl font-black leading-none tracking-tighter text-transparent uppercase bg-gradient-to-tr from-blue-1000 to-pink-1000 bg-clip-text">
                                                Lime unveils next-gen scooter as it continues to inch toward
                                                profitability,
                                                so you know
                                            </h1>
                                        </div>
                                        <h1 class="py-4 mb-3 text-lg font-medium text-white uppercase transition duration-500 ease-in-out border-b group-hover:text-black border-pink-1000">
                                            Scooters
                                            <small class="text-xs text-pink-1000 ">
                                                <span class="text-gray-500">BY</span>
                                                Jack Sparrow </small>
                                        </h1>
                                        <div
                                            class="inline-flex items-center p-4 mt-4 font-black text-white duration-500 ease-in-out border-b text-1xl ransition group-hover:text-black bg-gradient-to-tr from-blue-1000 to-pink-1000 md:mb-2 lg:mb-0 hover:text-blue-1000 ">
                                            Read it
                                            <svg class="w-10 h-10 ml-2 -m-32" xmlns="http://www.w3.org/2000/svg"
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
                        <div class="w-full border-2 border-white lg:w-1/2">
                            <a href="#">
                                <div class="flex h-full">
                                    <div
                                        class="w-full px-8 py-10 transition duration-500 ease-in-out bg-black hover:bg-white group">
                                        <div class="mb-1">
                                            <h1 class="py-4 text-2xl font-black leading-none tracking-tighter text-transparent uppercase bg-gradient-to-tr from-blue-1000 to-pink-1000 bg-clip-text">
                                                Lime unveils next-gen scooter as it continues to inch toward
                                                profitability,
                                                so you know
                                            </h1>
                                        </div>
                                        <h1 class="py-4 mb-3 text-lg font-medium text-white uppercase transition duration-500 ease-in-out border-b group-hover:text-black border-pink-1000">
                                            Scooters
                                            <small class="text-xs text-pink-1000 ">
                                                <span class="text-gray-500">BY</span>
                                                Jack Sparrow </small>
                                        </h1>
                                        <div
                                            class="inline-flex items-center p-4 mt-4 font-black text-white duration-500 ease-in-out border-b text-1xl ransition group-hover:text-black bg-gradient-to-tr from-blue-1000 to-pink-1000 md:mb-2 lg:mb-0 hover:text-blue-1000 ">
                                            Read it
                                            <svg class="w-10 h-10 ml-2 -m-32" xmlns="http://www.w3.org/2000/svg"
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
                        <div class="w-full border-2 border-white lg:w-1/2">
                            <a href="#">
                                <div class="flex h-full">
                                    <div
                                        class="w-full px-8 py-10 transition duration-500 ease-in-out bg-black hover:bg-white group">
                                        <div class="mb-1">
                                            <h1 class="py-4 text-2xl font-black leading-none tracking-tighter text-transparent uppercase bg-gradient-to-tr from-blue-1000 to-pink-1000 bg-clip-text">
                                                Lime unveils next-gen scooter as it continues to inch toward
                                                profitability,
                                                so you know
                                            </h1>
                                        </div>
                                        <h1 class="py-4 mb-3 text-lg font-medium text-white uppercase transition duration-500 ease-in-out border-b group-hover:text-black border-pink-1000">
                                            Scooters
                                            <small class="text-xs text-pink-1000 ">
                                                <span class="text-gray-500">BY</span>
                                                Jack Sparrow </small>
                                        </h1>
                                        <div
                                            class="inline-flex items-center p-4 mt-4 font-black text-white duration-500 ease-in-out border-b text-1xl ransition group-hover:text-black bg-gradient-to-tr from-blue-1000 to-pink-1000 md:mb-2 lg:mb-0 hover:text-blue-1000 ">
                                            Read it
                                            <svg class="w-10 h-10 ml-2 -m-32" xmlns="http://www.w3.org/2000/svg"
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
                        <div class="w-full border-2 border-white lg:w-1/2">
                            <a href="#">
                                <div class="flex h-full">
                                    <div
                                        class="w-full px-8 py-10 transition duration-500 ease-in-out bg-black hover:bg-white group">
                                        <div class="mb-1">
                                            <h1 class="py-4 text-2xl font-black leading-none tracking-tighter text-transparent uppercase bg-gradient-to-tr from-blue-1000 to-pink-1000 bg-clip-text">
                                                Lime unveils next-gen scooter as it continues to inch toward
                                                profitability,
                                                so you know
                                            </h1>
                                        </div>
                                        <h1 class="py-4 mb-3 text-lg font-medium text-white uppercase transition duration-500 ease-in-out border-b group-hover:text-black border-pink-1000">
                                            Scooters
                                            <small class="text-xs text-pink-1000 ">
                                                <span class="text-gray-500">BY</span>
                                                Jack Sparrow </small>
                                        </h1>
                                        <div
                                            class="inline-flex items-center p-4 mt-4 font-black text-white duration-500 ease-in-out border-b text-1xl ransition group-hover:text-black bg-gradient-to-tr from-blue-1000 to-pink-1000 md:mb-2 lg:mb-0 hover:text-blue-1000 ">
                                            Read it
                                            <svg class="w-10 h-10 ml-2 -m-32" xmlns="http://www.w3.org/2000/svg"
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

        <footer class="bg-black border-t border-gray-900 body-font">
            <div class="container px-5 mx-auto text-white bg-black lg:py-10 body-font">
                <div class="flex flex-col w-full mb-10 text-center ">
                    <span
                        class="my-20 mb-4 text-5xl font-black leading-relaxed tracking-tighter text-white transform skew-x-12 lg:text-18xl md:text-4xl ">
                        <a href="./inex.html" class="text-white hover:text-green-1000">HOME</a>
                        <br/>
                    </span>
                    <span
                        class="my-20 mb-4 text-5xl font-black leading-relaxed tracking-tighter text-white transform skew-y-12 lg:text-18xl md:text-4xl">
                        <a href="/blog" class="text-white hover:text-green-1000">BLOG</a>
                    </span>
                    <span
                        class="my-20 mb-4 text-5xl font-black leading-relaxed tracking-tighter text-white transform skew-x-12 lg:text-18xl md:text-4xl">
                        <a href="/about" class="text-white hover:text-green-1000 ">ABOUT</a>
                    </span>
                </div>
            </div>
            <div class="bg-black border-t border-gray-900 body-font">
                <div class="container flex flex-col items-center px-5 py-10 mx-auto lg:py-8 sm:flex-row">
                    <a href="#"
                       class="text-lg font-semibold rounded-lg tracking-widestuppercase focus:outline-none focus:shadow-outline">
                        <h1 class="text-2xl font-bold tracking-tighter text-white uppercase lg:text-3xl">
                            WickedTemplates
                            <span class="text-xs">©</span>
                        </h1>
                    </a>
                    <span class="inline-flex justify-center mt-4 sm:ml-auto sm:mt-0 sm:justify-start">
                        <a class="ml-3 text-white">
                            <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                 class="w-5 h-5" viewBox="0 0 24 24">
                                <path
                                    d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z">
                                </path>
                            </svg>
                        </a>
                    </span>
                </div>
            </div>
        </footer>


        </body>)
}