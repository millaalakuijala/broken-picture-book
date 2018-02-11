import React, { Component } from 'react'

class StoryArea extends Component {

  // StoryArea shows sentence and image one by one.
  render() {
    const storypoints = []
    const n1 = this.props.sentences.length
    const n2 = this.props.imagedatas.length
    for (var i = 0; i < n2; i++) {
      storypoints.push(<p key={"sentence"+i}>{i+1}. {this.props.sentences[i]}</p>)
      storypoints.push(<img
                         className="storyPicture"
                         key={"picture"+i}
                         src={this.props.imagedatas[i]}
                         alt={this.key}
                       />)
    }
    if (n1 > n2) {
      storypoints.push(<p key={"sentence"+(n1-1)}>{n1}. {this.props.sentences[n1-1]}</p>)
    }
    return (
     <div>
      {storypoints}
     </div>
  )

  }
}

export default StoryArea
