import React, { Component } from 'react'

export default class MarkdownInput extends Component {
  render() {
    return (
      <React.Fragment>
        <textarea id='editor' value={this.props.value} onChange={this.props.handleChange}/>
      </React.Fragment>
    )
  }
}
