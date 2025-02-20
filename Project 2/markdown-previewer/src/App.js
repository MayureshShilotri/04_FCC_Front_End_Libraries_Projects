import React, {Component} from 'react';
import './App.css';
import Marked from '../node_modules/marked';

let marked = require("marked");

const startingState = `
  # Welcome to my React Markdown Previewer!

  ## This is a sub-heading...
  ### And here's some other cool stuff:

  Heres some code, \`<div></div>\`, between 2 backticks.

  \`\`\`
  // this is multi-line code:

  function anotherExample(firstLine, lastLine) {
    if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
      return multiLineCode;
    }
  }
  \`\`\`

  You can also make text **bold**... whoa!
  Or _italic_.
  Or... wait for it... **_both!_**
  And feel free to go crazy ~~crossing stuff out~~.

  There's also [links](https://www.freecodecamp.com), and
  > Block Quotes!

  And if you want to get really crazy, even tables:

  Wild Header | Crazy Header | Another Header?
  ------------ | ------------- | -------------
  Your content can | be here, and it | can be here....
  And here. | Okay. | I think we get it.

  - And of course there are lists.
    - Some are bulleted.
       - With different indentation levels.
          - That look like this.


  1. And there are numbererd lists too.
  1. Use just 1s if you want!
  1. But the list goes on...
  - Even if you use dashes or asterisks.
  * And last but not least, let's not forget embedded images:

  ![React Logo w/ Text](https://goo.gl/Umyytc)

`;
class App extends React.Component {
  state = {
    input: startingState
  }

  handleChange = (e) => {
    this.setState({
      input: e.target.value
    })
  }

  render() {
    const {input} = this.state;
    const markdown = marked(input , {breaks: true});
    return (
      <div>
        <h1>Markdown Previewer</h1>
        <div>
          <div>
          <h3>Enter Here</h3>
            <textarea className = "form-control" id="editor" value = {input} onChange = {this.handleChange}/>
          </div>
          <div>
            <h3>See Here</h3>
            <div dangerouslySetInnerHTML = {{__html: markdown}}  id="preview">
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
