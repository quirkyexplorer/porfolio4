import { ReactComponent as GithubSvg} from "../assets/github-mark-white.svg"
import { ReactComponent as LinkedInSvg } from "../assets/linkedin.svg"
import { ReactComponent as EmailSvg } from "../assets/email.svg"
import { ReactComponent as PhoneSvg } from "../assets/phone.svg"
import { ReactComponent as InstaSvg } from "../assets/insta.svg"

export default function Contact() {
    return (
        <div id="contactWrapper"> 
            <h2 id='contact'>Contact me</h2>
            <div className="svgContainer">
                <a href="https://github.com/quirkyexplorer">
                    <GithubSvg style={{width: "4rem", height: "4rem"}} />
                </a>
                <a href="https://www.linkedin.com/in/daniel-segura-1bb80081/">
                      <LinkedInSvg style={{width: "4rem", height: "4rem"}} />
                </a>
                <a href="https://www.instagram.com/whenenergycalls">
                    <InstaSvg style={{width: "4rem", height: "4rem"}} />
                </a>
                {/* Add href attribute with your email link */}
                <a href="mailto:segurosoftengineer@gmail.com">
                    <EmailSvg style={{width: "4rem", height: "4rem"}} />
                </a>
                {/* Add href attribute with your phone number link */}
                <a href="tel:+14808759253">
                    <PhoneSvg style={{width: "4rem", height: "4rem"}} />
                </a>
            </div>
            
        </div>
    );
}