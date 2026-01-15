import React, { useEffect, useState } from "react";

export default function ToDo() {
  const [tasks, setTasks] = useState(["Apprendre React"]);
  const [newtasks, setNewTaks] = useState([""]);

  const createTask = () => {
    setTasks(...tasks, newtasks);
  }

  return(
    <div>
      {
        
      }
    </div>
  )
}