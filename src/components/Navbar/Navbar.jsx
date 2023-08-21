import './styles.css'

export default function Navbar(props) {

    return (
        <div className='container-flex'>
            <nav className={`navbar navbar-${props.mode} bg-${props.mode}`}>
            <div className='container-fluid'>
                <a className='navbar-brand' href='/'>
                <div className="logos mx-2">
                    <img className='mb-1' width="52" height="52" src="https://img.icons8.com/plasticine/100/bookmark--v2.png" alt="bookmark--v2"/>                
                    <div className='m-2'>Textutils</div>
                </div>
            
                
                </a>
                <div className="form-check form-switch">
                    <input className="form-check-input my-3 " type="checkbox" role="switch" id="flexSwitchCheckChecked" onClick={props.ToggleMode}/>
                    <label className={`form-check-label text-${props.mode == 'light' ? 'dark' : 'light'}`} htmlFor="flexSwitchCheckChecked">{props.modeText}</label>
                </div>
            </div>
            </nav>
        </div>
    )
}