import { useState } from 'react'
const AddTask = ({onAdd}) => {
    const [text , setText]= useState('')
    const [day , setDay] = useState('')
    const [reminder , SetReminder] = useState(false)

    const onSubmit = (e) => {
    e.preventDefault()

    if (!text){
        alert('Please add a task')
        return
    }
    onAdd({text , day ,reminder})

    setText('')
    setDay('')
    SetReminder(false)

    }
    return (
        <form className = 'form-control' onSubmit={onSubmit}> 
        <div className='form-control'>
        <label>Task</label>
        <input
          type='text'
          placeholder='Add Task'
          value = {text} 
          onChange={(e) => setText(e.target.value)}
        />
        </div>
        <div className='form-control'>
        <label>Day & Time</label>
        <input
          type='text'
          placeholder='Add Day & Time'
          value = {day}
            onChange={(e) => setDay(e.target.value)}
        />
        </div>
        <div className='form-control form-control-check'>
        <label>Reminder</label>
        <input
          type='checkbox'
          checked = {reminder}
            onChange={(e) => SetReminder(e.currentTarget.checked)}
        />

        </div>
        <input type='submit' value='Save Task' className='btn btn-block' />

        </form>
    )
}

export default AddTask