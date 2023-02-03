import React, {useState}from 'react';
import classes from './Counter.module.scss';


export const Counter = () => {
    const [count, setCount] = useState(0)

    const increment = () => {
        setCount(prev=>prev+1)
    }

  return (
    <div>
        <div>{count}</div>
        <button className={classes.btn} onClick={increment}>add</button>
        </div>
  )
}
