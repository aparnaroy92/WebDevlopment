import './App.css';
import {Navbar,Nav} from 'react-bootstrap'

function click() {
  window.open("https://www.google.com");
}

function App() {
  return (
    <div className="App">
      <div>
      <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">Link</Nav.Link>
        </Nav>
      </Navbar>
      </div>
      <header className="App-header">
        <p>
           Hello there, welcome to my first ReactJS page!
        </p> 
        <button onClick={click}>Click here to Google!</button>
      </header>
    </div>
  );
}

export default App;
