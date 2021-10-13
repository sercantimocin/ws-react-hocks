import React, {ReactElement, useEffect, useRef, useState} from "react";

export function ExampleRef(): ReactElement {

    const [count,setCount] = useState(0);
    const prevCountRef = useRef(count);


    useEffect(()=> {
        prevCountRef.current = count;
    })

    const prevCount = prevCountRef.current;
    return <>
        <h1>Now: {count}, before: {prevCount}</h1>
        <button onClick={() => setCount(count+1)}>
            Count
        </button>
    </>
}