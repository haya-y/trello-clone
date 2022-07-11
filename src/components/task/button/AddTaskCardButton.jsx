import React from "react";
import { v4 as uuidv4 } from "uuid";

export const AddTaskCardButton = ({ taskCardsList, setTaskCardsList }) => {
  const tastCardId = uuidv4();
  const addTaskCard = () => {
    setTaskCardsList([
      ...taskCardsList,
      {
        id: tastCardId,
        draggableId: `item${tastCardId}`,
      },
    ]);
  };

  return (
    <div className="addTaskCardButtonArea">
      <button className="addTaskCardButton" onClick={addTaskCard}>
        +
      </button>
    </div>
  );
};
