import { useState,  useCallback , useEffect, useRef } from 'react'  
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [isNumber, setIsNumber] = useState(false)
  const [isCharacter, setIsCharacter] = useState(false)
  const [password, setPassword] = useState('')

  //PASSWORD GENERATOR FUNCTION USING HOOK SO THAT WE CAN TRIGGER THIS FUNCTION FROM DIFFERENT PLACES
  const passwordGenerator = useCallback(()=>{
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(isNumber) str += "0123456789"
    if(isCharacter) str += "!@#$%&_";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  },[length, isNumber , isCharacter , setPassword])

  //USE EFFECT HOOK TO TRIGGER PASSWORD GENERATOR FUNCTION
  useEffect(() => {
  passwordGenerator();
  },[length , isNumber , isCharacter , passwordGenerator])

 //USE REF HOOK TO COPY PASSWORD 
 const passwordRef = useRef(null)

  const copyPasswordToClipBoard = useCallback(() =>{
    passwordRef.current?.select();
    //TO SELECT ONLY BETWEEN SOME RANGE
    // passwordRef.current?.setSelectionRange(0 , 4);
    window.navigator.clipboard.writeText(password);
  },[password])

  
  return (
    <>
     <div className='w-full max-w-md mx-auto shadow-md rounded-3xl px-4 py-8 text-orange  mt-10 bg-gray-800' > 
    <h1 className='text-center text-white my-2'>Password Generator</h1>
    <div className='flex shadow rounded-lg mb-4 my-5 overflow-hidden'>
      <input type="text"
      value={password} 
      className='outline-none w-full py-1 px-3'
      placeholder='Password'
      readOnly
      ref={passwordRef}
      />
      <button onClick={copyPasswordToClipBoard} className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 hover:bg-blue-900 '>Copy</button>
      </div>
      <div className='flex text-sm gap-x-3'>
        <div className='flex items-center gap-x-1'>
          <input type="range" 
          min={8}
          max={50}
          value={length}
          className='cursor-pointer'
          onChange={(e) => {
            setLength(e.target.value)
          }}
          />
        <label className='text-orange-400'>Length: {length}</label>
        </div>
          <div className='flex mx-5 gap-2'> 
          <div className='flex items-center gap-x-1'>
          <input type="checkbox" 
          defaultChecked={isNumber}
          id='numberInput'
          onChange={() => {setIsNumber((prev) => !prev)}}
          />
          <label className='text-orange-400'>Number</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input type="checkbox" 
          defaultChecked={isCharacter}
          id='characterInput'
          onChange={() => {setIsCharacter((prev) => !prev)}}
          />
          <label className='text-orange-400'>Character</label>
        </div></div>
      </div>
      </div>
    
    </>
  )
}

export default App
