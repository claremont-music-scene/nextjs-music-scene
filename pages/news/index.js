import Head from 'next/head'
import Link from 'next/link'
import HeaderSocialLinks from "../../components/header-social-links"
import Nav from "../../components/nav";
import Footer from "../../components/footer";

// TODO
// restore inline styles
// handle srcset
// move  sidebar to components
// restore head elements

export default function News() {
    return (
        <div id="wrapper">
            <div id="main">
                <div className="inner">
                    <HeaderSocialLinks/>
                    <p className="nav navmenu"><span><a
                        href="/">Home</a> &nbsp; &nbsp;</span></p>
                    <section>
                        <header className="main"><h2>Notes from the Scene</h2></header>
                        <div className="posts">
                            <article><Link href="/news/claremont-music-scene-facebook-group/"><a
                                        className="image"><img srcSet="/news/claremont-music-scene-facebook-group/FB_Group_1.6_1_hu8a0b86479a2cf92a6abcd15b6beb8981_93934_320x0_resize_box_2.png 320w,
/news/claremont-music-scene-facebook-group/FB_Group_1.6_1_hu8a0b86479a2cf92a6abcd15b6beb8981_93934_640x0_resize_box_2.png 640w,
/news/claremont-music-scene-facebook-group/FB_Group_1.6_1_hu8a0b86479a2cf92a6abcd15b6beb8981_93934_768x0_resize_box_2.png 768w,
/news/claremont-music-scene-facebook-group/FB_Group_1.6_1_hu8a0b86479a2cf92a6abcd15b6beb8981_93934_1024x0_resize_box_2.png 1024w,
/news/claremont-music-scene-facebook-group/FB_Group_1.6_1_hu8a0b86479a2cf92a6abcd15b6beb8981_93934_1366x0_resize_box_2.png 1366w,
/news/claremont-music-scene-facebook-group/FB_Group_1.6_1_hu8a0b86479a2cf92a6abcd15b6beb8981_93934_1600x0_resize_box_2.png 1600w,
/news/claremont-music-scene-facebook-group/FB_Group_1.6_1_hu8a0b86479a2cf92a6abcd15b6beb8981_93934_1920x0_resize_box_2.png 1920w"
                                                               sizes="(min-width: 30em) 43vw, 95vw"
                                                               src="/news/claremont-music-scene-facebook-group/FB_Group_1.6_1_hu8a0b86479a2cf92a6abcd15b6beb8981_93934_640x0_resize_box_2.png"/></a></Link>
                                <h3><Link href="/news/claremont-music-scene-facebook-group/"><a>Facebook
                                    Group for Community Discussions</a></Link></h3><h4>
                                    <Link href="/news/claremont-music-scene-facebook-group/"><a>To
                                        help spur discussion and ideas, a Facebook Group is now available</a></Link></h4>
                            </article>
                            <article><Link href="/news/interview-with-miss-claremont/"
                                        className="image"><a><img srcSet="/news/interview-with-miss-claremont/Interview_promo_1.6_1_hue4140335c56bd49afa27d5257752f4ad_976176_320x0_resize_box_2.png 320w,
/news/interview-with-miss-claremont/Interview_promo_1.6_1_hue4140335c56bd49afa27d5257752f4ad_976176_640x0_resize_box_2.png 640w,
/news/interview-with-miss-claremont/Interview_promo_1.6_1_hue4140335c56bd49afa27d5257752f4ad_976176_768x0_resize_box_2.png 768w,
/news/interview-with-miss-claremont/Interview_promo_1.6_1_hue4140335c56bd49afa27d5257752f4ad_976176_1024x0_resize_box_2.png 1024w,
/news/interview-with-miss-claremont/Interview_promo_1.6_1_hue4140335c56bd49afa27d5257752f4ad_976176_1366x0_resize_box_2.png 1366w,
/news/interview-with-miss-claremont/Interview_promo_1.6_1_hue4140335c56bd49afa27d5257752f4ad_976176_1600x0_resize_box_2.png 1600w,
/news/interview-with-miss-claremont/Interview_promo_1.6_1_hue4140335c56bd49afa27d5257752f4ad_976176_1920x0_resize_box_2.png 1920w"
                                                               sizes="(min-width: 30em) 43vw, 95vw"
                                                                  src="/news/interview-with-miss-claremont/Interview_promo_1.6_1_hue4140335c56bd49afa27d5257752f4ad_976176_640x0_resize_box_2.png"/></a></Link>
                                <h3><Link href="/news/interview-with-miss-claremont/"><a>Interview
                                    with Miss Claremont</a></Link></h3><h4>
                                    <Link href="/news/interview-with-miss-claremont/"><a>A
                                        Discussion About the Founding and Philosophy of Claremont Music Scene</a></Link></h4>
                            </article>
                        </div>
                    </section>
                </div>
            </div>
            <div id="sidebar" className="inactive">
                <div className="inner">
                    <Nav/>
                    <Footer/>
                </div>
                <a href="#sidebar" className="toggle">Toggle</a></div>
        </div>
    )
}
