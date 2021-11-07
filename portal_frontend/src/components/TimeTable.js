import React from 'react'

const Timetable = () => {
    return (
        <div class="timetable">
            <h1>
                My timetable
            </h1>
            <table class="myTimetable">
                <thead>
                    <tr>
                        <th></th>
                        <th>Monday</th>
                        <th>Tuesday</th>
                        <th>Wednesday</th>
                        <th>thursday</th>
                        <th>Friday</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>8:00 AM - 8:55 AM</td>
                        <td>
                            <div class="subject">-</div>
                            <div class="room">-</div>
                        </td>
                        <td>
                            <div class="subject">L-HSN-01</div>
                            <div class="room">Batch-3</div>
                        </td>
                        <td>
                            <div class="subject">-</div>
                            <div class="room">-</div>
                        </td>
                        <td>
                            <div class="subject">L-HSN-01</div>
                            <div class="room">Batch-3</div>
                        </td>
                        <td>
                            <div class="subject">-</div>
                            <div class="room">-</div>
                        </td>
                    </tr>
                    <tr>
                        <td>9:00 AM - 9:55 AM</td>
                        <td>
                            <div class="subject">L-MIN-106</div>
                            <div class="room">SS</div>
                        </td>
                        <td>
                            <div class="subject">L-MIN-106</div>
                            <div class="room">SS</div>
                        </td>
                        <td>
                            <div class="subject">-</div>
                            <div class="room">-</div>
                        </td>
                        <td>
                            <div class="subject">L-MIN-106</div>
                            <div class="room">SS</div>
                        </td>
                        <td>
                            <div class="subject">-</div>
                            <div class="room">-</div>
                        </td>
                    </tr>
                    <tr>
                        <td>10:00 AM - 10:55 AM</td>
                        <td>
                            <div class="subject">L-CSN-221</div>
                            <div class="room">PSK</div>
                        </td>
                        <td>
                            <div class="subject">-</div>
                            <div class="room">-</div>
                        </td>
                        <td>
                            <div class="subject">L-CSN-221</div>
                            <div class="room">PSK</div>
                        </td>
                        <td>
                            <div class="subject">-</div>
                            <div class="room">-</div>
                        </td>
                        <td>
                            <div class="subject">-</div>
                            <div class="room">-</div>
                        </td>
                    </tr>

                    <tr>
                        <td>11:05 AM - 12:00 PM</td>
                        <td>
                            <div class="subject">L-ECN-203</div>
                            <div class="room">SK</div>
                        </td>
                        <td>
                            <div class="subject">-</div>
                            <div class="room">-</div>
                        </td>
                        <td>
                            <div class="subject">L-ECN-203</div>
                            <div class="room">SK</div>
                        </td>
                        <td>
                            <div class="subject">L-CSN-221</div>
                            <div class="room">PSK</div>
                        </td>
                        <td>
                            <div class="subject">L-ECN-203</div>
                            <div class="room">SK</div>
                        </td>
                    </tr>
                    <tr>
                        <td>12:05 PM - 1:00 PM</td>
                        <td>
                            <div class="subject">L-CSN-291</div>
                            <div class="room">SK</div>
                        </td>
                        <td>
                            <div class="subject">L-CSN-291</div>
                            <div class="room">SK</div>
                        </td>
                        <td>
                            <div class="subject">-</div>
                            <div class="room">-</div>
                        </td>
                        <td>
                            <div class="subject">L-CSN-291</div>
                            <div class="room">SK</div>
                        </td>
                        <td>
                            <div class="subject">-</div>
                            <div class="room">-</div>
                        </td>
                    </tr>
                    <tr>
                        <td>1:00 PM - 2:00 PM</td>
                        <td colspan="5" class="lunch">Lunch</td>
                    </tr>
                    <tr>
                        <td>2:00 PM - 2:55 PM</td>
                        <td>
                            <div class="subject">T-CSN-221</div>
                            <div class="room">PSK</div>
                        </td>
                        <td>
                            <div class="subject">P-CSN-291</div>
                            <div class="room">SK</div>
                        </td>
                        <td>
                            <div class="subject">-</div>
                            <div class="room">-</div>
                        </td>
                        <td>
                            <div class="subject">-</div>
                            <div class="room">-</div>
                        </td>
                        <td>
                            <div class="subject">T-CSN-221</div>
                            <div class="room">PSK</div>
                        </td>
                    </tr>
                    <tr>
                        <td>3:00 PM - 3:55 PM</td>
                        <td>
                            <div class="subject">T-MIN-106</div>
                            <div class="room">O1,O2</div>
                        </td>
                        <td>
                            <div class="subject">P-CSN-291</div>
                            <div class="room">SK</div>
                        </td>
                        <td>
                            <div class="subject">P-CSN-261</div>
                            <div class="room">RT</div>
                        </td>
                        <td>
                            <div class="subject">T-MIN-106</div>
                            <div class="room">O4</div>
                        </td>
                        <td>
                            <div class="subject">T-MIN-106</div>
                            <div class="room">O3</div>
                        </td>
                    </tr>
                    <tr>
                        <td>4:05 PM - 5:00 PM</td>
                        <td>
                            <div class="subject">T-HSN-01</div>
                            <div class="room">-</div>
                        </td>
                        <td>
                            <div class="subject">P-MIN-106</div>
                            <div class="room">O1,O2</div>
                        </td>
                        <td>
                            <div class="subject">-</div>
                            <div class="room">-</div>
                        </td>
                        <td>
                            <div class="subject">P-MIN-106</div>
                            <div class="room">O3,O4</div>
                        </td>
                        <td>
                            <div class="subject">T-HSN-01</div>
                            <div class="room">-</div>
                        </td>
                    </tr>
                    <tr>
                        <td>5:05 PM - 6:00 PM</td>
                        <td>
                            <div class="subject">T-HSN-01</div>
                            <div class="room">-</div>
                        </td>
                        <td>
                            <div class="subject">P-MIN-106</div>
                            <div class="room">O1</div>
                        </td>
                        <td>
                            <div class="subject">-</div>
                            <div class="room">-</div>
                        </td>
                        <td>
                            <div class="subject">P-MIN-106</div>
                            <div class="room">O3,O4</div>
                        </td>
                        <td>
                            <div class="subject">T-HSN-01</div>
                            <div class="room">-</div>
                        </td>
                    </tr>
                </tbody>
            </table>

        </div>
    )
}

export default Timetable