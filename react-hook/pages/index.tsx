import React, {useState} from 'react';
import {ExampleState} from '../basicHooks/exampleState';
import {MultipleStateVariables} from '../basicHooks/multipleStateVariables';
import {ExampleEffect} from '../basicHooks/exampleEffect';
import {ExampleRef} from '../additionalHooks/exampleRef';
import {ExampleContextWithUpdate} from '../basicHooks/exampleContextWithUpdate';
import {OnlyCallHooksAtTheTop} from "../rulesOfHooks/onlyCallHooksAtTheTop";

function App() {
  const [selection, setSelection] = useState('1');

  return <>
    <div style={{textAlign: 'center'}}>
      <p>

          <b>Basic Hooks</b><br/><br/>
            1-) UseState <br/>
            2-) Multiple state variables <br/>
            3-) Use effect <br/>
            4-) Use context <br/><br/>
          <b>Rules of Hooks</b> <br/>
            5-) Only call hooks at the top level <br/><br/>

        Please Select <br/>
      </p>
      <input type="text" value={selection} onChange={(e) => setSelection(e.target.value)}/>
      {selection === '1' && <ExampleState/>}
      {selection === '2' && <MultipleStateVariables/>}
      {selection === '3' && <ExampleEffect/>}
      {selection === '4' && <ExampleContextWithUpdate/>}
      {selection === '5' && <OnlyCallHooksAtTheTop/>}
      {selection === '10' && <ExampleRef/>}
    </div>
  </>;
}

export default App;
