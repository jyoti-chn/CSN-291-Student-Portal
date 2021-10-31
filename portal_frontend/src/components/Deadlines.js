import React from 'react'
import DeadlineComponent from './DeadlineComponent'



const Deadlines = ({ examList }) => {
    return (
        <div id="timeline_container">
            <header>
                <figure>
                    <img src="https://placeimg.com/480/480/poeple/sepia"></img>
                </figure>
                <h1>DEADLINES <br /> Student Name</h1>
            </header>
            <div className="addExam">Add</div>

            {/* {examList.map(e => <DeadlineComponent firstHead={e.subject} firstContent={e.syllabus} firstDate={e.date} secondHead={e.subject} secondContent={e.syllabus} secondDate={e.date} />)} */}
            {
                examList.reduce(
                    function (accumulator, currentValue, currentIndex, array) {
                        if (currentIndex % 2 === 0)
                            accumulator.push(array.slice(currentIndex, currentIndex + 2));
                        return accumulator;
                    }, []).map(e => <DeadlineComponent firstHead={e[0].subject} firstContent={e[0].syllabus} firstDate={e[0].date} secondHead={e[1].subject} secondContent={e[1].syllabus} secondDate={e[1].date} />)}
        </div>

    )
}

export default Deadlines