import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import 'moment/locale/ru'
import myEventsList from './events'
import 'react-big-calendar/lib/css/react-big-calendar.css';


// Setup the localizer by providing the moment (or globalize) Object
// to the correct localizer.
const localizer = momentLocalizer(moment)


const ReactBigCalendar = props => (
    <div>
        <Calendar
            localizer={localizer}
            culture='ru-RU'
            events={myEventsList}
            defaultView="month"
            startAccessor="start"
            style={{ height: "70vh" }}
            endAccessor="end"

        />
    </div>
)
export default ReactBigCalendar;