import React from 'react';

// var AddNote = React.createClass({
//     propTypes: {
//         addNote: React.PropTypes.func.isRequired
//     },
//     handleSubmit: function () {
//         var newNote = this.refs.note.getDOMNode().value;
//         this.refs.note.getDOMNode().value = '';
//         this.props.addNote(newNote);
//     },
//     render: function () {
//         return (
//             <div className='input-group'>
//                 <label for='add-note'> addNote: </label>
//                 <input type='text' id='add-note' ref='note' placeholder='Add new note' />
//                 <button type='button' onClick={this.handleSubmit}>Submit </button>
//             </div>
//         )
//     }
// });
//es6 way
class AddNote extends React.Components {
    handleSubmit() {
        var newNote = this.refs.note.getDOMNode().value;
        this.refs.note.getDOMNode().value = '';
        this.props.addNote(newNote);
    }
    render(){
        return (
            <div className='input-group'>
                <label for='add-note'> addNote: </label>
                <input type='text' id='add-note' ref='note' placeholder='Add new note' />
                <button type='button' onClick={this.handleSubmit.bind(this)}>Submit </button>
            </div>
        )
    }
};

AddNote.propTypes = {
    addNote: React.PropTypes.func.isRequired
};

export default AddNote;
