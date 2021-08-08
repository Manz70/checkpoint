
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar , Container ,Nav,Form,Button } from 'react-bootstrap';


function App() {
  return (
    <div className="App">

 <Navbar bg="light" expand="sm" logo=''>
  <Container >
    <Navbar.Brand href="#home" logo="">PLAY</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#link">About Us</Nav.Link>
        <Nav.Link href="#link">Contact Us</Nav.Link>
        <Nav.Link href="#link">Register</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>

<Container style={{backgroundColor:'lightgreen'}}>
<h3 style ={{fontFamily : 'sans-serif' , fontSize : '25px' , textDecoration : 'underline'}}>Sign Up / Log in</h3>
<Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="success" type="submit">
    Submit
  </Button>
</Form>
</Container>
    </div>
  );
}

export default App;
