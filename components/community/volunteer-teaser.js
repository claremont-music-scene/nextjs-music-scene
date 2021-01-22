import Link from "next/link";

export default function VolunteerTeaser() {
    return (<>
        <h3>Want to Help?</h3>
        <span className="image left"><img src="/images/Logo-black-and-white-no-text-110x75px.png"/></span>
        <p>Have ideas? Like
        meeting
        people?
        Enjoy writing? Like event planning? Have some extra space for
        people to use? A philanthropic itch?</p><p>Get more information about volunteering with
        Claremont Music
        Scene. <Link href="/community/volunteering/" className="button primary large icon solid fa-hands-helping"><a>I'm a Helper!</a></Link>
        </p>
    </>)
}