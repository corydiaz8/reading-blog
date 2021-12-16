// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Nav, Navbar, NavDropdown } from 'react-bootstrap'
// import Carousel from 'react-bootstrap/Carousel'
import Heading from './components/Heading'
import Rotation from './components/Rotation';


function App () {
  return (
    <div className="App">
      <Heading />
      <div className="content">
        <Rotation />
      </div>
    </div>
  );
}

export default App;
