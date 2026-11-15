import { useState, useEffect, useRef } from 'react';
import Star from './Star';

function uniqueId () {
    let random = Math.floor((Math.random() + Math.random() * 50000) - Math.floor(Math.random() * 800));
    return random;
}

function isGenerated (num, generatedArray) {
    for (let genNum of generatedArray) {
        if (num === genNum) {
            return true;
        }
    }
    return false;
}

function Space () {
    const starSize = 28;
    const generatedNumbers = useRef([]); 
    const [ stars, setStars ] = useState([]);

    useEffect ( () => {
        const interval = setInterval ( () => {
            let randomId = uniqueId();
            
                while(isGenerated(randomId, generatedNumbers.current)) {
                    randomId = uniqueId();
                }

            generatedNumbers.current.push(randomId); 

            let newStar = {
                id: randomId,
                x: Math.random() * (window.innerWidth - starSize),
				y: Math.random() * (window.innerHeight - starSize)
            }
            setStars(prev=> [...prev, newStar]);
        }, 2500)

        return () => clearInterval(interval);
    },[])

    function destroyStars (starId) {
        setStars(prev => prev.filter(
            star => star.id !== starId
        ))
    }

    return (
        <div>
            {
                stars.map(star => (
                    <Star 
                        key={star.id}
                        starId={star.id}
                        leftPos={star.x}
                        topPos={star.y}
                        destroyFunc={destroyStars}
                    />
                ))
            }
        </div>
    )
}

export default Space;