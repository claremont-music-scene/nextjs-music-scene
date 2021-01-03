import SingleColumnLayout from "../../../components/layouts/single-column";
import EventList from '../../../components/events/event-list';
import { fetcher } from '../../../util/crud';
import useSWR from 'swr';

import data from '../../../tempdata/events.json';

const { events } = data,
    today = (new Date()).valueOf(),
    currentEvents = events.filter(e => new Date(e.start_date).valueOf() >= today)
        .sort((a, b) => new Date(a.start_date).valueOf() - new Date(b.start_date).valueOf());

export async function getStaticProps() {
    // const events = await fetcher('https://music-scene-api.herokuapp.com/api/events/items/');
    return { props: { currentEvents } };
}

export default function EventDisplay({ currentEvents }) {
    console.log('🚀 ~ EventDisplay ~ currentEvents', currentEvents);
    // const { data, error } = useSWR('https://music-scene-api.herokuapp.com/api/events/items/', fetcher, { initialData: props.events });

    // if (error) return <div>failed to load</div>
    // if (!data) return <div>loading...</div>

    return (
        <SingleColumnLayout>
            <EventList events={currentEvents} />
        </SingleColumnLayout>
    );
}