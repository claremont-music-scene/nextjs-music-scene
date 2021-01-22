import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
dayjs.extend(utc)

export const getEventPathParts = event => {
    const ed = dayjs(event.start).utc()
    return [
        event.event_id.toString(),
        ed.year().toString(),
        (ed.month() + 1).toString(),
        ed.date().toString(),
        ed.hour().toString(),
        ed.minute().toString(),
        ed.second().toString()
    ]
}

export const getSiteEventPath = event => (getEventPathParts(event).join('/'))

export const getEventOccurrenceApiPath = params => {
    const [eventId, year, month, day, hour, minute, second] = params
    const queryParams = new URLSearchParams({year, month, day, hour, minute, second})
    return `/events/occurrence/${eventId}/?${queryParams}`
}