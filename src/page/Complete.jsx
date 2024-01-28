import React from 'react';
import { useSelector} from 'react-redux';
import Task_card from "../Component/Task_card";


export const Complete = () => {
  
  const taskState = useSelector((state) => state.task);
  let complete1 = taskState.task ;
  let complete = complete1.filter((item) => item.status === true);

  
  
  
  return (
    <div>
     <div className="grid  xs:gridcols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl p-2 mx-auto space-y-10 space-x-5">
          {
            complete.map( (task) => (
            <Task_card key = {task.id} task={task}/>
          ) )
          }
        </div>
        
     
    </div>
  );
};
