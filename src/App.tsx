import * as React from 'react'
import { BrowserRouter } from 'react-router-dom';
import {Container} from 'react-bootstrap'
import TopNav from './components/TopNav'
import Main from './views/Main'


const App = () => {
  return (
    <BrowserRouter>
    <Container>
      <TopNav/>
      <Main/>
     </Container>
    </BrowserRouter>
  )
}

export default App;
