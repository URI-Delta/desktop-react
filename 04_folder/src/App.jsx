import { useState } from "react";

function App() {

  let [counter,setcounter]=useState(5)

  // let counter = 5

  const AddValue = ()=>{
    console.log("clicked", counter);
    // counter = counter +1
    setcounter((PrevCounter)=> PrevCounter+1)
    setcounter((PrevCounter)=> PrevCounter+1)
    setcounter((PrevCounter)=> PrevCounter+1)
    setcounter((PrevCounter)=> PrevCounter+1)
    // setcounter(counter)
  }

  const RemoveValue = ()=>{
    console.log("removed" , counter);
    setcounter(counter -1)
    
  }

  return(
    <>
    <h1>chai aur React</h1>
    <h2>counter value : {counter}</h2>

    <button onClick={AddValue} >Add Value : {counter} </button>
    <br />
    <button onClick={RemoveValue} >Remove Value : {counter}</button>
    <footer> score {counter}</footer>
    </>
  );
}

export default App
