import React, { Component } from 'react';
import MDBFullCalendar from 'mdb-react-calendar';
import { addHours, addDays, addWeeks, startOfWeek } from 'date-fns';

const today = new Date();

class FullCalendar extends Component {
    state = {
        tasks: [
            {
                id: 'task1',
                title: 'Frankfurt delegation',
                startDate: addHours(addDays(today, 0), 8),
                endDate: addHours(addDays(today, 2), 20),
                color: 'danger'
            },
            {
                id: 'task2',
                title: 'Front end conference',
                startDate: addWeeks(today, 1),
                endDate: addDays(addWeeks(today, 1), 2),
                color: 'success'
            },
            {
                id: 'task3',
                title: 'Feedback',
                startDate: addHours(addDays(startOfWeek(addWeeks(today, 0)), 3), 10),
                endDate: addHours(addDays(startOfWeek(addWeeks(today, 0)), 3), 14),
                color: 'primary'
            },
            {
                id: 'task4',
                title: 'Daily coding challenge',
                startDate: addDays(startOfWeek(addWeeks(today, 0)), 1),
                endDate: addDays(startOfWeek(addWeeks(today, 0)), 8),
                color: 'warning'
            },
            {
                id: 'task5',
                title: 'Meeting',
                startDate: addHours(addDays(startOfWeek(addWeeks(today, 1)), 1), 10),
                endDate: addHours(addDays(startOfWeek(addWeeks(today, 1)), 1), 14),
                color: 'info'
            },
            {
                id: 'task6',
                title: 'Vocation',
                startDate: addDays(startOfWeek(addWeeks(today, 2)), 1),
                endDate: addDays(startOfWeek(addWeeks(today, 2)), 6),
                color: 'secondary'
            }
        ]
    }

    render() {
        return (
            <MDBFullCalendar tasks={this.state.tasks} />
        )
    }
}


export default FullCalendar;