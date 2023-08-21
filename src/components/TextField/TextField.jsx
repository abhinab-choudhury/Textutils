import "./sytles.css"
import reactLogo from '../../assets/react.svg'
import Footer from '../../components/footer/Footer'
import { useState } from "react"

export default function TextField(props) {

    const [textEntered, setTextEntered] = useState("")
    

    let cnt = 0
    const eraseText = () => {
        setTextEntered("")
    }
    const handleChange = (event) => {
        cnt++;
        setTextEntered(event.target.value)
    }
    const TO_LOWERCASE = () => {
        setTextEntered(textEntered.toLowerCase())
        
    }
    const TO_UPPERCASE = () => {
        setTextEntered(textEntered.toUpperCase())
    }
    const CAPATALIZE = () => {
        let text = textEntered
        // split the above string into an array of strings 
        // whenever a blank space is encountered
        let arr = text.split(" ")

        for(let i = 0;i < arr.length;i++) {
            // First make all the character lower-case and then 
            // chnage the first character of word to upper-case.
            arr[i] = arr[i].toLowerCase()
            arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1)
        }
        // Join all the elements of the array back into a string 
        // using a blankspace as a separator 
        const Capatalize = arr.join(" ")
        setTextEntered(Capatalize)
    }
    const COPY = () => {
        navigator.clipboard.writeText(textEntered)
        alert("Text Coppied!")
    }
    const REMOVE_PUNCATIONS = () => {
        let text = textEntered
        let newText = ""
        let arr = text.split("")
        
        for(let i = 0;i < arr.length;i++) {
            if(arr[i] != "." && arr[i] != "?" && arr[i] != "!" && arr[i] != ","
                && arr[i] != ":" && arr[i] != ";" && arr[i] != "_" && arr[i] != "-"
                && arr[i] != "(" && arr[i] != "[" && arr[i] != "{" && arr[i] != "}"
                && arr[i] != "\"" && arr[i] != "\"" && arr[i] != "]" && arr[i] != ")"
                && arr[i] != "/" && arr[i] != " ") {
                newText += arr[i]
            }
        }
        setTextEntered(newText)
    }
    const REMOVE_BLANKSPACE = () => {
        let text = textEntered
        // split the above string into an array of strings 
        // whenever a blank space is encountered
        let arr = text.split(" ")
        
        let newText = ""
        for(let i = 0;i < arr.length;i++) {
            newText += arr[i]
        }                               
        setTextEntered(newText)
    }
    const REMOVE_EXTRA_BLANKSPCAE = () => {
        let text = textEntered
        // split the above string into an array of strings 
        // whenever a blank space is encountered
        let arr = text.split(" ")
        
        let newText = ""
        // joining the elements from the array accordingly
        // to obtain what we want.
        for(let i = 0;i < arr.length;i++) {
            if(arr[i] != " " && arr[i] != "") {
                newText += arr[i] + " "
            }             
        }     

        setTextEntered(newText)
    }

    return (
        <>
            <div className={`bg-${props.mode}`}>
                <div className='image-Heading p-3'>
                    <a href="https://img.icons8.com" target="_blank">
                        <img className='mb-1' width="100" height="100" src="https://img.icons8.com/plasticine/100/bookmark--v2.png" alt="bookmark--v2" />
                    </a>
                    <a href="https://react.dev" target="_blank">
                        <img src={reactLogo} width="100" height="100"className="logo react" alt="React logo" />
                    </a>
                </div>
                
                <h1 className={`d-flex justify-content-center text-${props.mode === 'dark'?'light':'dark'}`}> Textutils + React </h1>
            
                
                <form className="form-floating container my-3" method="get">
                    <div className="my-1">
                        <div className="d-flex justify-content-between my-3">
                            <div className={`text-${props.mode === 'dark'?'light':'dark'}`} style={{fontSize:'24px'}}>
                                <div className="word-cnt">words: {textEntered.split(/\s+/).filter((element) => {return element.length!=0}).length}</div>
                                <div className="character-cnt">character: {textEntered.length}</div>
                            </div>
                            <div className="mx-2">
                                <button className="mr-1 m-1 btn btn-outline-secondary rounded-pill" style={{fontSize:'17px'}} type="button" onClick={COPY} >Copy</button>
                                <button className="mx-2 m-1 btn btn-primary rounded-pill" style={{fontSize:'17px'}} type="button" onClick={eraseText} >Clear Textarea</button>
                            </div>
                        </div>
                        <div className="form-floating">
                            <textarea 
                                className="form-control" 
                                value={textEntered}
                                placeholder="Enter Text Here" 
                                id="floatingTextarea2"
                                onChange={handleChange}  
                                style={{background:`${props.mode === 'dark'?'#292535':'white'}`,color:`${props.mode === 'dark'?'white':'black'}`}} 
                                ></textarea>
                            <label htmlFor="floatingTextarea2" className={`text-${props.mode === 'dark'?'dark':'dark'}`} >Enter Text Here</label>        
                        </div>
                    
                        <button className="mx-1 my-2 btn btn-outline-primary" type="button" onClick={TO_LOWERCASE}> All Lower-Case</button>
                        <button className="mx-1 my-2 btn btn-outline-primary" type="button" onClick={TO_UPPERCASE}> All Upper-Case</button>
                        <button className="mx-1 my-2 btn btn-outline-primary" type="button" onClick={CAPATALIZE}> Capatalize</button>
                        <button className="mx-1 my-2 btn btn-outline-primary" type="button" onClick={REMOVE_PUNCATIONS}> Remove Puncations</button>
                        <button className="mx-1 my-2 btn btn-outline-primary" type="button" onClick={REMOVE_BLANKSPACE} >Remove Blankspace</button> 
                        <button className="mx-1 my-2 btn btn-outline-primary" type="button" onClick={REMOVE_EXTRA_BLANKSPCAE}> Remove Extra Blankspcae </button>                                    

                    </div>
                </form>
                <Footer mode={props.mode}/>
            </div>
        </>
    )
}
