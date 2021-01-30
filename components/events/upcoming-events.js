import EventCard from "./event-card";
import ContainerWithShadow from "../layouts/container-with-shadow";
import SectionPageLayout from "../layouts/section-page";
import SectionWithHeader from "../layouts/section-with-header";

export default function UpcomingEvents({events}) {
    return (
        <SectionWithHeader header="Upcoming Events">
            <div className="divide-y-2 divide-red">
                {events.map(e => <EventCard event={e}/>)}
            </div>
        </SectionWithHeader>
    )
}