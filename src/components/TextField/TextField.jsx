import './sytles.css'
import { useState } from "react"
import TextInfo from '../TextInfo/TextInfo'

export default function TextField() {

    const [textEntered, setTextEntered] = useState()

    let cnt = 0
    const handleChange = (event) => {
        cnt++;
        setTextEntered(event.target.value)
    }

    let wcnt = cnt  
    let scnt = 0
    


    return (
        <>
            <TextInfo word_cnt = {wcnt} space_cnt = {scnt} />
            <form className="form-floating container my-3" method="get">
                <textarea className="form-control textfield " value={textEntered} onChange={handleChange} placeholder="Enter Text Here" id="floatingTextarea2"></textarea>
                <label className='textfield-lable' htmlFor="floatingTextarea2">Enter your Text Here</label>
                <div className="d-flex justify-content-center features">
                    <button 
                        className="mx-1"
                        type="button" 
                        onClick={() => {
                            setTextEntered(textEntered.toLowerCase())
                        }} 
                        class="btn btn-outline-primary"
                    >All Lower-Case</button>
                    <button 
                        className="mx-1"
                        type="button" 
                        onClick={() => {
                            setTextEntered(textEntered.toUpperCase())
                        }} 
                        class="btn btn-outline-primary"
                    >All Upper-Case</button>
                    <button 
                        className="mx-1"
                        type="button" 
                        onClick={() => {
                            let text = textEntered
                            // split the above string into an array of strings 
                            // whenever a blank space is encountered
                            let arr = text.split(" ")

                            for(let i = 0;i < arr.length;i++) {
                                arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1)
                            }
                            // Join all the elements of the array back into a string 
                            // using a blankspace as a separator 
                            const Capatalize = arr.join(" ")
                            setTextEntered(Capatalize)
                        }} 
                        class="btn btn-outline-primary"
                    >Capatalize</button>
                    <button 
                        className="mx-1"
                        type="button" 
                        onClick={() => {
                            let text = textEntered
                            let newText = ''
                            let arr = text.split("")
                            
                            for(let i = 0;i < arr.length;i++) {
                                if(arr[i] != '.' && arr[i] != '?' && arr[i] != '!' && arr[i] != ','
                                   && arr[i] != ':' && arr[i] != ';' && arr[i] != '_' && arr[i] != '-'
                                   && arr[i] != '(' && arr[i] != '[' && arr[i] != '{' && arr[i] != '}'
                                   && arr[i] != '\'' && arr[i] != '\"' && arr[i] != ']' && arr[i] != ')'
                                   && arr[i] != '/' && arr[i] != " ") {
                                    newText += arr[i]
                                }
                            }
                            setTextEntered(newText)
                        }} 
                        class="btn btn-outline-primary"
                    >Remove Puncations</button>
                    <button
                        className="mx-1"
                        type="button" 
                        onClick={() => {
                            let text = textEntered
                                // split the above string into an array of strings 
                                // whenever a blank space is encountered
                                let arr = text.split(" ")
                                
                                let newText = ""
                            for(let i = 0;i < arr.length;i++) {
                                newText += arr[i]
                            }                               
                            setTextEntered(newText)
                        }} 
                        class="btn btn-outline-primary"
                    >Remove Blankspace</button>               
                </div>   
                
            </form>
        </>
    )
}
