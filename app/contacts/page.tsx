"use client";
import React, { useEffect, useState } from "react";

interface Todos {
  id: number;
  title: string;
  completed: boolean;
}

const Contacts = () => {
  const [todos, setTodos] = useState<Todos[]>([]);
  let completeTotal = 0, incompleteTotal = 0;

  const fetchData = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data = await res.json();
    setTodos(data.slice(0, 20));
    completeTotal = 0;
    incompleteTotal = 0;
  };
  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    todos.forEach((todo) => {
      todo.completed
        ? completeTotal++
        : incompleteTotal++;
    });
  }, [todos]);

  return (
    <div
      style={{
        display: "flex",
        padding: "20px",
        marginTop: "5px",
        flexWrap: "wrap",
      }}
    >
      <h1>Todo Checklist</h1>

      <span>Overall Todos: {todos.length}</span>
      <span>Complete Todos: {completeTotal}</span>
      <span>Incomplete Todos: {incompleteTotal}</span>

      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Title</th>
            <th>is Complete</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo) => (
            <tr key={todo.id}>
              <td>{todo.title}</td>
              <td>
                <div className="form-control">
                  <input
                    type="checkbox"
                    checked={todo.completed}
                    className="checkbox checkbox-accent"
                  />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Contacts;
