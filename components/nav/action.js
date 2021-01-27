import Link from 'next/link'

export default function MenuAction({title, href, hoverBg = 'cream'}) {
    const style = `px-4 py-2 mt-2 text-sm font-semibold tracking-tighter text-white transition duration-500 ease-in-out transform bg-transparent bg-opacity-20 md:mt-0 md:ml-4 hover:text-black focus:text-white hover:bg-${hoverBg} focus:outline-none focus:shadow-outline`
    return (
        <Link href={href}>
            <a className={style}>
                {title}
            </a>
        </Link>
    )
}