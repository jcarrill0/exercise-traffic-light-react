import React, { useState } from 'react'

const TrafficBody = () => {

    const [ color, setColor] = useState("");
    const [selected, setSelected] = useState(false);

    const semapherSelected = (e) => {
        if(selected === false) {    
            if(e.target.classList.contains('red')) {
                setColor("red");
            }
            if(e.target.classList.contains('yellow')) {
                setColor("yellow");
            }
            if(e.target.classList.contains('green')) {
                setColor("green");
            }
            
            e.target.classList.add('selected');
            setSelected(true);

        } else {
            if(!e.target.classList.contains('selected')) {
                if(e.target.classList.contains('yellow') && color === 'red') {
                    e.target.previousSibling.classList.remove('selected')
                    e.target.classList.add('selected');
                    setColor('yellow')
                } else if(e.target.classList.contains('yellow') && color === 'green') {
                    e.target.nextSibling.classList.remove('selected')
                    e.target.classList.add('selected');
                    setColor('yellow')
                } else if(e.target.classList.contains('red') && color === 'yellow') {
                    e.target.nextSibling.classList.remove('selected')
                    e.target.classList.add('selected');
                    setColor('red')
                } else if(e.target.classList.contains('red') && color === 'green') {
                    e.target.nextSibling.nextSibling.classList.remove('selected')
                    e.target.classList.add('selected');
                    setColor('red')
                } else if(e.target.classList.contains('green') && color === 'yellow') {
                    e.target.previousSibling.classList.remove('selected')
                    e.target.classList.add('selected');
                    setColor('green')
                } else {
                    e.target.previousSibling.previousSibling.classList.remove('selected')
                    e.target.classList.add('selected');
                    setColor('green')
                }
            }
        }
    }
    
    return (
        <div className="container">
            <div 
                className="light red"
                onClick={ e => semapherSelected(e) }
            ></div>
            <div 
                className="light yellow"
                onClick={ e => semapherSelected(e) }
            ></div>
            <div 
                className="light green"
                onClick={ e => semapherSelected(e) }
            ></div>
        </div>
    )
}

export default TrafficBody
