import Todo from "@/app/components/Todo";
import { Task } from "@/types";
import React from "react";

interface TodosProps {
  todos: Task[];
}

const TodoList = ({ todos }: TodosProps) => {
  return (
    <ul className="space-y-3">
      {todos.map((todo) => {
        return <Todo key={todo.id} todo={todo} />;
      })}
    </ul>
  );
};

export default TodoList;
