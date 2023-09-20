
import './styles.scss';
import { Table } from 'react-bootstrap'
import Project from './components/Project';
import Hero from './components/Hero';

function App() {
  return (
    <div className='container'>
        <Hero/>
        
     <h2 id='about'>about me</h2>


     <h2 id='projects'>my projects</h2>

        <Table striped>
            <Project/>
        </Table>


     <h2 id='contact'>contact me</h2>
    </div>
  );
}

export default App;
