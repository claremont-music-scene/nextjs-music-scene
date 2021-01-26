import {citrusDreams} from './themes'

export default function CategoryAndDescriptionCard({
   headline,
   description,
   category,
   author,
   theme = {}
}) {
    for (let prop in citrusDreams) {
        if (!theme.hasOwnProperty(prop)) {
            theme[prop] = citrusDreams[prop];
        }
    }
    const cardStyle = `w-full px-8 py-10 bg-${theme.bgColor}`
    const headlineStyle = `text-xl font-teal leading-none tracking-tighter text-transparent bg-gradient-to-tr from-${theme.bgGradientFrom} to-${theme.bgGradientTo} bg-clip-text`
    const headlineBgStyle = `p-4 mb-1 bg-${theme.headlineBgColor}`
    const descriptionStyle = `my-4 font-medium leading-none tracking-tighter text-${theme.descriptionColor}`
    return (
        <div className="lg:w-1/3 md:w-1/2 lg:-mt-12">

            <div className="flex h-full">

                <div className={cardStyle}>
                    <a href="#">
                        <div className={headlineBgStyle}>
                            <h1 className={headlineStyle}>
                                {headline}
                            </h1>
                        </div>
                        <h1 className="p-4 mb-3 text-lg font-medium text-white uppercase bg-black">
                            {category}
                            <small className="text-xs text-red ">
                                <span className="text-gray-500">BY</span>
                                {author}
                            </small>
                        </h1>
                        <p className={descriptionStyle}>{description}</p>
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