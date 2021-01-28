import Event from '../../../components/events/event';
import {apiGetter} from "../../../util/server";
import {getEventOccurrenceApiPath, getEventPathParts} from "../../../util/events";
import SectionPageLayout from "../../../components/layouts/section-page";


export async function getStaticProps({params}) {
    const occurrence = await apiGetter(getEventOccurrenceApiPath(params.eventDatePath))
    return {props: {occurrence}};
}

export async function getStaticPaths() {
    const evs = await apiGetter('/events/occurrence/')
    return {
        paths: evs.map(ev => ({
            params: {
                eventDatePath: getEventPathParts(ev)
            }
        })),
        fallback: false
    };
}

const EventPage = ({occurrence}) => (
    <SectionPageLayout>
        <Event e={occurrence}/>
    </SectionPageLayout>
);

export default EventPage;