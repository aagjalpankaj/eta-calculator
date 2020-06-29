import React from 'react';
import './App.css';

import { Navbar, Container, Form, InputGroup, FormControl, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  function calculateEta() {
    alert();
  }

  return (
    <div>
      <Navbar bg="primary" variant="dark">
        <Navbar.Brand href="#home">ETA Calculator</Navbar.Brand>
      </Navbar>

      <br></br>

      <Container>
          <Form>
            <InputGroup className="mb-3">
              <FormControl
                placeholder="Enter task story points"
                aria-label="Enter task story points"
                aria-describedby="basic-addon2"
              />
              <InputGroup.Append>
                <Button variant="outline-secondary" onClick={calculateEta}>Calculate ETA</Button>
              </InputGroup.Append>
            </InputGroup>
          </Form>
        </Container>

    </div>
  );
}

export default App;
