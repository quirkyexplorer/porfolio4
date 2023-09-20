
import './styles.scss';
import { Table } from 'react-bootstrap'
import Project from './components/Project';
import Hero from './components/Hero';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <div className='container'>
        <Hero/>
        <About/>
        <Project/>
        <Contact/>
    </div>
  );
}

export default App;
