import React from "react";
import EmailEditor from "react-email-editor";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      html: "",
      json: "",
    };
  }
  //to export as html
  exportHtml = () => {
    this.editor.exportHtml((data) => {
      const { design, html } = data;
      this.setState({ html: "hello this is html" });
      console.log("export Html", html);
      console.log("design", design);
    });
  };
  // saving Design
  saveDesign = () => {
    this.editor.saveDesign((design) => {
      console.log("saveDesign", design);
    });
  };
  // loading json(template)
  onLoad = (data) => {
    const json = data.design.json;
    this.editor.loadDesign(json);
  };
  render() {
    return (
      <div>
        <button onClick={() => this.exportHtml()}>Export Html</button>
        <EmailEditor ref={(editor) => (this.editor = editor)} />
      </div>
    );
  }
}

export default App;
