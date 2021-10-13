import React, {ReactElement, useEffect, useState} from 'react';

export function OnlyCallHooksAtTheTop():ReactElement {

  // 1. Use the name state variable
  const [name, setName] = useState('Marry');

  // 2. Use an effect for persisting the form
  if (name !== '') {
    useEffect(function persistForm() {
      localStorage.setItem('formData', name);
    });
  }

  // 3. Use the surname state variable
  const [surname, setSurname] = useState('Poppins');


  // 4. Use an effect for updating the title
  useEffect(function updateTitle() {
    document.title = name + ' ' + surname;

  });

  return <>
    <br/>
    <br/>
    <button onClick={() => setName('')}>
      Don't click me
    </button>
  </>;
}
