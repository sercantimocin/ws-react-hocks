import React, {useState} from 'react';
import {randomNumber} from '../common/utils';

export function ExampleState() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
                Click me
      </button>
      <button onClick={() => setCount(randomNumber(100))}>
                Set random
      </button>
      <button onClick={() => setCount(0)}>
                Reset
      </button>
    </div>
  );
}
