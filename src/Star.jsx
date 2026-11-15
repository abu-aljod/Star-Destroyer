import { useRef } from "react";
import './Star.css'
import { useEffect } from "react";

function Star ({ starId, leftPos, topPos, destroyFunc }) {
    let starRef = useRef(null);

    useEffect(() => {
        starRef.current.focus();
    },[])

    const destroyStar = () => {
        destroyFunc(starId);
    }

    return (
        <div 
        ref={starRef}
        style={{left: leftPos, top: topPos}}
        tabIndex="0"
        onClick={destroyStar}
        className="star">
            ⭐️
        </div>
    )
}

export default Star;