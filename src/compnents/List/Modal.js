import React, { useEffect, useState } from "react";
import Modal from "@mui/material/Modal";
function ModalEdit(props) {
  const [inputValue, setInputValue] = useState(props.edit);
  const handleInput = (e) => {
    setInputValue(e.target.value);
  };
  const handleSubmit = () => {
    const index = props.list.findIndex((item) => item === props.edit);
    const newList = [...props.list];
    newList[index] = inputValue;
    props.setList(newList);
    props.handleClose();
  };
  useEffect(() => {
    setInputValue(props.edit);
  }, [props]);
  return (
    <Modal
      open={props.toggle}
      onClose={props.handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <div className="openModal">
        <h2>Edit the task</h2>
        <input
          value={inputValue}
          placeholder="Edit the task"
          onChange={handleInput}
        />
        <div className="buttons">
          <button className="button" onClick={handleSubmit}>
            submit
          </button>
          <button
            className="button"
            onClick={props.handleClose}
            style={{ backgroundColor: "red" }}
          >
            Cancel
          </button>
        </div>
      </div>
    </Modal>
  );
}

export default ModalEdit;
