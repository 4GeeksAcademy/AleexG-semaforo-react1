import { useState } from "react";

const Semaforo = () => {
    const [color,setColor] = useState ("")
    return (
        <div className="lights">
            <div onClick={() => setColor("red")} className={`red ${color == "red" ? "active" : ""}`}></div>
            <div onClick={() => setColor("yellow")} className={`yellow ${color == "yellow" ? "active" : ""}`}></div>
            <div onClick={() => setColor("green")} className={`green ${color == "green" ? "active" : ""}`}></div>
        </div>
    )
}

export default Semaforo;