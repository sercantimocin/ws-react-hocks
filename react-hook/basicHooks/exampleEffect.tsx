import React, {ReactElement, useEffect, useState} from "react";

export function ExampleEffect():ReactElement{

    const [color,setColor] = useState('FF0000');

    useEffect(()=>{
        setInterval(() => {
            setColor(randomColor);
        }, 3000);
        return ()=> {
            // What should we do in here ?
        };
    },[color]);

    return <>
        <p style={{ backgroundColor: "#" + `${color}` }}>
            We can now pay by bank transfer. <br />
            <br />
            To automatically receive payments such as the Good Condition Bonus add your
            bank
            <br />
            details.
        </p>
    </>
}

function randomColor():string{
    return  Math.floor(Math.random() * 16777215).toString(16);
}




















