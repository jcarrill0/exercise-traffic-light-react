import React, { useState } from 'react'

const TrafficBody2 = () => {

    // const [color, setColor] = useState("");
    const [redLight, setRedLight] = useState("");
    const [yellowLight, setYellowLight] = useState("");
    const [greenLight, setGreenLight] = useState("");

    const semapherSelected = (e) => {

        if(e.target.classList.contains('red')) {
            setRedLight("selected");
            setYellowLight("");
            setGreenLight("");
        }
        if(e.target.classList.contains('yellow')) {
            setRedLight("");
            setYellowLight("selected");
            setGreenLight("");
        }
        if(e.target.classList.contains('green')) {
            setRedLight("");
            setYellowLight("");
            setGreenLight("selected");
        }
    }

    return (
        <div className="container">
            <div 
                className={`light red ${redLight}`}
                onClick={ e => semapherSelected(e) }
            ></div>
            <div 
                className={`light yellow ${yellowLight}`}
                onClick={ e => semapherSelected(e) }
            ></div>
            <div 
                className={`light green ${greenLight}`}
                onClick={ e => semapherSelected(e) }
            ></div>
        </div>
    )
}

export default TrafficBody2
