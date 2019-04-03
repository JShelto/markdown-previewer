import React, { Component } from 'react';
import marked from 'marked';


export default class MarkdownPreview extends Component {
  convertTextToMarkdown() {
    let markdown = marked(this.props.text, {sanitize: true, breaks: true});
    return { __html: markdown };
  }

  render() {
    return (
      <div id='preview' dangerouslySetInnerHTML={this.convertTextToMarkdown()} />
    )
  }
}
