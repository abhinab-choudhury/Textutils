import { useState } from 'react'
import './styles.css'

export default function Navbar() {

    const [background, setBackground] = useState('light')
    const [toggleText, setToggleText] = useState('Enable Dark mode')
    return (
        <div className='container-flex'>
            <nav className={`navbar navbar-${background} bg-${background}`}>
            <div className='container-fluid'>
                <a className='navbar-brand' href='/'>
                <div className="logos mx-2">
                    <img className='mb-1' width="52" height="52" src="https://img.icons8.com/plasticine/100/bookmark--v2.png" alt="bookmark--v2"/>                
                    <div className='m-2'>Textutils</div>
                </div>
            
                
                </a>
                <div className="form-check form-switch">
                    <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked"
                    onClick={() => {
                        if(background == 'light') {
                            setBackground('dark')
                            setToggleText('Enable Light mode')
                        } else {
                            setBackground('light')
                            setToggleText('Enable Dark mode')
                        }
                    }}/>
                    <label className={`form-check-label text-${background == 'light' ? 'dark' : 'light'}`} htmlFor="flexSwitchCheckChecked">{toggleText}</label>
                </div>
            </div>
            </nav>
        </div>
    )
}