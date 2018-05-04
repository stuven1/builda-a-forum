import React from "react"

export default class AdminView extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "",
      headline: "",
      content: "",
      questions:[]
    }
  }

  componentDidMount() {
    this.getQuestions()
  }
  getQuestions = () => {
    fetch("http://localhost:8080/faq", {
      method: "GET"
    })
    .then((response) => {
      return response.json()
    })
    .then((json) => {
      console.log(json)
      this.setState({
        questions: json
      })

    })
    .catch(err => {
      // api down? request failed?
      console.log("Error!", err)
    })
  }


  handleName = event => {
    this.setState({
      name: event.target.value
    })
  }

  handleHeadline = event => {
    this.setState({
      headline: event.target.value
    })
  }

  handleContent = event => {
    this.setState({
      content: event.target.value
    })
  }

  renderQuestions() {
    return this.state.questions.map((question, index) => (
      <div key={index} >
        <div>{question.name}</div>
        <div>{question.header}</div>
        <div>{question.content}</div>
    </div>)
  )
  }

  render() {
    return (

      <div>
        {this.renderQuestions()}
        <label>
          <h3>Answer:</h3>
          <textarea
            name="content"
            value={this.state.content}
            onChange={this.handleContent} />
        </label>
        <button type="submit">Send</button>
      </div>
    )
  }
}
