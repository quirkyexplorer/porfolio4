import profile from '../assets/profile.jpg';
import { Fade } from "react-awesome-reveal";
import ResumeV3 from '../assets/ResumeV3.pdf';

export default function About() {
    return (

        <section id='about'>
            <div className='container'>
                <Fade delay={100}>
                    <h1 className='section-title'>About me</h1>     
                </Fade>
                <div className='row about-wrapper'>
                  <div className='col-md-6 col-sm-12'>
                    <div className='about-wrapper__image load-hidden'>
                        <img 
                            className='image'
                            height="auto"
                            width="300px"
                            alt="man in a suit"
                            src={profile}
                            />
                    </div>
                  </div>
                  <div className='col-md-6 col-sm-12'>
                    <div className='about-wrapper__info'>
                      <p className='about-wrapper__info-text'>
                      I'm an avid React.js developer with a penchant for database communication. 
                      My journey in web development has led me through the realms of Node, Next.js, PostgreSQL, 
                      and MongoDB. I'm not just about code; 
                      I'm a strong advocate for designing robust APIs and a firm believer in Test-Driven Development 
                      (TDD) methodologies to ensure top-notch software quality.
                      </p>
                      <p className='about-wrapper__info-text'>
                      Beyond my professional life, I find joy in the rhythm of life through dancing salsa and kizomba. 
                      Much like database communication, these dances require a harmonious connection and precise timing, 
                      which I find exhilarating.  
                      
                      </p>
                      <span className='d-flex mt-3'>
                        <a 
                          rel='noreferrer'
                          target='_blank'
                          className='cta-btn cta-btn--resume'
                          href= {ResumeV3}
                        >
                        View Resume
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
            </div>
            
        </section>
        
    );
}