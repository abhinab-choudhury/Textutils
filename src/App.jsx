import './App.css'
import reactLogo from './assets/react.svg'
import Navbar from './components/Navbar/Navbar'
import TextField from './components/TextField/TextField'
import Footer from './components/footer/Footer'

function App() {

  

  return (
    <>
      <Navbar />
      <div className='image-Heading'>
          <a href="https://img.icons8.com" target="_blank">
                <img className='mb-1' width="100" height="100" src="https://img.icons8.com/plasticine/100/bookmark--v2.png" alt="bookmark--v2" />
          </a>
          <a href="https://react.dev" target="_blank">
              <img src={reactLogo} width="100" height="100"className="logo react" alt="React logo" />
          </a>
      </div>
      <h1 className='d-flex justify-content-center'> Textutils + React </h1>
      
      <TextField />
      <Footer />
    </>
  )
}

export default App
