import React, {Component} from 'react';
import './App.css';
import Marked from '../node_modules/marked';

let marked = require("marked");

class App extends React.Component {
  state = {
    input: ''
  }

  handleChange = (e) => {
    this.setState({
      input: e.target.value
    })
  }

  render() {
    const {input} = this.state;
    const markdown = marked(input);
    return (
      <div>
        <h1>Markdown Previewer</h1>
        <div>
          <div>
          <h3>Enter Here</h3>
            <textarea className = "form-control" id="editor" value = {input} onChange = {this.handleChange}/>
          </div>
          <div id="preview">
            <h3>See Here</h3>
            <div dangerouslySetInnerHTML = {{__html: markdown}}>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
