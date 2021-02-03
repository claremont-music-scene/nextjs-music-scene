
export default function ContainerWithShadow({children}) {
    return (
        <div className="container w-full pb-10 mx-auto">
            <div className="bg-black shadow-orange p-4">
                    {children}
            </div>
        </div>
    )
}