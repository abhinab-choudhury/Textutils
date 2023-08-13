import './styles.css'
import { useState } from 'react'
import PropTypes from 'prop-types'

export default function TextInfo(props) {

    const [display_wordCnt, setDisplayWordCnt] = useState('d-none')
    const [display_spaceCnt, setDisplaySpaceCnt] = useState('d-none')

    return (
        <div className='TextInfo'>
            <div className="d-flex justify-content-end">
                <div className={`word-cnt ${display_wordCnt} mx-2`}>
                    <h4>Word Count : <span>{props.word_cnt}</span> </h4> 
                </div>
                <div className={`word-cnt ${display_spaceCnt} mx-2`}>
                    <h4>Space Count : <span>{props.space_cnt}</span> </h4> 
                </div>
            </div>
            <div className="d-flex justify-content-end">
                    <div className="mx-2">
                        <div className="form-check form-switch">
                            <input 
                                className="form-check-input" 
                                onClick={() => {
                                    if(display_wordCnt === 'd-none'){
                                        setDisplayWordCnt('d-flex')
                                    } else{
                                        setDisplayWordCnt('d-none')
                                    } 
                                }}  
                                type="checkbox" 
                                role="switch" 
                                id="word_cont" />
                            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Word Count</label>
                        </div>
                    </div>
                    <div className="mx-1">
                        <div className="form-check form-switch">
                            <input 
                                className="form-check-input" 
                                onClick={() => {
                                    if(display_spaceCnt ==='d-none'){
                                        setDisplaySpaceCnt('d-flex')
                                    } else{
                                        setDisplaySpaceCnt('d-none')
                                    } 
                                }} 
                                type="checkbox" 
                                role="switch" 
                                id="word_cont" />
                            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Space Count</label>
                        </div>
                    </div>
                </div> 
        </div>
    )
}

TextInfo.propTypes = {
    word_cnt:PropTypes.string.isRequired,
    space_cnt:PropTypes.string.isRequired
}