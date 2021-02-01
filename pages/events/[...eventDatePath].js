import Event from '../../components/events/event';
import {apiGetter} from "../../util/server";
import {getEventOccurrenceApiPath, getEventPathParts} from "../../util/events";
import SectionPageLayout from "../../components/layouts/section-page";
import ContainerWithShadow from "../../components/layouts/container-with-shadow";


export async function getStaticProps({params}) {
    const occurrence = await apiGetter(getEventOccurrenceApiPath(params.eventDatePath))
    return {props: {occurrence}};
}

export async function getStaticPaths() {
    const events = await apiGetter('/events/occurrence/')
    return {
        paths: events.map(event => ({
            params: {
                eventDatePath: getEventPathParts(event)
            }
        })),
        fallback: false
    };
}

const EventPage = ({occurrence}) => (
    <SectionPageLayout title={`${occurrence.title} | Events`}>
        <ContainerWithShadow>
            <Event event={occurrence}/>
        </ContainerWithShadow>
    </SectionPageLayout>
)

export default EventPage;