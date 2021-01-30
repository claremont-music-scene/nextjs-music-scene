import ContainerWithShadow from "./container-with-shadow";

export default function SectionWithHeader({header, children}) {
    return (
        <>
            <h2 className="text-cream text-3xl p-4">{header}</h2>
            <ContainerWithShadow>
                {children}
            </ContainerWithShadow>
        </>
    )
}