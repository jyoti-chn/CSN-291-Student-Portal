import React from 'react'

const DeadlineComponent = (props) => {
    return (
        <div id="timeline_container">
            <ul>
                <li class="life_event active">
                    <div class="event_icn icon-address"></div>
                    <div class="event_content">
                        <h2>{props.firstHead}</h2>
                        <p>
                           {props.firstContent}
                        </p>
                    </div>
                    <div class="event_date">
                       {props.firstDate}
                    </div>
                </li>
                <li class="life_event">
                    <div class="event_icn icon-address"></div>
                    <div class="event_content">
                        <h2>{props.secondHead}</h2>
                        <p>
                            {props.secondContent}
                        </p>
                    </div>
                    <div class="event_date">
                        {props.secondDate}
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default DeadlineComponent