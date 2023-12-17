
import ProjectView from "./projects/ProjectView";
import snake from "../assets/snake.png";
import Phonebook from "../assets/Phonebook.png"

const projectDb = [
    {   
        name: 'Snake',
        linkSource: 'https://github.com/quirkyexplorer/SnakeGame',
        linkLive: 'https://2023snake-game-2023.netlify.app/',
        description:'Dive into a world of retro gaming nostalgia with my addictive Snake game. Using the power of HTML5 Canvas, I crafted my version fo the game where you control a slithering serpent, gobbling up apples, and growing your snake. The game challenges your reflexes as you navigate through the ever-shrinking maze of your own creation. The goal is simple: achieve the highest score without crashing into walls or your own tail. With lively sound effects and an in-game score display, this classic remake blends modern web technologies with timeless fun. ',
        image: snake,
    },
    {
        name: 'Phonebook App',
        linkSource: 'https://github.com/quirkyexplorer/phonebook_backend',
        linkLive: 'https://phonebook-test-0hlq.onrender.com/',
        description: `This was my first full stack project, the idea was to create a basic list of contacts that I could add or remove. I followed some tutorials on MongoDb to be able to create the database that persists the data, also I used mongoose to create the model, used express, node.js for the backend, and I used postman to test the API. 
        For the front-end I used react.js as the javascript library, Axios for the API requests and minimal css for the styling.  The app is missing other features like user login, testing in every level of the app. But my goal was just to have an app work from front to end with database interaction for learning purposes. `,
        image: Phonebook,
    }
 ]

export default function Project() {
  return (
    <section id="projects">
      <div className="container">
        <div className="project-wrapper">
          <h2 className="section-title dark-blue-text">Projects</h2>
          { 
            projectDb.map( (project) => (   
                <ProjectView  object={project}  />
            ))
          }
         
        </div>
      </div>
    </section>
  );
}
