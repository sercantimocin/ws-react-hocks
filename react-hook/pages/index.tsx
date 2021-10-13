import React, {useState} from 'react';
import {ExampleState} from '../basicHooks/exampleState';
import {MultipleStateVariables} from '../basicHooks/multipleStateVariables';
import {ExampleEffect} from '../basicHooks/exampleEffect';
import {ExampleRef} from '../additionalHooks/exampleRef';
import {ExampleContextWithUpdate} from '../basicHooks/exampleContextWithUpdate';
import {OnlyCallHooksAtTheTop} from "../rulesOfHooks/onlyCallHooksAtTheTop";
import {OnlineStatus} from "../customHooks/onlineStatus";
import {ExampleReducer} from "../additionalHooks/exampleReducer";

function App() {
    const [selection, setSelection] = useState('1');

    return <>
        <div style={{textAlign: 'center'}}>

            <b><h3>Basic Hooks</h3></b>
            <p>
                1-) useState <br/>
                2-) useState (Multiple state variables) <br/>
                3-) useEffect *<br/>
                4-) useContext <br/><br/>
            </p>
            <b><h3>Rules of Hooks</h3></b>
            <p>
                5-) Only call hooks at the top level *<br/>
            </p>
            <br/>
            <b><h3>Custom hooks</h3></b>
            <p>
                6-) useOnline <br/>
            </p>
            <br/>
            <b><h3>Additional hooks</h3></b>
            <p>
                7-) useReducer <br/>
            </p>
            <br/>
            <br/>
            <span><b>Note : * contains a bug</b> </span>
            <br/>
            <br/>
            <label htmlFor="selection">Please Enter</label> <br/>
            <input id="selection" type="text" value={selection} onChange={(e) => setSelection(e.target.value)}/>
            {selection === '1' && <ExampleState/>}
            {selection === '2' && <MultipleStateVariables/>}
            {selection === '3' && <ExampleEffect/>}
            {selection === '4' && <ExampleContextWithUpdate/>}
            {selection === '5' && <OnlyCallHooksAtTheTop/>}
            {selection === '6' && <OnlineStatus/>}
            {selection === '7' && <ExampleReducer/>}
            {selection === '10' && <ExampleRef/>}
        </div>
    </>;
}

export default App;
