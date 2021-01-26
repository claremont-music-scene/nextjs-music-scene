export default function ResponsiveImgSet({ filename, sizeSet = 'full' }) {
    const sizes = {

        // we can fine-tune these and/or make new sets as needed
        
        full: require(`images/${filename}?resize
            &sizes[]=200
            &sizes[]=300
            &sizes[]=600
            &sizes[]=1000
        `),

        mid: require(`images/${filename}?resize
            &sizes[]=100
            &sizes[]=200
            &sizes[]=400
            &sizes[]=750
        `),

        small: require(`images/${filename}?resize
            &sizes[]=50
            &sizes[]=100
            &sizes[]=200
            &sizes[]=400
        `)
    }

    return (
        <div className='image-container'>
            <img srcSet={sizes[sizeSet].srcSet}
                src={sizes[sizeSet].src} />

            {/* temp style */}
            <style jsx>{`
                .image-container img {
                    width: 100%;
                    }
            `}</style>
        </div>
    )
}