import { Slide, Fade } from "react-awesome-reveal";

export default function Hero() {

    return (
        <div id='hero'>
       <Slide>
       <Fade>
            <h1 className='hero-title'> 
                Hi my name is 
                <br />
            <span className='text-color-main'>  Daniel Segura</span> 
                <br />
                Jr. Software Developer
            </h1> 

       </Fade>
       </Slide>

     </div>
    );
}