
import ProjectView from "./projects/ProjectView";
import snake from "../assets/snake.png";
import Phonebook from "../assets/Phonebook.png";
import clothingSite from "../assets/clothingSite.png";

const projectDb = [

      {
        name: '2sure Clothing site',
        linkSource: 'https://github.com/quirkyexplorer/shopSiteNext',
        linkLive: 'https://2sureclothing.vercel.app/',
        description: `I created my sister a website for her to display her clothing produtcs, 
        here I used postgresql for the dabase to store the products information and links to images, I used image kit for 
        hosting the images as well as uploading them from an admin side. I'm still working out how to have emails sent for contact
        as well as updating the design with a new color palette, so it is a work in progress. `,
        image: clothingSite,
    },
    
    {   
        name: 'Snake',
        linkSource: 'https://github.com/quirkyexplorer/SnakeGame',
        linkLive: 'https://2023snake-game-2023.netlify.app/',
        description:` Using the power of HTML5 Canvas, I crafted my version fo the game where you control a slithering serpent,
         gobbling up apples, and growing your snake. 
        The goal is simple: achieve the highest score without crashing into walls or your own tail.`,
        image: snake,
    },
    {
        name: 'Phonebook App',
        linkSource: 'https://github.com/quirkyexplorer/phonebook_backend',
        linkLive: 'https://phonebook-test-0hlq.onrender.com/',
        description: `This was my first full stack project, 
        the idea was to create a basic list of contacts that I could add or remove. 
        uses MongoDb to persists the data, 
         I used mongoose to create the model. Also express and node.js for the backend, 
         I used postman to test the API. 
        For the front-end I used react.js as the javascript library, Axios for the API requests 
        and minimal css for the styling. `,
        image: Phonebook,
    },

    
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


