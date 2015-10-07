import React from 'react';
import NotesList from './NotesList';
import AddNote from './AddNote';


//ES6 Way
// var Notes =  React.createClass({
//     propTypes: {
//             username: React.PropTypes.string.isRequired,
//             notes: React.PropTypes.array.isRequired,
//
//     },
//     render: function () {
//         return (
//             <div>
//                 <h3> Notes for  {this.props.username} </h3>
//                 <AddNote username={this.props.username} addNote={this.props.addNote} />
//                 <NotesList notes={this.props.notes} />
//             </div>
//         )
//     }
// })

class Notes extends React.Components {
    render() {
        return (
            <div>
                <h3> Notes for  {this.props.username} </h3>
                <AddNote username={this.props.username} addNote={this.props.addNote} />
                <NotesList notes={this.props.notes} />
            </div>
        )
    }
}

Notes.propTypes = {
        username: React.PropTypes.string.isRequired,
        notes: React.PropTypes.array.isRequired,

};

export default Notes;
