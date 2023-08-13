import './styles.css'

export default function Footer() {
    return (
        <>
            <div className="footer container-fluid p-4">
                <div className="copywrite d-flex justify-content-end text-muted">
                    Version-1.1.0 
                </div> 
                <ul className="social-media text-mutted">
                    <li>
                        <a href="https://www.linkedin.com/in/abhinab-choudhury-18022822b/">
                            <img width="38" height="38" src="https://img.icons8.com/ios-filled/50/linkedin.png" alt="linkedin"/>
                        </a> 
                    </li>
                    <li>
                        <a href="https://twitter.com/abhinabc_">
                            <img width="38" height="38" src="https://img.icons8.com/ios-filled/38/twitterx.png" alt="twitterx"/>
                        </a> 
                    </li>
                    <li>
                        <a href="https://www.instagram.com/_abhinab_choudhury_/">
                            <img width="38" height="38" src="https://img.icons8.com/external-tanah-basah-glyph-tanah-basah/48/external-instagram-social-media-tanah-basah-glyph-tanah-basah.png" alt="external-instagram-social-media-tanah-basah-glyph-tanah-basah"/>
                        </a> 
                    </li>
                    <li>
                        <a href="https://github.com/abhinab-choudhury/">
                            <img width="38" height="38" src="https://img.icons8.com/glyph-neue/38/github.png" alt="github" />
                        </a> 
                    </li>
                </ul>
                <div className="copywrite d-flex justify-content-end">
                    
                </div>  
            </div>
        </>
    )
}
