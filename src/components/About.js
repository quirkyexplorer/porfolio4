import profile from '../assets/profile.jpg';
import { Fade } from "react-awesome-reveal";


export default function About() {
    return (
        <div id='about-content'>
            <Fade delay={900}>
                <h1 className='about'>About me</h1>     
            </Fade>
            <div className='image-container'>
                <div>
                    <img 
                    className='image'
                    height="auto"
                    width="300px"
                    alt="man in a suit"
                    src={profile}
                    />
                </div>
                <div className="text-description">
                Currently working as a Jr. developer in TechJoy, I have experience with react, javascript, python, node and mongoDB.
                <br/>
                <br/>
                In my freetime you can catch me reading about tech stacks, and dancing salsa. 
                </div>
                
            </div>
        </div>
        
    );
}