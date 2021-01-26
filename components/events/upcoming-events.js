import EventCard from "./event-card";
import ContainerWithShadow from "../layouts/container-with-shadow";

export default function UpcomingEvents({events}) {
    return (
            <ContainerWithShadow>
                <div className="-mt-8 divide-y-2 divide-gray-100">
                    {events.map(e => <EventCard event={e}/> )}
                </div>
            </ContainerWithShadow>
    )
}