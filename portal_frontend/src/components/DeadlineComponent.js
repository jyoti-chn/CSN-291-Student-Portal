import React from 'react'
import examService from '../services/exams'

const DeadlineComponent = (props) => {

    const deleteTut1 = async () =>{
        try{
        if(props.user.profession[0]==='Professor'){
        await examService.deleteTut(props.firstTut.id)
        window.location.reload()
        }
        }
        catch{
            console.log('Unable to delete')
        }
        
    }

    const deleteTut2 = async () =>{
        try{
            if(props.user.profession[0]==='Professor'){
        await examService.deleteTut(props.secondTut.id)
        window.location.reload()
            }
        }
        catch{
            console.log('Unable to delete')
        }
    }

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
                        <button className='delete-tut1' onClick={deleteTut1}></button>
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
                        <button className='delete-tut2' onClick={deleteTut2}></button>
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