import ResponsiveImgSet from '../components/responsive-img-set'

export default function ResponsiveImgTest() {
    return (
        <section>
            <div className='row blast'>
                <p>To test auto-loading different sizes:</p>
                <ol>
                    <li>Use responsive dev tools, starting with a small width</li>
                    <li>You might need to clear your cache to force your browser to fetch new images. It'll use cached images if it can, even if they're bigger than needed.</li>
                    <li>Watch the Network tab as you drag to make the screen wider. Larger renditions will load automatically.</li>
                </ol>
                <p>Note that starting with a wide screen and making it narrower will not load smaller images.
                New (larger) sizes are only loaded to avoid low-quality. To load smaller sizes, you need to clear your cache.</p>
            </div>
            <div className='row'>
                <div className='col-3'>
                    <ResponsiveImgSet filename='cairn.jpg' sizeSet='small' />
                </div>
                <div className='col-9'>
                    <ResponsiveImgSet filename='cairn.jpg' sizeSet='mid' />
                </div>
            </div>
            <div className='row'>
                <div className='col-12'>
                    <ResponsiveImgSet filename='vinyl.png' /> {/* default is sizeSet='full' */}
                </div>
            </div>

            <style jsx>{`
                .blast {
                    background-color: pink;
                    font-size: 1.5em;
                    padding 20px 50px;
                }
            `}</style>
        </section>
    )
}
