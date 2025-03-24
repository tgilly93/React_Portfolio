
import React from 'react';
import NavBar from './components/NavBar';

import './App.css'
import Container from 'react-bootstrap/esm/Container';

function App() {
  

  return (
    <>
    <NavBar />
    <Container className='text-center mt-5'>
      <h1>Welcome to my Portfolio!</h1>
      <p>This is a portfolio with Light & Dark mode.</p>
    </Container>
    </>
  )
}

export default App;
