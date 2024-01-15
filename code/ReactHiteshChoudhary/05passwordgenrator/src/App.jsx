import { useState, useCallback } from 'react';


// useState:

// Think of useState as a tool that helps your React component remember things. These things are called "state variables." They're like notes your component takes to remember information.
// In your code, you use useState to create four notes: length (for password length), numberAllowed (whether to include numbers), characterAllowed (whether to include special characters), and password (the generated password).
// When you call useState(0), it's like starting with a note that says "0" for length. And when you call useState(false), it's like starting with a note that says "false" for numberAllowed and characterAllowed. The useState('') is like starting with an empty note for password.
// Later, when you want to update these notes, you use setLength, setNumberAllowed, setCharacterAllowed, and setPassword. For example, calling setLength(10) changes the note for length to "10."
// useCallback:

// Now, imagine you have a special notebook (a function) called passwordGenerator that knows how to create a random password based on what's written in your length, numberAllowed, and characterAllowed notes.
// useCallback is like telling React to keep that special notebook safe and not rewrite it unless the things it depends on (like length, numberAllowed, or characterAllowed) change.
// This helps make your app a bit faster because you don't have to recreate the special notebook every time something in your component changes. It's like saying, "Hey React, don't throw away this special way of making passwords unless something important changes."
// So, in simple terms, useState helps your component remember things, and useCallback helps optimize the way your component does special tasks, like generating passwords.






import './App.css';

function App() {
  const [length, setLength] = useState(0);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [characterAllowed, setCharacterAllowed] = useState(false);
  const [password, setPassword] = useState('');
  
  
//   const [length, setLength] = useState(0);

// This line initializes a state variable named length with an initial value of 0.
// setLength is a function that you can use to update the value of length. When you call setLength(newValue), it updates the length state with the new value.
// const [numberAllowed, setNumberAllowed] = useState(false);

// This line initializes a state variable named numberAllowed with an initial value of false.
// setNumberAllowed is a function to update the value of numberAllowed.
// const [characterAllowed, setCharacterAllowed] = useState(false);

// This line initializes a state variable named characterAllowed with an initial value of false.
// setCharacterAllowed is a function to update the value of characterAllowed.
// const [password, setPassword ] = useState('');

// This line initializes a state variable named password with an initial value of an empty string ('').
// setPassword is a function to update the value of password.
// In React, state variables are used to manage the state of a component. When a state variable is updated using its corresponding setter function (e.g., setLength, setNumberAllowed, setCharacterAllowed, setPassword), React re-renders the component, and the updated values are reflected in the UI.

// For example, later in your code, the onChange event handlers for input fields and checkboxes call these setter functions to update the state variables when user input changes. This triggers a re-render, and the UI is updated accordingly.

// Overall, these state variables are used to store and manage the dynamic values (like password length, whether numbers are allowed, whether special characters are allowed, and the generated password) within your React component.







  const passwordGenerator = useCallback(() => {
    // Your password generation logic goes here
    // For simplicity, let's generate a random password of the specified length
    const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let generatedPassword = '';

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      generatedPassword += characters.charAt(randomIndex);

//       This code defines a function passwordGenerator using the useCallback hook. Here's a step-by-step explanation:

// Function Definition:

// passwordGenerator is a function that generates a random password based on certain criteria.
// Password Generation Logic:

// const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';: Defines a string containing all the characters from which the password will be generated. This includes lowercase and uppercase letters, as well as digits.
// let generatedPassword = '';: Initializes an empty string to store the generated password.
// Password Generation Loop:

// for (let i = 0; i < length; i++) {: Initiates a loop that runs length times. The purpose is to generate a password of the specified length.
// const randomIndex = Math.floor(Math.random() * characters.length);: Generates a random index within the range of the characters string.
// generatedPassword += characters.charAt(randomIndex);: Appends the character at the randomly generated index to the generatedPassword string.
    }

    setPassword(generatedPassword);
   }, [length]);
  
  
//lenght nai dena sa bhi password milega but code optimed nai hoga utna
  //react callbck hooks k help sa bahut chij yad rakhta h or jab length change nai hota tab function dobara nai chlata balki khud sa recreate kar k deta han
   
  // If the length remains the same, React will reuse the memoized version of the passwordGenerator function.

  // In summary, when length is the same, the passwordGenerator function is not recreated, and the memoized version is reused. This helps in performance optimization by avoiding unnecessary recreations of the function when there's no change in the relevant dependency.









  // In simpler terms, specifying [length] in useCallback helps React be more efficient. It says, "I only want to update the way I make passwords if the length changes. Otherwise, keep using the same recipe." This optimization is like having a more efficient kitchen that doesn't redo unnecessary work, making your app run smoother
  // // By including length in the dependency array [length], you are telling React that this function depends on the value of length. If length changes, React will recreate the passwordGenerator function with the new length. This is important to ensure that the generated password reflects the current value of length.

  // This line is responsible for updating the state variable password with the generated password. Let's go into more detail:

  // setPassword:
  
  // setPassword is a function provided by React when you use the useState hook. In your component, you likely have something like const [password, setPassword] = useState(''); at the beginning of your code. This creates a state variable named password and a function setPassword to update its value.
  // generatedPassword:
  
  // generatedPassword is a variable that holds the password generated within the passwordGenerator function. It's a string containing random characters based on the logic inside the function.
  // Updating the State:
  
  // setPassword(generatedPassword); is the line that updates the state variable password with the value stored in generatedPassword.
  // When this line is executed, React will re-render your component with the updated state. This means any part of your component that references the password state will reflect the new value.


  return (
    <>
      <h1 className='text-4xl text-center text-white'>Password generator</h1>
      <div>
        <label>Password Length:</label>
        <input
          type="number"
          value={length}
          onChange={(e) => setLength(parseInt(e.target.value))}
        />
        

      </div>
      <div>
        <label>Include Numbers:</label>
        <input
          type="checkbox"
          checked={numberAllowed}
          onChange={() => setNumberAllowed((prev) => !prev)}
        />
      </div>
      <div>
        <label>Include Special Characters:</label>
        <input
          type="checkbox"
          checked={characterAllowed}
          onChange={() => setCharacterAllowed((prev) => !prev)}
        />
      </div>
      <button onClick={passwordGenerator}>Generate Password</button>
      <div>
        <label>Password:</label>
        <input type="text" value={password} readOnly />
      </div>
    </>
  );
}

export default App;
