import React, {Component} from 'react';
import './App.css';
import Form from 'react-bootstrap/Form';
//import Marked from 'react-bootstrap/marked';

//let marked = require("marked");

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      markdown: ""
    };
    this.updateMarkdown = this.updateMarkdown.bind(this);
  }
state = {

}

updateMarkdown(markdown){
  this.setState({markdown});
}

render() {
  let {markdown} = this.state;
  console.log(markdown);
  return (
    <div className="App">
      <div>
      <Form.Group controlId="formGroupEmail">
        <Form.Label>Markdown Input Field</Form.Label>
        <Form.Control as="textarea" placeholder = "Enter markdown here" rows="3" value = {markdown} onChange = {this.updateMarkdown}/>
      </Form.Group>
      </div>
      <div>
        <h1>Markdown Output</h1>
        <div></div>
      </div>
    </div>
  );
}
}

export default App;
