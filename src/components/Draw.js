import React, { Component } from 'react'
import { SketchField, Tools } from 'react-sketch'
import { Button, ButtonGroup } from 'react-bootstrap'
 
class CanvasArea extends Component {

     render() {
        return (
        	<div>
            <SketchField
              className="canvasarea"
              ref="canvasarea"
              tool={Tools.Pencil}
              color='black'
              lineWidth={3}
              width="40rem"
              height="20rem"
            />
            <ButtonGroup>
            <Button className="button" onClick={() => this.props.nextTurn(this.refs.canvasarea.toDataURL().toString())}>Next turn</Button>
            <Button className="button" onClick={() => this.props.setComplete(this.refs.canvasarea.toDataURL().toString())}>Story is complete</Button>
            </ButtonGroup>
            </div>
        )
     }
}

export default CanvasArea
