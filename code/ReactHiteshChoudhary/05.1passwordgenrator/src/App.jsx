import { useState, useCallback, useEffect, useRef } from 'react';
import './App.css';

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [characterAllowed, setCharacterAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const passwordRef=useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

    if (numberAllowed) {
      str += "0123456789";
    }
    if (characterAllowed) {
      str += "@#$%^&*";
    }

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numberAllowed, characterAllowed, setPassword]);
   
  
  const copyPasswordToClipBoard=useCallback(()=>{

    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0,16)
window.navigator.clipboard.writeText(password)

  },[password])
  
  useEffect(()=>{
    // lenght char or number mai kch bhi ched chad hoga to code dobara rub goga
    passwordGenerator()
   },[length,numberAllowed,characterAllowed,passwordGenerator])
  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-red-700'>
        <div className='flex-shadow rounded-lg overflow-hidden mb-4"'>
          <input
            type="text"
            value={password}
            className='outline-none w-full py-1 px-3'
            placeholder='Password'
            readOnly
            ref={passwordRef}
          />
          <button 
          onClick={copyPasswordToClipBoard}
          className='outline-none bg-blue-600 py-3 py-0.5'>
            Copy
          </button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input
              type="range"
              min={6}
              max={16}
              className='cursor-pointer'
              onChange={(e) => { setLength(Number(e.target.value)) }}
            />
            <label>Length: {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input
              type="checkbox"
              checked={numberAllowed}
              id="numberInput"
              onChange={() => {
                setNumberAllowed((prev) => !prev);
              }}
            />
            <label>Include Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input
              type="checkbox"
              checked={characterAllowed}
              id="characterInput"
              onChange={() => {
                setCharacterAllowed((prev) => !prev);
              }}
            />
            <label>Include Special Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;


// mx-auto: Set horizontal margin to auto, centering an element horizontally.
// my-auto: Set vertical margin to auto, centering an element vertically.
// w-{size}: Set width, where {size} can be full, screen, 1/2, etc.
// h-{size}: Set height, where {size} can be full, screen, 1/2, etc.
// Typography:
// text-{size}: Set font size, where {size} can be xs, sm, base, lg, xl, etc.
// font-{weight}: Set font weight, where {weight} can be thin, normal, bold, etc.
// text-{color}: Set text color, where {color} is a color name or code.
// text-center, text-left, text-right: Align text.
// uppercase, lowercase, capitalize: Transform text case.
// Background and Border:
// bg-{color}: Set background color, where {color} is a color name or code.
// border-{size}: Set border size, where {size} can be 1, 2, 4, etc.
// border-{color}: Set border color, where {color} is a color name or code.
// rounded-{size}: Set border-radius, where {size} can be sm, md, lg, etc.
// Spacing:
// p-{size}: Set padding, where {size} can be 0, 2, 4, etc.
// m-{size}: Set margin, where {size} can be 0, 2, 4, etc.
// space-{size}: Set margin and padding based on a spacing scale.
// Flexbox:
// flex: Enable flex container.
// flex-{value}: Set flex value, where {value} can be 1, auto, none, etc.
// justify-{content}: Set justify-content property.
// items-{align}: Set align-items property.
// Responsive Design:
// {screen}:{property}-{value}: Apply styles based on screen size, where {screen} is sm, md, lg, or xl.
// Hover and Focus States:
// hover:{property}-{value}: Apply styles on hover.
// focus:{property}-{value}: Apply styles on focus.
