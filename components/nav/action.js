import Link from 'next/link'

export default function MenuAction({title, href}) {
    return (
        <Link href={href}>
            <a className="px-4 py-2 mt-2 text-sm font-semibold tracking-tighter text-white transition duration-500 ease-in-out transform bg-transparent bg-opacity-20 md:mt-0 md:ml-4 hover:text-black focus:text-white hover:bg-cream focus:outline-none focus:shadow-outline">
                {title}
            </a>
        </Link>
    )
}