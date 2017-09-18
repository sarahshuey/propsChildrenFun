import React, { Component } from 'react';
import '../styles/App.css';
import BaseLayout from '../components/BaseLayout.js'
import ParentComponent from '../components/ParentComponent.js'



class DisplayComponent extends Component {
  render() {
    return (
      <div>{this.props.sayWhat}</div>
    );
  }
}


class App extends Component {
  render() {
    return (
      <div className="App">
        <BaseLayout>
        <ParentComponent/>
        </BaseLayout>
      </div>
    );
  }
}

export default App;
