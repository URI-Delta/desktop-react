import { useCallback, useEffect, useState ,useRef } from 'react'
import './App.css'

function App() {
  const [length , setlength]=useState(6)
  const [numAllowed , setnumAllowed] = useState(false)
  const [charAllowed , setcharAllowed] = useState(false)
  const [password  ,setpassword] = useState("")

  // /reff hook

  const passref = useRef(null)



  const passwordGenerator= useCallback( ()=>{
    let pass = ''
    let str = 'QAZXSWEDCVFRTGBNHYUJMKIOLPqazwsxedcrfvtgbyhnujmikolp'

    if (numAllowed) str += '0123654789'
    if (charAllowed) str += '/*-+~!@#$%&'

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random()*str.length +1)
      pass += str.charAt(char)
    }

    setpassword(pass)
  },
    [length , numAllowed , charAllowed ,setpassword])

    const copyPass = useCallback(()=>{
      passref.current?.select()
      passref.current?.setSelectionRange(0,3) 
      window.navigator.clipboard.writeText(password)
    },[password])

    useEffect( ()=>{
      passwordGenerator()
    },[length,numAllowed,charAllowed,passwordGenerator])

  return (
    <>
    <div className='w-full max-h-max mx-auto shadow-md rounded-2xl px-4 my-8 text-orange-500 gb-grey-700'>
      <h1 className='text-white text-center my-3' >Password Generator</h1>
<div className=' flex shadow rounded-lg overflow-hidden mb-4'>
  <input 
  ref={passref}
  type="text"
  value={password}
  placeholder='Password'
  readOnly
  className='outline-none w-full py-1 px-3 bg-white'
   />
  <button className='outline-none bg-blue-900 text-white px-3 py-0.5 shrink-0' onClick={copyPass} >Copy</button>
</div>
<div className='flex text-sm gap-x-2' >
  <div className='flex items-center gap-x-1'>
    <input type="range"
    min={6}
    max={100}
    value={length}
    className='cursor-pointer'
    onChange={(e)=>{setlength(e.target.value)}}
     />
     <label >Length :{length} </label>
  </div>
  
  <div className='flex items-center gap-x-1'>
    <input type="checkbox"
    defaultChecked ={numAllowed}
    id= 'numberInput'
    onChange={(e)=>{setnumAllowed((prev)=> !prev)}}
    />
     <label >Numbers </label>
  </div>
  
  <div className='flex items-center gap-x-1'>
    <input type="checkbox"
    defaultChecked ={charAllowed}
    id= 'charInput'
    onChange={(e)=>{setcharAllowed((prev)=> !prev)}}
     />
     <label >Symbol </label>
  </div>

</div>
    </div>
    </>
  )
}

export default App
