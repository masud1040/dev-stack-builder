
import './App.css'
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
         
    </>
  )
}

export default App
