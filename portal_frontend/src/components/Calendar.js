import React, { useState } from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';

const CalComponent = ({examList}) => {
    const [selectedDate, setSelectedDate] = useState('')
    const [date1, setDate1] =useState('')
    const [date2, setDate2] =useState('')
    
    const handleDate = (e) => {
        setSelectedDate(e)
        // console.log(selectedDate)
        var dd = String(e.getDate()).padStart(2, '0');
        var mm = String(e.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = e.getFullYear();

       const date_1 = dd + '/' + mm + '/' + yyyy;
       const date_2 = yyyy + '-' + mm + '-' + dd;

       setDate1(date_1)
       setDate2(date_2)
    }

    console.log(date1 + ' ' +date2)
    
const CalDeadline = ({e}) =>{
    // console.log(e)
    return (
        <div>{(date1===e.date|| date2===e.date) && e.subject}</div>
    )
}

    return (
        <div className='cal-page'>
            <Calendar className='cal' onChange={handleDate} />
            <div className='cal-deadline'>
                <ul>
                    {examList.map(e => <CalDeadline key={e.id} e={e}/> )}
                </ul>
            </div>
        </div>
    )
}

export default CalComponent