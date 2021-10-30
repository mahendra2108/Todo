import React from "react";

const ListInput = ({ error, setInput, addItem, input }) => {
  return (
    <>
      <div className="list__input" style={{ marginBottom: !error && "40px" }}>
        <input
          type="text"
          placeholder="New Task"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={addItem}>Add</button>
      </div>
      {error && (
        <div className="error">
          <p>{error}</p>
        </div>
      )}
    </>
  );
};

export default ListInput;
