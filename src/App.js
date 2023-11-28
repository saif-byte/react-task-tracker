import { useEffect, useState } from 'react';
import './App.css';
import Header from  './components/Header.js';
import Tasks from './components/Tasks.js';
import AddTask from './components/AddTask.js';


function App() {
  const [tasks , setTasks] = useState([])

  useEffect(() => {   
    const getTasks = async () => {
      const taskFromServer = await fetchTasks()
      setTasks(taskFromServer)
    }
    getTasks()
  } , []
  )

  const fetchTasks = async () => {
    const res = await fetch('http://localhost:5000/tasks')
    const data = await res.json()
    return data
  }
  const fetchTask = async (id) => {
    const res = await fetch('http://localhost:5000/tasks/' + id)
    const data = await res.json()
    return data
  }
  var [ showAddTask , setShowAddTask] = useState(false)
  
  const toggleReminder = async(id) =>{
    const taskToToggle = await fetchTask(id)
    const updTask = {...taskToToggle , reminder : !taskToToggle.reminder}
    const res = await fetch('http://localhost:5000/tasks/' + id ,
    {method : 'PUT' , headers : {"Content-type" : "application/json"}  , body : JSON.stringify(updTask)})
    
    const data = await res.json()
    console.log(data)
    setTasks(tasks.map((task) =>
  task.id === id ? { ...task, reminder: !data.reminder } : task
));
  }
  
  const addTask =async (task) => {
  const res = await fetch("http://localhost:5000/tasks" , 
    {method : 'POST' , 
    headers : {"Content-type" : "application/json"}, 
    body : JSON.stringify(task)}
  )

  const data = await res.json()
  setTasks ([...tasks , data])
    
  } 

  const deleteTask = async (id) => {
    await fetch('http://localhost:5000/tasks/' + id  , {method : 'DELETE'})
    setTasks(tasks.filter((task) => task.id !== id))
    
  }


  return (
    <div className = 'container'>
    <Header onAdd ={() => {setShowAddTask(!showAddTask)}} 
    showAdd={showAddTask} />
    
    {showAddTask && 
    <AddTask onAdd = {addTask}/>}
    <Tasks  tasks = {tasks} onDelete = {deleteTask} onToggle = {toggleReminder}/> 

  </div>
  );
}

export default App;
