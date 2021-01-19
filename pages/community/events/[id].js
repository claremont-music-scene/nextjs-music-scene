import SingleColumnLayout from '../../../components/layouts/single-column';
import Event from '../../../components/events/event';
import { fetcher } from '../../../util/crud';
import data from '../../../tempdata/events.json'; // temporary data

const { events } = data; // temporary data

export async function getStaticProps({ params }) {
    // const ev = await fetcher('https://music-scene-api.herokuapp.com/api/events/items/' + params.id);
    const ev = events.find(e => e.id == params.id); // temporary data
    return { props: { ev } };
}

export async function getStaticPaths() {
    // const evs = await fetcher('https://music-scene-api.herokuapp.com/api/events/items');
    const evs = events;

    return {
        paths: evs.map(ev => ({
            params: {
                id: ev.id.toString()
            }
        })),
        fallback: false
    };
}

const EventPage = ({ ev }) => (
    <SingleColumnLayout>
        <Event e={ev} />
    </SingleColumnLayout>
);

export default EventPage;