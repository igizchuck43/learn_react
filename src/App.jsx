import React from 'react'

const App = () => {

    const name = 'Charles';

    const x = 10;
    const y = 20;

    const names = ['Charles', 'John', 'Paul', 'George', 'Ringo'];

  return (
    <div className="">
        <div className='text-5xl'>App</div>
        <p style={{ color: 'red', fontSize:'24px'}}>Hello = {name} </p>
        <p>The sum of {x} and {y} is <strong>{x + y}</strong></p>

        <p>The Loop</p>
        <ul>
            {names.map((names, index)=>(
                <li key={index}>{names}</li>
            ))}
        </ul>
    </div>
    
  )
}

export default App