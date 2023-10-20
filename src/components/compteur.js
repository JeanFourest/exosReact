
import React, { useEffect, useState } from 'react'
import "./compteur.css"

export default function Compteur() {
    const [count, setCount] = useState(0)
    useEffect(() => {
        if(count === 10) {
            setCount(count)
            alert("Le compteur est à 10")
        }
      }, [count]);
    
      return (
        <div className='counter'>
          <p>{count}</p>
          <button className='buttonCompteur' onClick={() => setCount(count + 1)}>
            Click me
          </button>
        </div>
      );
}
