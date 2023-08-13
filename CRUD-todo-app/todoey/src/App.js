import TaskList from "./components/TaskList";
import CreateTask from "./components/CreateTask";
import { useState, useEffect } from "react";
import axios from "axios";
function App() {

  const [data, setData] = useState([]);
  let objectDate = new Date();
  let day = objectDate.getDate();
  let month = objectDate.getMonth();
  let year = objectDate.getFullYear();

  const taskCreate = async (task) => {
    try {
      const response = await axios.post("http://localhost:3001/register", {
        task,
      });
      fetchTasks()

    } catch (error) {
      console.log(error);
    }
  };
  const fetchTasks = async () => {
    const response = await axios.get("http://localhost:3001/register");
    const updatedData = [response.data];
    setData(updatedData[0]);
  };
  

  useEffect(() => {
    fetchTasks();
  },[]);

  const deleteTask = async (id) => {
      await axios.delete(`http://localhost:3001/register/${id}`);
      fetchTasks()
  };
  return (
    <div>
      <h1 className="text-8xl main-title pt-5">Todoey</h1>
      <div className="w-52 inline-block h-10 m-10">
        {day + "/" + month + "/" + year}
      </div>
      <TaskList data={data} deleteTask={deleteTask} />
      <CreateTask taskCreate={taskCreate} />
    </div>
  );
}

export default App;
