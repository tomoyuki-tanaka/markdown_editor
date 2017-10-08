import React from 'react'
import Editor from './Editor'
import style from './MarkdownEditorUI.css'
import Previewer from './Previewer'

export default class MarkDownEditorUI extends React.Component {
  constructor(props){
    super(props)
    this.state = { text: '' }
    this.onChangeText = this.onChangeText.bind(this)
  }

  onChangeText(e) {
    this.setState({ text: e.target.value })
  }

  render() {
    return (
      <div className={style.markdownEditor}>
        <Editor className={style.editorArea} value={this.state.text} onChange={this.onChangeText} />
        <Previewer className={style.previewerArea} value={this.state.text} />
      </div>
    )
  }
}
