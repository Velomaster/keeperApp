import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

const App = () => {
  const [tasks, setTask] = useState([]);

  function addTask(value) {
      setTask(oldValue => {
        return [...oldValue, value]
      });
  };
  
  const deleteNote = (value) => {
    setTask((oldValue) => {
      const newTasks = oldValue.slice();
      newTasks.splice(value, 1);
      return newTasks;
    })
  };

  return (
    <div>
      <Header />
      <CreateArea onAddTask={addTask} />
      {tasks.map((task, index) => {
        return <Note deleteHandler={deleteNote} id={index} key={index} title={task.title} content={task.content} />
      })}
      <Footer />
    </div>
  );
}

export default App;
