import { Slide, Fade } from "react-awesome-reveal";

export default function Hero() {

    return (
        <section id='hero'>
          <div className='container'>
            <Slide duration={1800}>
            <Fade>
                    <h1 className='hero-title'> 
                        Hi my name is 
                        <br />
                        <Fade delay={1500}>
                            <span className='text-color-main'>  Daniel Segura</span>     
                        </Fade>
                        Jr. Software Developer
                    </h1> 

            </Fade>
            </Slide>
          </div>
        </section>
    );
}