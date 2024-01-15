// Import the useState hook from the 'react' library
import React, { useState } from 'react';

// Import the styles from the 'App.css' file
import './App.css';

// Define a functional component called App
function App() {
  // Declare a state variable 'count' initialized to 0,
  // and 'setCount' is the function to update 'count'
  let [count, setCount] = useState(0);

  // Return JSX (React elements) to render in the browser
  return (
    <>
      {/* Display an h1 element with Tailwind CSS classes */}
      <h1 className='bg-green-400 text-black p-4 rounded-xl'>Tailwind test</h1>
    </>
  );
}

// Export the App component as the default export of this module
export default App;
// className='bg-green-400 text-black p-4 rounded-xl':

// className: In React, the class attribute in HTML is written as className to avoid conflicts with JavaScript's class keyword.
// 'bg-green-400': This is a Tailwind CSS class that sets the background color to a shade of green (400 on the scale).
// 'text-black': This class sets the text color to black.
// 'p-4': This class adds padding of size 4 (using the spacing scale defined by Tailwind) to all sides of the element.
// 'rounded-xl': This class applies rounded corners to the element, with a higher degree of rounding specified by the 'xl' (extra-large) size.
// 'Tailwind test': This is the content of the heading. In this case, it's the text "Tailwind test" that will be displayed inside the <h1> element.