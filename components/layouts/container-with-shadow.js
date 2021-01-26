
export default function ContainerWithShadow({children}) {
    return (
        <div className="container w-full pt-20 pb-10 mx-auto">
            <div className="bg-cream shadow-orange p-4">
                    {children}
            </div>
        </div>
    )
}