import React from "react"

export default class Topic extends React.Component {

  render() {
    return (
      <div>
        <h1>{this.props.headline}</h1>
        <div>
          <p>{this.props.content}</p>
          <p>{this.props.name}</p>
          <p>{this.props.date}</p>
          {this.props.answers.map(answer =>
            <p>{answer.content}</p>)}
        </div>
      </div>
    )
  }
}
