import project from "../../assets/project.jpg";

 export default function ProjectView() {

    return (
        <div className="row">
            <div className="col-lg-4 col-sm-12">
              <div className="project-wrapper__text">
                <h3 className='project-wrapper__text-title'>Project Title</h3>
                <div>
                    <p className="mb-4">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                        Excepturi neque, ipsa animi maiores repellendus distinctio aperiam
                        earum dolor voluptatum consequatur blanditiis inventore debitis
                        fuga numquam voluptate ex architecto itaque molestiae.
                    </p>
                </div>
                <a
                  rel='noreferrer'
                  target='_blank'
                  className='cta-btn cta-btn--hero'
                  href='#!'
                >
                  See Live
                </a>
                <a
                  rel='noreferrer'
                  target='_blank'
                  className='cta-btn cta-btn--hero'
                  href='#!'
                >
                  Source Code
                </a>
              </div>
            </div>
            <div className='col-lg-8 col-sm-12'>
              <div className='project-wrapper__image load-hidden'>
                <a rel='noreferrer' href='#!' target='_blank'>
                <img alt='project' src={project} />
                </a>
              </div>
            </div>
          </div>
    )
 }