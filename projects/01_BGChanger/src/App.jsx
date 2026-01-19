import { useState } from "react";

function App() {
  const [color,setcolor] = useState("olive")
  return (
    <div className="min-h-screen w-screen transition-all duration-300"  style={{ backgroundColor: color }}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 ">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white py-2 px-3 rounded-xl">
          <button onClick={()=> setcolor("red")} className="outline-none px-4" style={{backgroundColor:'red'}}>Red</button>
          <button onClick={()=> setcolor("blue")} className="outline-none px-4" style={{backgroundColor:'blue'}}>Blue</button>
          <button onClick={()=> setcolor("green")} className="outline-none px-4" style={{backgroundColor:'green'}}>Green</button>
        </div>
      </div>
    </div>
  );
}

export default App
