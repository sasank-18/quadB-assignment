import React, { useState } from "react";
import Button from "@mui/material/Button";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
const CreateNote = (props) => {
  let [expand, setexpand] = useState(false);

  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  const inputEvent = (e) => {
    // const name= e.target.name;
    // const value=e.target.value;
    const { name, value } = e.target;
    setNote((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
  };

  const addEvent = () => {
    props.passNote(note);
    setNote({
      title: "",
      content: "",
    });
  };

  const expandIt = () => {
    setexpand(true);
  };

  const backtonormal = () => {
    setexpand(false);
  };

  return (
    <>
      <div className="main_note ">
        <form className="">
          <input
            className=" w-[75%] sm:w-[55%] md:w-[45%] lg:w-[35%]"
            name="title"
            value={note.title}
            onChange={inputEvent}
            type={Text}
            onClick={expandIt}
            onDoubleClick={backtonormal}
            placeholder="Title"
          />

          {expand ? (
            <textarea
            className=" w-[75%] sm:w-[55%] md:w-[45%] lg:w-[35%]"

              name="content"
              value={note.content}
              onChange={inputEvent}
              rows="12"
              columns="10" 
              placeholder="Write a notes..."
              autoComplete="off"
            ></textarea>
          ) : null}

          <div className="">
            {expand ? (
              <Button  onClick={addEvent} className="button absolute lg:left-56 left-36">
                <AddCircleOutlineIcon className="plus_sign" />
              </Button>
            ) : null}
          </div>
        </form>
      </div>
    </>
  );
};

export default CreateNote;
