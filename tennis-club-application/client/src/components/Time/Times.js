import React from 'react'
import {useState} from 'react';
import './Times.css'; // Import the CSS file

const time = ['08:00','09:00','10:00','14:00','15:00','17:00']

function Times(props) {

 const [event, setEvent] = useState(null)
 const [info, setInfo] = useState(false)

 function displayInfo(e) {
   setInfo(true);
   setEvent(e.target.innerText);
}

return (
 
 <div className="times">
   {time.map(times => {
    return (
    <div>
      <button class="time__button" onClick={(e)=> displayInfo(e)}> {times} </button>
    </div>
        )
     })}
    <div>
      {info ? `Your appointment is set to ${event} ${props.date.toDateString()}` : null}
    </div>
 </div>
  )
}

export default Times;