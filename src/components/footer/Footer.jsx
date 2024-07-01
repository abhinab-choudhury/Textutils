import './styles.css'
import githubIcon from './../../assets/png/github.png'
import instagramIcon from './../../assets/svg/icons8-instagram.svg'
import linkedinIcon from './../../assets/png/linkedin.png'
import twitterIcon from './../../assets/png/twitterx.png'

import LightgithubIcon from './../../assets/png/icons8-github-50.png'
import LightinstagramIcon from './../../assets/png/icons8-instagram-50.png'
import LightlinkedinIcon from './../../assets/png/icons8-linkedin-50.png'
import LighttwitterIcon from './../../assets/png/icons8-twitter-50.png'
import PropTypes from 'prop-types'

export default function Footer(props) {
    return (
        <>
            <div className={`bg-${props.mode} footer`}>
                <ul className="social-media text-mutted py-3">
                    <li>
                        <a href="https://www.linkedin.com/in/abhinab-choudhury-18022822b/">
                            <img width="38" height="38" src={`${props.mode === 'light' ? linkedinIcon : LightlinkedinIcon}`} alt="linkedin"/>
                        </a> 
                    </li>
                    <li>
                        <a href="https://twitter.com/abhinabc_">
                            <img width="38" height="38" src={`${props.mode === 'light' ? twitterIcon : LighttwitterIcon}`} alt="twitterx"/>
                        </a> 
                    </li>
                    <li>
                        <a href="https://www.instagram.com/abhinab_choudhury_/">
                            <img width="38" height="38" src={`${props.mode === 'light' ? instagramIcon : LightinstagramIcon}`} alt="external-instagram-social-media-tanah-basah-glyph-tanah-basah"/>
                        </a> 
                    </li>
                    <li>
                        <a href="https://github.com/abhinab-choudhury/">
                            <img width="38" height="38" src={`${props.mode === 'light' ? githubIcon : LightgithubIcon}`} alt="github" />
                        </a> 
                    </li>
                </ul> 
            </div>
        </>
    )
}

Footer.propTypes = {
    mode: PropTypes.string.isRequired,
}