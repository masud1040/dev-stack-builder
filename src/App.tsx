
import './App.css'
import Hero from './components/hero'
import Navbar from './components/navbar'


const DataPromise = async () => {
  const response = await fetch('./data.json')
  const data = await response.json()
  return data
}

function App() {
  const data = DataPromise()
  // console.log(data)


  return (
    <>
   
        <Navbar></Navbar>
        <Hero></Hero>

         
    </>
  )
}

export default App
