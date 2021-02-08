import React, { Component } from "react";
import AddIcon from '@material-ui/icons/Add';
import Zoom from '@material-ui/core/Zoom';
import Fab from '@material-ui/core/Fab';

class CreateArea extends Component {

  state = {
    note: {
      title: '',
      content: ''
    },
    isExpended: false
  }

  handleInput = (event) => {
    const {name, value} = event.target;
    const oldNote = {...this.state.note};
    this.setState({note: {...oldNote, [name]: value}});
  }

  componentDidUpdate() {
    if (this.state.isExpended) {
      return
    }

    if (this.state.note.content !== '' || this.state.note.title !== '') {
      this.setState({isExpended: true});
    }
  }
  
  clearState = () => {
    this.setState({
      note: {
        title: '',
        content: ''
      },
      isExpended: false
    });
  }

  handleExpend = (oldState) => {
    const toggle = oldState.isExpended;
    this.setState({isExpended: !toggle});
  }

  render() {
    return (
      <div>
        <form className="create-note" onSubmit={e => e.preventDefault()}>
          <input onChange={this.handleInput} value={this.state.note.title} name="title" placeholder="Title" autoComplete="off" />
          <textarea onChange={this.handleInput} name="content" value={this.state.note.content} placeholder="Take a note..." rows={this.state.isExpended ? "3" : "1"} autoComplete="off" />
          <Zoom in={this.state.isExpended}> 
            <Fab onClick={() => {
              if (this.state.note.title.trim() === '' || this.state.note.content.trim() === '') {
                return alert("Enter note!");
              }
              this.props.onAddTask(this.state.note);
              this.clearState()
            }}>
              <AddIcon />
            </Fab>
          </Zoom>
        </form>
      </div>
    );
  }
}

export default CreateArea;
