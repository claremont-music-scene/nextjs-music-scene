
export default function CardRowWithShadowContainer({children}) {
    return (
        <div className="container w-full pt-20 pb-10 mx-auto ">
            <div className="bg-cream shadow-orange">
                <div className="flex flex-wrap p-4 ">
                    {children}
                </div>
            </div>
        </div>
    )
}