import React from "react";
import { v4 as uuidv4 } from "uuid";

export const TaskAddInput = ({ inputText, setInputText, setTaskList, taskList }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputText === "") return;
    const taskId = uuidv4();
    setTaskList([
      ...taskList,
      {
        id: taskId,
        draggableId: `task-${taskId}`,
        text: inputText,
      },
    ]);
    setInputText("");
  };

  const handleChange = (e) => {
    setInputText(e.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          className="taskAddInput"
          type="text"
          placeholder="add a task"
          onChange={handleChange}
          value={inputText}
        />
      </form>
    </div>
  );
};
