import { useState } from 'react'
import Navbar from './../components/Navbar/Navbar'
import TextField from './../components/TextField/TextField'
import Footer from '../components/footer/Footer'

function Index() {

  const [mode, setMode] = useState('light')
  const [modeText, setModeText] = useState('Dark Mode')

  const ToggleMode = () => {
    if (mode === 'light') {
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
    <div>
      <Navbar mode={mode} modeText={modeText} ToggleMode={ToggleMode} />
      <hr style={{ padding: '0px', margin: '0px' }} />
      <TextField mode={mode} modeText={modeText} />
      <Footer mode={mode} />
    </div>
  )
}

export default Index
