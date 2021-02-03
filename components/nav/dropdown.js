export default function DropDown() {
    return (

        <div className="relative items-center" x-data="{ open: false }">
            <button
                className="flex flex-row items-center w-full px-4 py-2 mt-2 font-semibold text-left text-white transition duration-500 ease-in-out transform bg-transparent text-md md:w-auto md:inline md:mt-0 md:ml-4 hover:text-black focus:text-white hover:bg-cream focus:outline-none focus:shadow-outline">
                <span>Dropdown</span>
                <svg viewBox="0 0 20 20"
                     className="inline w-4 h-4 mt-1 ml-1 transition-transform duration-200 transform rotate-0 fill-current text-green md:-mt-1">
                    <path fillRule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clipRule="evenodd"></path>
                </svg>
            </button>

        </div>

    )
}