import React from "react"

class Question extends React.Component {
//sendform replay

  handleClick = () => {
    const id = this.props.id
  }

  render() {
    return(
<div>
  <div>{this.props.name}</div>
  <div>{this.props.content}</div>
  <div>{this.props.header}</div>
  <div>{this.props.id}</div>

  <div>
    <label>
      <h3>Reply message</h3>
      <textarea
        name="content"
        onChange={this.handleContent} />
    </label>
  </div>
  <button onClick={this.props.id} type="submit">Answer</button>
    </div>
    )
  }
  }

export default Question
