import React from "react";
import axios from 'axios'
import Textbox from "./components/Textbox";

class App extends React.Component {
  state = {video: [], selectedVideo: null};

  fileSelectedHandler = event => {
    this.setState({
      selectedFile: event.target.files[0]
    })
  }

  fileUploadHandler = () => {
    const fd = new FormData()
    fd.append('image', this.state.selectedFile, this.state.selectedFile.name);
    axios.post('TARGETTED URL SHOULD BE INSERTED HERE', fd)
    .then(res => {
      console.log(res)
    });
  }

  render() {
    return (
      <div className="ui container">
        <Textbox onTermSubmit={this.onTermSubmit} />
        <input type = "file" onChang={this.fileSelectedHandler} />
        <button onClick={this.fileUploadHandler}>Upload</button>
      </div>
    )
  }
}

export default App;