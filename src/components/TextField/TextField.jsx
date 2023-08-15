import "./sytles.css"
import { useState } from "react"

export default function TextField() {

    const [textEntered, setTextEntered] = useState("")

    let cnt = 0
    const handleChange = (event) => {
        cnt++;
        setTextEntered(event.target.value)
    }

    return (
        <>
        <div className="container">
        <div className="form-check form-switch mx-3">
            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked"
            onClick={() => {
                const element = document.querySelector(".text-info")
                if(element.style.display == "flex"){
                    element.style.display = "none"
                    document.querySelector(".count-lable").innerHTML = "show word and character count"
                }else{
                    element.style.display = "flex"
                    document.querySelector(".count-lable").innerHTML = "hide word and character count"

                }
            }} />
            
            <label className="count-lable form-check-label" htmlFor="flexSwitchCheckDefault">show word and character count </label>
            
            <div className="text-info">
                <span className="word-cnt mx-2">words: {textEntered == "" ? 0 : textEntered.split(" ").length}</span>
                <span className="character-cnt">character: {textEntered.length}</span>
            </div>             
        </div>
        <div className="d-flex justify-content-end p-0 m-0">
            <button className="mr-1 btn btn-outline-secondary rounded-pill" type="button"
                onClick={() => {
                    navigator.clipboard.writeText(textEntered)
                    alert("Text Coppied!")
                }}
            > Copy</button>
            
        </div> 
        <form className="form-floating container my-3" method="get">
                <textarea 
                    className="form-control textfield" 
                    value={textEntered} 
                    onChange={handleChange} 
                    placeholder="Enter Text Here" 
                    id="floatingTextarea2"></textarea>
                <label className="textfield-lable" htmlFor="floatingTextarea2">Enter your Text Here</label>
                <div className="d-flex justify-content-center features">
                    <button 
                        className="mx-1 btn btn-outline-primary"
                        type="button" 
                        onClick={() => {
                            setTextEntered(textEntered.toLowerCase())
                        }} 
                    >All Lower-Case</button>
                    <button 
                        className="mx-1 btn btn-outline-primary"
                        type="button" 
                        onClick={() => {
                            setTextEntered(textEntered.toUpperCase())
                        }} 
                    >All Upper-Case</button>
                    <button 
                        className="mx-1 btn btn-outline-primary"
                        type="button" 
                        onClick={() => {
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
                        }} 
                    >Capatalize</button>
                    <button 
                        className="mx-1 btn btn-outline-primary"
                        type="button" 
                        onClick={() => {
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
                        }} 
                    >Remove Puncations</button>
                    <button
                        className="mx-1 btn btn-outline-primary"
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
                    >Remove Blankspace</button> 

                    <button 
                        className="mx-1 btn btn-outline-primary"
                        type="button" 
                        onClick={() => {
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
                        }} 
                        >Remove Extra Blankspcae
                    </button>              
                </div>   
            </form>
        </div>
        </>
    )
}
