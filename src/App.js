import { useState } from 'react';
import './App.css';
import Header from  './components/Header.js';
import Tasks from './components/Tasks.js';
import AddTask from './components/AddTask.js';


function App() {
  const [tasks , setTasks] = useState([
    {id : 1 , text : 'Doctors Appointment' , day : 'Feb 5th at 2:30pm' , reminder : true},
    {id : 2 , text : 'Meeting at School' , day : 'Feb 6th at 1:30pm' , reminder : true},
    {id : 3 , text : 'Food Shopping' , day : 'Feb 5th at 2:30pm' , reminder : false}
  ])

  var [ showAddTask , setShowAddTask] = useState(false)
  
  const toggleReminder = (id) =>{
    setTasks(tasks.map((task) =>
  task.id === id ? { ...task, reminder: !task.reminder } : task
));
    console.log(id)
  }
  
  const addTask = (task) => {
    const id = Math.random()
    const newTask = {id , ...task}
    setTasks([...tasks , newTask])
  } 

  const deleteTask = (id) => {
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
