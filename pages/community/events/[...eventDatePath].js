import SingleColumnLayout from '../../../components/layouts/single-column';
import Event from '../../../components/events/event';
import {apiGetter} from "../../../util/server";
import {getEventOccurrenceApiPath, getEventPathParts} from "../../../util/events";


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
    <SingleColumnLayout>
        <Event e={occurrence}/>
    </SingleColumnLayout>
);

export default EventPage;