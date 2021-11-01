import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

const ListItem = ({ list, deleteTask, editTask }) => {
  return (
    <div className="listItems__container">
      <div
        className="list__all"
        style={{
          height: list.length > 0 ? "max-content" : "0px",
          border: !list.length > 0 && "none",
        }}
      >
        {list.length > 0 &&
          list.map((item, index) => (
            <div className="list__single" key={index}>
              <div className="list__single-checkbox">
                <input
                  type="checkbox"
                  name="packersOff"
                  id="packers"
                  value="1"
                />
                <label htmlFor="packers" className="strikethrough">
                  {item}
                </label>
              </div>
              <div>
                <EditIcon
                  color="green"
                  className="edit"
                  onClick={() => editTask(item)}
                />
                <DeleteIcon
                  onClick={() => deleteTask(item)}
                  className="delete"
                />
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ListItem;
