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

      <div>
        <button className="question-button" onClick={this.handleClick}>
      </button>
      </div>
    </div>
    )
  }
  }





export default Question
