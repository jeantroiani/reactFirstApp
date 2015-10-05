var React =  require('react');

var AddNote = React.createClass({
    propTypes: {
        addNote: React.PropTypes.func.isRequired
    },
    handleSubmit: function () {
        var newNote = this.refs.note.getDOMNode().value;
        this.refs.note.getDOMNode().value = '';
        this.props.addNote(newNote);
    },
    render: function () {
        return (
            <div className='input-group'>
                <label for='add-note'> addNote: </label>
                <input type='text' id='add-note' ref='note' placeholder='Add new note' />
                <button type='button' onClick={this.handleSubmit}>Submit </button>
            </div>
        )
    }
});

module.exports = AddNote;
