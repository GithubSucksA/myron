import { useEffect, useState } from "react";

export default function Task(props) {
  const [editedTaskText, setEditedTaskText] = useState(props.text);
  const [edit, setEdit] = useState(false);

  function handleEdit() {
    setEdit(!edit);
  }

  function handleSave() {
    props.onEdit(editedTaskText);
    setEdit(false);
  }

  return (
    <>
      <li key={props.id} id={props.id}>
        {!edit ? (
          props.text
        ) : (
          <input
            value={editedTaskText}
            onChange={(e) => setEditedTaskText(e.target.value)}
          />
        )}
        {!edit ? (
          <>
            <button onClick={() => props.onDelete(props.id)}>Delete</button>
            <button onClick={handleEdit}>Edit</button>
          </>
        ) : (
          <button onClick={handleSave}>Save</button>
        )}
      </li>
    </>
  );
}