import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";

const ListItem = ({ list, deleteTask }) => {
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
          list.map((item) => (
            <div className="list__single">
              <div className="list__single-checkbox">
                <input
                  type="checkbox"
                  name="packersOff"
                  id="packers"
                  value="1"
                />
                <label for="packers" class="strikethrough">
                  {item}
                </label>
              </div>
              <DeleteIcon onClick={() => deleteTask(item)} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default ListItem;
