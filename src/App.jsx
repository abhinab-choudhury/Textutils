import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import TextField from './components/TextField/TextField'
// import Alert from './components/Alert/Alert'


function App() {

  const [mode, setMode] = useState('light')
  const [modeText, setModeText] = useState('Dark Mode')

  const ToggleMode = () => {
    if(mode === 'light') {
      setMode('dark')
      setModeText('Light Mode')
      // setAlertText('Dark Mode Enabled.')
      document.getElementById("root").style.backgroungColor = 'black'
    } else {
      setMode('light')
      setModeText('Dark Mode')
      // setAlertText('Light Mode Enabled.')
      document.getElementById("root").style.backgroungColor = 'white'
    }
  }

  return (
    <>
      <Navbar mode={mode} modeText={modeText} ToggleMode={ToggleMode}/>
      <hr style={{padding:'0px', margin:'0px'}}/>
      <TextField mode={mode} modeText={modeText}/>
    </>
  )
}

export default App
