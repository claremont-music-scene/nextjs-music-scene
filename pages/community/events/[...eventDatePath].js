import SingleColumnLayout from '../../../components/layouts/single-column';
import Event from '../../../components/events/event';
import {apiGetter} from "../../../util/server";
import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
dayjs.extend(utc)


export async function getStaticProps({params}) {
    const [eventId, year, month, day, hour, minute, second] = params.eventDatePath
    const queryParams = new URLSearchParams({year, month, day, hour, minute, second})
    const occurrence = await apiGetter(`/events/occurrence/${eventId}/?${queryParams}`)
    return {props: {occurrence}};
}

export async function getStaticPaths() {

    const evs = await apiGetter('/events/occurrence/')

    const paths = evs.map(ev => {
        const ed = dayjs(ev.start).utc()
        return {
            params: {
                eventDatePath: [
                    ev.event_id.toString(),
                    ed.year().toString(),
                    (ed.month() + 1).toString(),
                    ed.date().toString(),
                    ed.hour().toString(),
                    ed.minute().toString(),
                    ed.second().toString()
                ]
            }
        }
    })
    return {
        paths: paths,
        fallback: false
    };
}

const EventPage = ({occurrence}) => (
    <SingleColumnLayout>
        <Event e={occurrence}/>
    </SingleColumnLayout>
);

export default EventPage;