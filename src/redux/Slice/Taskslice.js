import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast" ;



const initialState = {
    task :  localStorage.getItem("task")
      ? JSON.parse(localStorage.getItem("task"))
      :
      [],
  }
  

  const Taskslice = createSlice({
    name : "task",
    initialState,
    reducers : {
        addToTask: (state, action) => {
          const newTask = action.payload
          state.task.push(newTask);
          localStorage.setItem("task", JSON.stringify(state.task))
          toast.success("New Task added ")
        },
          removeFromTask: (state, action) => {
            const id = action.payload
            const index = state.task.findIndex((item) => item.id === id)
            if (index >= 0) {
              state.task.splice(index, 1)
              localStorage.setItem("task", JSON.stringify(state.task))
              toast.success("Task has been removed successfully")
            }
          },
          updateFromTask: (state, action) => {
            const id = action.payload
            const index = state.task.findIndex((item) => item.id === id)
            if (index >= 0) {
              state.task[index].status = !state.task[index].status ;
              console.log(state);
              localStorage.setItem("task", JSON.stringify(state.task))
              toast.success(`Task has been updated to ${state.task[index].status ? "complete" : "running"} successfully`)
            }
          },
          updateTaskOrder: (state, action) => {
            const { draggedIndex, targetIndex } = action.payload || {}; // Provide a default empty object
          
            if (draggedIndex !== undefined && targetIndex !== undefined) {
              const updatedOrder = [...state.task];
              const [removed] = updatedOrder.splice(draggedIndex, 1);
              updatedOrder.splice(targetIndex, 0, removed);
          
              state.task = updatedOrder;
              localStorage.setItem('taskOrder', JSON.stringify(state.task));
            }
          },
          
         

    }

})




export const {addToTask ,removeFromTask, updateFromTask ,updateTaskOrder} = Taskslice.actions;
export default Taskslice.reducer;



