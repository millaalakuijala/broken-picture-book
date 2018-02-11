import React, {Component} from 'react';
import socketIOClient from "socket.io-client"
import './css/Areas.css'
import './css/Header.css'
import CanvasArea from './Draw'
import WritingArea from './Write'
import StoryArea from './Story'
import Header from './Header'

export default class App extends Component {
	state = {
        endpoint: "http://127.0.0.1:4001",
		turn: 0,
		sentences: [],
		imagedatas: [],
		complete: false,
	}

  nextTurn = (data) => {
    if (this.state.sentences.length === this.state.imagedatas.length) {
      this.setState({ sentences: [...this.state.sentences, data] })
    }
    else {
      this.setState({ imagedatas: [...this.state.imagedatas, data] })
    }
    this.setState({ turn: this.state.turn + 1 })
  }

  setComplete = (data) => {
    this.nextTurn(data)
    const socket = socketIOClient(this.state.endpoint)
    socket.emit('end game')
  }

  newGame = () => {
    this.setState({ turn: 0, sentences: [], imagedatas: [], complete: false})
  }

  render () {
    const socket = socketIOClient(this.state.endpoint)
    socket.on('end game', () => {
        this.setState({ complete: true })
        console.log('Ending succeeded')
    })

    if (this.state.complete) {
    	return (
    		<div>
    			<Header
    			  newGame={() => this.newGame()}
    			  complete={this.state.complete}
    			/>
    	    <div className="area">
    			  <StoryArea className="storyArea"
    			    sentences={this.state.sentences}
    			    imagedatas={this.state.imagedatas}
    			  />
    		  </div>
    	  </div>
    	)
    }
    if (this.state.turn % 2 === 0) {
    	if (this.state.turn === 0) {
    		return (
    		  <div>
    		    <Header
    		      newGame={() => this.newGame()}
    		      complete={this.state.complete}
    		    />
    		    <div className="area">
      		    <WritingArea className="area"
    			      nextTurn={(sentence) => this.nextTurn(sentence)}
    			      setComplete={(sentence) => this.setComplete(sentence)}
    			    />
    			  </div>
    			</div>
    		)
    	}
    	return (
    	  <div>
    	    <Header
    			  newGame={() => this.newGame()}
    			  complete={this.state.complete}
    			/>
    			<div className="area">
            <div className="prevArea">
    		      <p> Describe what you see: </p>
    		      <img className="picture" alt="previous creation"
                       src={this.state.imagedatas[this.state.turn / 2 - 1]} />
            </div>
    			  <div className="createArea">
    			    <WritingArea
    	          nextTurn={(sentence) => this.nextTurn(sentence)}
    	          setComplete={(sentence) => this.setComplete(sentence)}
    	        />
    	      </div>
    		  </div>
    		</div>
    	)
    }
    else {
    	return (
   	    <div>
        	<Header
    			  newGame={() => this.newGame()}
    			  complete={this.state.complete}
    		  />
    		  <div className="area">
            <div className="prevArea">
  	          <p>Draw this sentence: {this.state.sentences[this.state.turn / 2 >> 0]}</p>
            </div>
        	  <div className="createArea">
        	      <CanvasArea
        	        nextTurn={(imagedata) => this.nextTurn(imagedata)}
        	        setComplete={(imagedata) => this.setComplete(imagedata)}
        	      />
        	    </div>
        	 </div>
        </div>
      )
    }
  }
}
