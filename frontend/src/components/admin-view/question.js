import React from "react"

class Question extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      answers: []
    }
  }
//sendform replay
componentDidMount(){
  fetch(`http://localhost:8080/faq/${this.props.id}/answers`).then(response => (
    response.json()
  )).then(json => {
    this.setState({ answers: json })
  })
 }

  handleClick = () => {
    const id = this.props.id
  }

  render() {
    return(
<div>
  {this.state.answers.map((answer) =>
    <p>{answer.content}</p>)}
  <div>
  </div>
  <div>{this.props.name}</div>
  <div>{this.props.content}</div>
  <div>{this.props.header}</div>
  {/* <div>{this.props.id}</div> */}

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
