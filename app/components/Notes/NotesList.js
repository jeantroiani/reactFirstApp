import React from 'react';

// var NotesList = React.createClass({
//     render: function () {
//         var notes = this.props.notes.map(function (note, index){
//             return <li className="list-group-item" key={index}> {note['.value']} </li>
//         });
//         return (
//             <ul className = "list-group">
//                 {notes}
//             </ul>
//         )
//     }
// });
//ES6 way
class NotesList extends React.Components {
    render(){
        var notes = this.props.notes.map((note, index) =>{
            return <li className="list-group-item" key={index}> {note['.value']} </li>
        });
        return (
            <ul className = "list-group">
                {notes}
            </ul>
        )
    }
};

export default NotesList;
