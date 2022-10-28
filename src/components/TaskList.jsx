import React from "react";
import { getItemLeft } from "../helpers/calculateFunctions";

const TaskList = ({ tasks, changeStatus }) => {
  return (
    <div className="flex flex-col gap-[1px] bg-slate-700 text-white w-10/12 mx-auto my-8 rounded-lg overflow-hidden">
      {tasks.map((task) => {
        return (
          <div
            className="w-full bg-slate-800 h-12 flex gap-3 items-center px-5"
            key={task.id}
          >
            <div
              className="flex justify-center items-center w-6 h-6 rounded-full border border-solid border-slate-500"
              onClick={() => {
                changeStatus(task.id);
              }}
            >
              {task.status && (
                <svg xmlns="http://www.w3.org/2000/svg" width="11" height="9">
                  <path
                    fill="none"
                    stroke="#FFF"
                    strokeWidth="2"
                    d="M1 4.304L3.696 7l6-6"
                  />
                </svg>
              )}
            </div>
            {task.description}
          </div>
        );
      })}

      <div className="w-full bg-slate-800 h-12 flex justify-between items-center px-5 text-slate-600 font-semibold">
        <span>{getItemLeft(tasks).length} items left</span>
        <span> Clear completed </span>
      </div>
    </div>
  );
};

export default TaskList;
