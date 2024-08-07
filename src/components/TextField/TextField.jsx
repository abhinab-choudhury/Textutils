import "./sytles.css"
import reactLogo from '../../assets/svg/react.svg'
import { useState, useRef, useEffect } from "react"
import PropTypes from "prop-types"
import ReactQuill from 'react-quill'

import 'react-quill/dist/quill.snow.css'

export default function TextField(props) {

    const [textEntered, setTextEntered] = useState(() => {
        return localStorage.getItem("textEntered") || ""
    })

    const quillRef = useRef(null);

    useEffect(() => {
        localStorage.setItem('textEntered', textEntered)
    }, [textEntered])

    const eraseText = (event) => {
        event.preventDefault();
        setTextEntered("")
    }
    
    const TO_LOWERCASE = (event) => {
        event.preventDefault();
        setTextEntered(textEntered.toLowerCase())

    }
    const TO_UPPERCASE = (event) => {
        event.preventDefault();
        setTextEntered(textEntered.toUpperCase())
    }
    const CAPATALIZE = (event) => {
        event.preventDefault();
        let text = textEntered
        // split the above string into an array of strings 
        // whenever a blank space is encountered
        let arr = text.split(" ")

        for (let i = 0; i < arr.length; i++) {
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
    const COPY = (event) => {
        event.preventDefault();
        navigator.clipboard.writeText(textEntered.replace(/<(?:"[^"]*"['"]*|'[^']*'['"]*|[^'">])+>/g, ""))
        alert("Text Coppied!")
    }

    const COPY_HTML = (event) => {
        event.preventDefault();
        navigator.clipboard.writeText(textEntered)
        alert("Html Text Copied!!")
    }
    const REMOVE_PUNCATIONS = (event) => {
        event.preventDefault();
        let text = textEntered
        let newText = ""
        let arr = text.split("")

        for (let i = 0; i < arr.length; i++) {
            if (arr[i] != "." && arr[i] != "?" && arr[i] != "!" && arr[i] != ","
                && arr[i] != ":" && arr[i] != ";" && arr[i] != "_" && arr[i] != "-"
                && arr[i] != "(" && arr[i] != "[" && arr[i] != "{" && arr[i] != "}"
                && arr[i] != "\"" && arr[i] != "\"" && arr[i] != "]" && arr[i] != ")"
                && arr[i] != "/" && arr[i] != " ") {
                newText += arr[i]
            }
        }
        setTextEntered(newText)
    }
    const REMOVE_BLANKSPACE = (event) => {
        event.preventDefault();
        let text = textEntered
        // split the above string into an array of strings 
        // whenever a blank space is encountered
        let arr = text.split(" ")

        let newText = ""
        for (let i = 0; i < arr.length; i++) {
            newText += arr[i]
        }
        setTextEntered(newText)
    }
    const REMOVE_EXTRA_BLANKSPCAE = (event) => {
        event.preventDefault();
        let text = textEntered
        // split the above string into an array of strings 
        // whenever a blank space is encountered
        let arr = text.split(" ")

        let newText = ""
        // joining the elements from the array accordingly
        // to obtain what we want.
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] != " " && arr[i] != "") {
                newText += arr[i] + " "
            }
        }

        setTextEntered(newText)
    }

    console.log(textEntered)

    return (
        <>
            <div className={`bg-${props.mode} text-${props.mode === 'dark' ? 'light' : 'dark'} textfield`}>
                <div style={{ width: "70%" }}>
                    <div className='image-Heading p-3'>
                        <a href="https://img.icons8.com">
                            <img className='mb-1' width="100" height="100" src="https://img.icons8.com/plasticine/100/bookmark--v2.png" alt="bookmark--v2" />
                        </a>
                        <a href="https://react.dev">
                            <img src={reactLogo} width="100" height="100" className="react-logo" alt="React-logo" />
                        </a>
                    </div>

                    <h1 className={`d-flex justify-content-center text-${props.mode === 'dark' ? 'light' : 'dark'}`}> Textutils + React </h1>

                    <form className="form-floating container my-3 textfield" method="get">
                        <div className="my-1">
                            <div className="d-flex justify-content-between my-2 infobar">
                                <div className={`text-${props.mode === 'dark' ? 'light' : 'dark'} d-flex`} style={{ fontSize: '24px' }}>
                                    <div className="word-cnt mx-2 text-">
                                        words: {
                                            textEntered.replace(/<(?:"[^"]*"['"]*|'[^']*'['"]*|[^'">])+>/g, "")
                                                .split(/\s+/)
                                                .filter((element) => element.length !== 0)
                                                .length
                                        }
                                    </div>
                                    <div className="character-cnt">
                                        character: {
                                            textEntered.replace(/<(?:"[^"]*"['"]*|'[^']*'['"]*|[^'">])+>/g, "").length
                                        }
                                    </div>
                                </div>
                                <div className="mx-2">
                                    <button className="mr-1 m-1 btn btn-outline-secondary rounded-md" style={{ fontSize: '17px', padding: '10px 20px' }} type="button" onClick={COPY} >Copy</button>
                                    <button className="mr-1 m-1 btn btn-outline-secondary rounded-md" style={{ fontSize: '17px', padding: '10px 20px' }} type="button" onClick={COPY_HTML} >Copy Html</button>
                                    <button style={{ fontSize: '17px' }} onClick={eraseText} >Clear Textarea</button>
                                </div>
                            </div>
                            <ReactQuill ref={quillRef} className="textarea pb-5"  theme="snow" value={textEntered} onChange={setTextEntered} />

                            <button onClick={TO_LOWERCASE}> All Lower-Case</button>
                            <button onClick={TO_UPPERCASE}> All Upper-Case</button>
                            <button onClick={CAPATALIZE}> Capatalize</button>
                            <button onClick={REMOVE_PUNCATIONS}> Remove Puncations</button>
                            <button onClick={REMOVE_BLANKSPACE} >Remove Blankspace</button>
                            <button onClick={REMOVE_EXTRA_BLANKSPCAE}> Remove Extra Blankspcae </button>

                        </div>
                    </form>
                </div>
            </div>

        </>
    )
}


TextField.propTypes = {
    mode: PropTypes.string.isRequired,
}
