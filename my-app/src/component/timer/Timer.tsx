import React, { useEffect, useState } from "react";
import "./Timer.scss"


const getTime = () => (new Date()).toTimeString().substring(0, 8);
// const getTime = () => Date.now().toString();

const Timer: React.FC = () => {

    const [time, setTime] = useState("");

    useEffect(() => {
        let intervalId = setInterval(() => {
            setTime(getTime());
        }, 1000);

        return () => {
            clearInterval(intervalId);
        }
    }, []);


    return (
        <div className="timer-container">
            Time: {time}
        </div>
    )
}

export default Timer;