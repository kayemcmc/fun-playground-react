import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from '../components/Home';
import About from '../components/About';
import Contact from '../components/Contact';
import Navbar from '../components/Navbar';


class DynamicImport extends Component {
  state = {
    component: null
  }
  componentWillMount() {
    this.props.load()
      .then((mod) => this.setState(() => ({
        component: mod.default
      })))
  }
  render() {
    return this.props.children(this.state.component)
  }
}

const Work = (props) => (
  <DynamicImport load={() => import('../components/work/Work')}>
  {(Component) => Component === null
    ? <h1>Loading</h1>
    : <Component {...props} />}
  </DynamicImport>
)

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Route path='/' exact component={Home} />
          <Route path='/about' component={About} />
          <Route path='/work' component={Work} />
          <Route path='/contact' component={Contact} />
        </div>
      </Router>
    );
  }
}


export default App;
