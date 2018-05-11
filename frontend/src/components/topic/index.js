import React from "react"

export default class Topic extends React.Component {

  render() {
    return (
      <div>
        <h1>{this.props.headline}</h1>
        <div>
          <p className="content">{this.props.content}</p>
          <p className="names">{this.props.name}</p>
          <p>{this.props.date}</p>
          {this.props.answers.map(answer =>
            <p className="answerColor">{answer.content}</p>)}
        </div>
      </div>
    )
  }
}
