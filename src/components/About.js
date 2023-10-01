import profile from '../assets/profile.jpg';
import { Fade } from "react-awesome-reveal";


export default function About() {
    return (

        <section id='about'>
            <div className='container'>
                <Fade delay={900}>
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
                        This is where you can describe about yourself. The more you
                        describe about yourself, the more chances you can!
                      </p>
                      <p className='about-wrapper__info-text'>
                      Extra Information about you! like hobbies and your goals.
                      </p>
                      <span className='d-flex mt-3'>
                        <a 
                          rel='noreferrer'
                          target='_blank'
                          className='cta-btn cta-btn--resume'
                          href='assets/resume.pdf'
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