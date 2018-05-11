import React from "react"
import TopicForm from "../topic-form"
import Topic from "../topic"
import AdminView from "../admin-view"


export default class HomeView extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      questions: [],
      answers: []
    }
  }

  componentDidMount() {
    fetch("http://localhost:8080/faq").then(response => (
      response.json()
    )).then(json => {
      console.log('questions: ', json)
      this.setState({ questions: json })
      this.getAnswers()
    })
  }

  getAnswers = () => {
    fetch("http://localhost:8080/answers").then(response => (
      response.json()
    )).then(json => {
      this.setState({ answers: json })
    })
  }

  handleNewTopic = topic => {
    this.setState({
      questions: [topic, ...this.state.questions]
    })
  }

  render() {
    return (
      <div >
        <h4>Ask your question:</h4>
        <hr />
        <TopicForm onNewTopic={this.handleNewTopic} />
        <section>
          <h4>Most recent questions:</h4>
          <hr />

          {this.state.questions.map(question => {

            const answers = this.state.answers.filter(answer => answer.questionId === question._id)

            return <Topic
                headline={question.headline}
                content={question.content}
                name={question.name}
                date={question.date}
                answers={answers} />
          })}

        </section>
      </div>
    )
  }
}
