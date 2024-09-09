import React from 'react'

const App = () => {

    const name = 'Charles';

    const x = 10;
    const y = 20;

  return (
    <div className="">
        <div className='text-5xl'>App</div>
        <p>Hello = {name} </p>
        <p>The sum of {x} and {y} is <strong>{x + y}</strong></p>
    </div>
    
  )
}

export default App