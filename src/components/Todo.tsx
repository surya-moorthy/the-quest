import React from "react";

export type TodoStatus = "failed" | "completed" | "not-doing" | "TODO";

export interface TodoProps {
  title: string;
  status: TodoStatus;
}

export const Todo: React.FC<TodoProps> = ({ title, status }) => {
  let icon;
  let textStyle = "text-lg text-gray-800";

  switch (status) {
    case "completed":
      icon = <span className="text-green-500">✅</span>;
      textStyle = "text-gray-500 line-through";
      break;
    case "not-doing":
      icon = <span className="text-red-500">⛔</span>;
      textStyle = "text-gray-500 italic";
      break;
    case "failed":
      icon = <span className="text-gray-400">❌</span>;
      break;
    case "TODO":
      icon = <span className="text-white">🟧</span>;
      textStyle = "text-white";
      break;
    default:
      icon = <span className="text-gray-400">❌</span>;
      break;
  }

  return (
    <div className="my-2 flex items-center space-x-3 rounded-lg border p-3 shadow-sm">
      <div className="size-6 shrink-0">{icon}</div>
      <p className={textStyle}>{title}</p>
    </div>
  );
};
