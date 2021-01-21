import SingleColumnLayout from '../../../components/layouts/single-column';
import Event from '../../../components/events/event';
import {apiGetter} from "../../../util/server";


export async function getStaticProps({ params }) {
    //const ev = await fetcher('https://music-scene-api.herokuapp.com/api/events/items/' + params.id);
    // TODO date query params
    const occurrence = await apiGetter(`/events/occurrence/${params.id}`, )

    //const ev = events.find(e => e.id == params.id); // temporary data
    return { props: { occurrence } };
}

export async function getStaticPaths() {
    // const evs = await fetcher('https://music-scene-api.herokuapp.com/api/events/items');
    const evs = await apiGetter('/events/occurrence')
    //const evs = events;

    return {
        paths: evs.map(ev => ({
            params: {
                id: ev.id.toString()
            }
        })),
        fallback: false
    };
}

const EventPage = ({ occurrence }) => (
    <SingleColumnLayout>
        <Event e={occurrence} />
    </SingleColumnLayout>
);

export default EventPage;