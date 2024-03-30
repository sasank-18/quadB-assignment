

import React from "react";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

const Note = (props) => {

    const deleteNote = () => {
        props.deleteItem(props.id)
    }

    return <>
        <div className="main-div">
            <div className="note">
                <h3>{props.title}</h3>
                <p>{props.content} </p>
                <div
                    className="deleteIcon"
                    onClick={deleteNote}>
                    <DeleteOutlineIcon />
                </div>
            </div>
        </div>

    </>;
};


export default Note;