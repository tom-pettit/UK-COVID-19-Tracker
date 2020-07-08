import React from 'react';
import Navbar from './components/Navbar'
import Dashboard from './components/Dashboard'
import About from './components/About'
import Graphs from './components/Graphs'
import { BrowserRouter, Route } from 'react-router-dom'
import DropdownMenu from './components/DropdownMenu';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App" style={{backgroundColor: '#002855'}}>
          <Navbar />
          <Route exact path='/' component={Dashboard} />
          <Route path='/dropdownmenu' component={DropdownMenu} />
          <Route path='/graphs' component={Graphs}/>
          <Route path='/about' component={About}/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
