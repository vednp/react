
function TaskList({ data ,deleteTask}) {

const handleDeleteTask = (e) => {
 deleteTask(e.target.alt);
}

  return (
    <div>
      {data.map((data, index) => {
        return (
          <div key={index} className="flex-col">
            <div className=" bg-slate-50 inline-block w-72 my-2 rounded-lg ">
              <div className="flex justify-between m-2 h-12 ">
                <input type="checkbox" name="complete" id="dano" />
                <p className="mt-2.5">{data.task}</p>
                <img 
                  onClick={handleDeleteTask}
                  className="w-4 h-4 mt-3.5"
                  src="https://img.icons8.com/ios-glyphs/30/trash--v1.png"
                  alt={data._id}
                />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
export default TaskList;
