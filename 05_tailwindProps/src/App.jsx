import './App.css'
import Card from './components/Card'

function App() {

  return (
    <>
      <h1 className='bg-green-400 p-4 text-black rounded-xl mb-4'>    Hello world!  </h1>

      <Card username='chai aur code' btnText = "Vist here" />
      <Card username='hitesh' />
    
    </>
  )
}

export default App
