import React, {useState} from 'react';
import {ExampleState} from "../basicHooks/exampleState";
import {MultipleStateVariables} from "../basicHooks/multipleStateVariables";
import {ExampleEffect} from "../basicHooks/exampleEffect";
import {ExampleRef} from "../additionalHooks/exampleRef";
import {ExampleContext} from "../basicHooks/exampleContext";

function App() {

    const [selection, setSelection] = useState('1');

    return <>
        <div style={{textAlign:"center"}}>
        <p>
            Selection <br/>
            1-) UseState <br/>
            2-) Multiple state variables <br/>
            3-) Use effect <br/>
            4-) Use context <br/>
        </p>
        <input type="text" value={selection} onChange={(e) => setSelection(e.target.value)}/>
        {selection === '1' && <ExampleState/>}
        {selection === '2' && <MultipleStateVariables/>}
        {selection === '3' && <ExampleEffect/>}
        {selection === '4' && <ExampleContext/>}
        {selection === '10' && <ExampleRef/>}
        </div>
    </>;
}

export default App;