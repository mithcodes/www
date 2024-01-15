import { useState } from 'react'
// This line imports the useState hook from the 'react' library. The useState hook is used to manage state in functional components.
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
// These lines import images and a CSS file. The images are assigned to variables (reactLogo and viteLogo), and the CSS file ('App.css') is imported to apply styles to the component.


import './App.css'

function App() {
  let [counter,setCounterr] =useState(15)
  //let counts=15 usestate k andr kch vi de sakta haan or hma array format mita haan ek value of variables or dusra function kch vi nam de sakta haan ek sath is trha sa value uodate hogyaga
  //counter variables haan setcounter k jagah kch v lik sakta haan or hma ler likhna padega
  // This line uses the useState hook to declare a state variable counter with an initial value of 15. setCounter is the function that will be used to update the value of counter.

  const addValue=()=>{
    // console.log("value added" ,Math.random())
    console.log("value added",counter)
   //counter=counter+1
   //setCounterr(counter+1)
   setCounterr(prevCounter=> prevCounter+1)
   setCounterr(prevCounter=>prevCounter+1)
   setCounterr(prevCounter=>prevCounter+1)
   setCounterr(prevCounter=>prevCounter+1)
  //  This function, addValue, increments the counter state by 1 four times. It uses the functional form of setCounter that takes the previous state (prevCounter) and returns the updated state.
  }
  const removeValue=()=>{
    setCounterr(counter-1)
  }



  return (
    <>
      <h1>chai or react</h1>
      <h2>counter value :{counter}</h2>
      <button
      onClick={addValue}
      >add value</button>
      <br/>
      <button
      onClick={removeValue}
      >remove value</button>
    </>
  )
}

export default App

// This exports the App component as the default export of this module.

// Usage:
// The App component can be imported and used in other parts of the application. It displays a title, the current counter value, and two buttons to increment and decrement the counter. The state is managed using the useState hook, and the component re-renders whenever the state changes.
