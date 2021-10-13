import React, {ReactElement} from 'react';
import {useOnline} from "./useOnline";

export function OnlineStatus(): ReactElement {
    const {isOnline, setOnline} = useOnline();

    return <>
        <div style={{backgroundColor: isOnline ? 'green' : 'red', border: 'dotted'}}>
            <p>You are {isOnline ? 'Online' : 'Offline'}</p>
            <button onClick={() => setOnline(o => !o)}>
                Click me
            </button>
        </div>
    </>

}