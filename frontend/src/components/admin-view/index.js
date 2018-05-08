import React from "react"
import Question from "./question"

export default class AdminView extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      // name: "",
      // headline: "",
      // content: "",
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


  // handleName = event => {
  //   this.setState({
  //     name: event.target.value
  //   })
  // }
  //
  // handleHeadline = event => {
  //   this.setState({
  //     headline: event.target.value
  //   })
  // }
  //
  // handleContent = event => {
  //   this.setState({
  //     content: event.target.value
  //   })
  // }


  render() {
    return (
      <div>
        {this.state.questions.map((question, index) => {
          return <Question
            key={index}
            name={question.name}
            header={question.header}
            content={question.content}
            id={question.id}
            content={question.content} />
        })}
      </div>

  ) }
}
