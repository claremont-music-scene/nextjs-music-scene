import SingleColumnLayout from "../../../components/layouts/single-column";
import EventList from '../../../components/events/event-list';
//import data from '../../../tempdata/events.json'; // temporary data
import dayjs from 'dayjs';
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter';
import {apiGetter} from "../../../util/server";

dayjs.extend(isSameOrAfter);

//const { events } = data, // temporary data
//    currentEvents = events.filter(e => dayjs(e.start_date).isSameOrAfter(dayjs())).sort((a, b) => dayjs(a.start_date) - dayjs(b.start_date));

export async function getStaticProps() {
    const events = await apiGetter('/events/occurrence/')
    return { props: { events } };
}

export default function EventDisplay({ events }) {
    // const { data, error } = useSWR('https://music-scene-api.herokuapp.com/api/events/items/', fetcher, { initialData: props.events });

    // if (error) return <div>failed to load</div>
    // if (!data) return <div>loading...</div>

    return (
        <SingleColumnLayout>
            <EventList events={events} />
        </SingleColumnLayout>
    );
}