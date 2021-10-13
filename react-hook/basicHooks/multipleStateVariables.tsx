import React, {useState} from "react";

export function MultipleStateVariables() {
    // Declare multiple state variables!
    const [age, setAge] = useState(42);
    const [fruit, setFruit] = useState('banana');
    const [todos, setTodos] = useState([{ text: 'Learn Hooks' }]);

    const carName = useState('Ferrari');

    return (
        <div>
            <p>{age} </p>
            <p>{fruit} </p>
            <p>{todos[0].text} </p>
            <p>{carName[0]} </p>
            <button onClick={() => carName[1]('Mercedes')}>
                Use second variable
            </button>
        </div>
    );
}