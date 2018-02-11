import React, { Component } from 'react'
import { Button, ButtonGroup, FormGroup, FormControl } from 'react-bootstrap'

class WritingArea extends Component {
	constructor(props) {
    super(props)
    this.state = { currSentence: '' }
  }

    handleChange = (e) => {
      this.setState({ currSentence: e.target.value });
    }

	render() {
		return (
			<div>
		  <FormGroup controlId="formControlsTextarea">
            <FormControl className="writingarea"
                         value={this.state.currSentence}
                         componentClass="textarea"
                         placeholder="Write a story..."
                         onChange={this.handleChange} />
          </FormGroup>
          <ButtonGroup>
          <Button className="button" onClick={() => this.props.nextTurn(this.state.currSentence)}>Next turn</Button>
          <Button className="button" onClick={() => this.props.setComplete(this.state.currSentence)}>Story is complete</Button>
          </ButtonGroup>
          </div>

		)
	}
}

export default WritingArea
