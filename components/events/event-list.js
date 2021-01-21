import EventGroup from './event-group';
import dayjs from 'dayjs';
import isBetween from 'dayjs/plugin/isBetween';
dayjs.extend(isBetween);


export default function EventList({ events }) {
    /*
    const today = dayjs(),
        tomorrow = today.add(1, 'd'),
        weekNext = today.add(1, 'w'),
        weekAfterNext = today.add(2, 'w'),
        monthEnd = today.endOf('month'),
        startOf = e => dayjs(e.start_date),

        eToday = events.filter(e => startOf(e).isSame(today)),
        eTomorrow = events.filter(e => startOf(e).isSame(tomorrow)),
        eThisWeek = events.filter(e => startOf(e).isBetween(tomorrow, weekNext, null, '[)')),
        eNextWeek = events.filter(e => startOf(e).isBetween(weekNext, weekAfterNext, null, '[)')),
        eThisMonth = weekAfterNext.month === today.month ? events.filter(e => startOf(e).isBetween(weekAfterNext, monthEnd, null, '[)'))
            : weekNext.month === today.month ? events.filter(e => startOf(e).isBetween(weekNext, monthEnd, null, '[)'))
                : events.filter(e => startOf(e).isBetween(today, monthEnd, null, '[)')),
        eFuture = events.filter(e => startOf(e).isAfter(monthEnd)),

        eventsByMonth = events => {
            const groups = {};

            for (let e of events) {
                const eMonthString = dayjs((startOf(e).month() + 1) + '-1-' + startOf(e).year()).format('MMMM YYYY');

                if (groups.hasOwnProperty(eMonthString)) {
                    groups[eMonthString].push(e);
                }
                else {
                    groups[eMonthString] = [e];
                }
            }

            return groups;
        },

        futureByMonth = eventsByMonth(eFuture);

     */

    return (
        <div>
            <h1>Current Events</h1>
            <EventGroup events={events} heading={'Some Events'}/>
        </div>
    );
}