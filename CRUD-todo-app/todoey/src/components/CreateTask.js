import { useState } from "react";
function CreateTask({taskCreate}){
    const [value, setValue] = useState('');
const handleChange = (e) => {
    setValue(e.target.value)
}

const handleSubmit = (e) => {
    e.preventDefault();
    taskCreate(value)
    setValue(' ')
}
    return(
        <div className="my-16">
            <form onSubmit={handleSubmit} >
                <input className="rounded-l-lg h-10 w-96" type="text" value={value} onChange={handleChange}/>
                <button className="bg-cyan-500 h-10 w-24 rounded-r-lg">Add</button>
            </form>
        </div>
    )
}

export default CreateTask;