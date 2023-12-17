import project from "../../assets/project.jpg";




 export default function ProjectView({ object }) {
    const { name, linkSource, linkLive, description, image } = object;
    return (
        <div className="row">
            <div className="col-lg-4 col-sm-12">
              <div className="project-wrapper__text">
                <h3 className='project-wrapper__text-title'>{object.name}</h3>
                <div>
                    <p className="mb-4">
                        {object.description}
                    </p>
                </div>
                <a
                  rel='noreferrer'
                  target='_blank'
                  className='cta-btn cta-btn--hero'
                  href={linkLive}
                >
                  See Live
                </a>
                <a
                  rel='noreferrer'
                  target='_blank'
                  className='cta-btn cta-btn--hero'
                  href={linkSource}
                >
                  Source Code
                </a>
              </div>
            </div>
            <div className='col-lg-8 col-sm-12'>
              <div className='project-wrapper__image'>
                <a rel='noreferrer' href={linkLive} target='_blank'>
                <img alt='project' src={image} />
                </a>
              </div>
            </div>
          </div>
    )
 }