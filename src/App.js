import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Registration from './Pages/Registration';
import Main from './Pages/Main';


function App() {
  return (  
    <Router>
      <Route path="/" exact render={()=> <Main />  } />
      <Route path="/registration"  render={()=> <Registration />  } />
    </Router>
  );
}

export default App;
