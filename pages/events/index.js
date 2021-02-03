import {apiGetter} from "../../util/server";
import SectionPageLayout from "../../components/layouts/section-page";
import UpcomingEvents from "../../components/events/upcoming-events";


export async function getStaticProps() {
    const events = await apiGetter('/events/occurrence/')
    return {props: {events}};
}

export default function EventDisplay({events}) {
    return (
        <SectionPageLayout title="Music Events Calendar">
            <UpcomingEvents events={events}/>
        </SectionPageLayout>
    )
}