import EventList from '../../components/events/event-list';
import dayjs from 'dayjs';
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter';
import {apiGetter} from "../../util/server";
import SectionPageLayout from "../../components/layouts/section-page";
import SectionWithHeader from "../../components/layouts/section-with-header";
import Head from "next/head";

dayjs.extend(isSameOrAfter);

export async function getStaticProps() {
    const events = await apiGetter('/events/occurrence/')
    return {props: {events}};
}

export default function EventDisplay({events}) {
    return (
        <SectionPageLayout title="Music Events Calendar">
            <SectionWithHeader header={'Upcoming Events'}>
                <EventList events={events}/>
            </SectionWithHeader>
        </SectionPageLayout>
    )
}