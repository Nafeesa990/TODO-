import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Nav1() {
  return (
    <>
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">TODO APP</Navbar.Brand>
          <Nav>
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/signup">Signup</Nav.Link>
            <Nav.Link href="/addtask">Add Task</Nav.Link>
            <Nav.Link href="/view">Task View</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      
    </>
  );
}

export default Nav1;