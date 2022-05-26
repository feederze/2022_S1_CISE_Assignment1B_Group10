//Done all together
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../App.css'
import axios from 'axios'

class SubmissionForm extends Component {
  constructor() {
    super()
    this.state = {
      title: '',
      author: '',
      source: '',
      date: '',
      doi: '',
      practice: '',
      claimed: '',
      evidence: '',
      state: 'not moderated',
    }
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  onSubmit = e => {
    e.preventDefault()

    const data = {
      title: this.state.title,
      author: this.state.author,
      source: this.state.source,
      date: this.state.date,
      doi: this.state.doi,
      practice: this.state.practice,
      claimed: this.state.claimed,
      evidence: this.state.evidence,
      state: this.state.state,
    }

    axios
      .post('http://localhost:12345/api/article/', data)
      .then(res => {
        this.setState({
          title: '',
          author: '',
          source: '',
          date: '',
          doi: '',
          practice: '',
          claimed: '',
          evidence: '',
          // state:'',
        })
        this.props.history.push('/')
      })
      .catch(error => {
        console.log('Error in submission')
      })
  }
  render() {
    return (
      <form noValidate onSubmit={this.onSubmit}>
        <div className="group">
          <input
            type="text"
            name="title"
            placeholder="title"
            value={this.state.title}
            onChange={this.onChange}
          ></input>
          <br />
        </div>

        <div className="group">
          <input
            type="text"
            name="author"
            placeholder="author"
            value={this.state.author}
            onChange={this.onChange}
          ></input>
          <br />
        </div>

        <div className="group">
          <input
            type="text"
            name="source"
            placeholder="source"
            value={this.state.source}
            onChange={this.onChange}
          ></input>
          <br />
        </div>

        <div className="group">
          <input
            type="text"
            name="date"
            placeholder="date"
            value={this.state.date}
            onChange={this.onChange}
          ></input>
          <br />
        </div>

        <div className="group">
          <input
            type="text"
            name="doi"
            placeholder="doi"
            value={this.state.doi}
            onChange={this.onChange}
          ></input>
          <br />
        </div>

        <div className="group">
          <input
            type="text"
            name="practice"
            placeholder="practice"
            value={this.state.practice}
            onChange={this.onChange}
          ></input>
          <br />
        </div>

        <div className="group">
          <input
            type="text"
            name="claimed"
            placeholder="claimed"
            value={this.state.claimed}
            onChange={this.onChange}
          ></input>
          <br />
        </div>

        <div className="group">
          <input
            type="text"
            name="evidence"
            placeholder="evidence"
            value={this.state.evidence}
            onChange={this.onChange}
          ></input>
          <br />
        </div>

        {/* state is invisible for uploaders. 
        <div className="group">
          <input
            type='text'
            name='state'
            placeholder="evidence"
            value={this.state.state}
            onChange={this.onChange}>
          </input>
          <br />
        </div> */}

        <input type="submit" />
      </form>
    )
  }
}
export default SubmissionForm
