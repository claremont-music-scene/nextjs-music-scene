import EventList from '../../../components/events/event-list';
import dayjs from 'dayjs';
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter';
import {apiGetter} from "../../../util/server";
import SectionPageLayout from "../../../components/layouts/section-page";

dayjs.extend(isSameOrAfter);

export async function getStaticProps() {
    const events = await apiGetter('/events/occurrence/')
    return { props: { events } };
}

export default function EventDisplay({ events }) {
    // const { data, error } = useSWR('https://music-scene-api.herokuapp.com/api/events/items/', fetcher, { initialData: props.events });

    // if (error) return <div>failed to load</div>
    // if (!data) return <div>loading...</div>

    return (
        <SectionPageLayout>
            <EventList events={events} />
        </SectionPageLayout>
    );
}