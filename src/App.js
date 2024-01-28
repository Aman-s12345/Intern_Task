import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import { Complete } from "./page/Complete";
import Home  from "./page/Home";
import { Incomplete } from "./page/Incomplete";
import Navbar from "./Component/Navbar";
import Addnewtask from "./page/Addnewtask";
import { tasks } from "./data";
import { useSelector, useDispatch } from 'react-redux';
import { addToTask } from "./redux/Slice/Taskslice";

const App = () => {
  const taskState = useSelector((state) => state.task);
  const dispatch = useDispatch();
  

 
  taskState.task.length === 0 ? (
    
    tasks.map((task_, id) => {
     
      dispatch(addToTask(task_));
      return null; 
    })
  ) : <div></div>;


  return (
    <div>
      <div className="bg-slate-900">
        <Navbar />
      </div>
      <div className="bg-slate-100 min-h-screen">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/complete" element={<Complete />} />
        <Route path="/incomplete" element={<Incomplete />} />
        <Route path="/Addnewtask" element={<Addnewtask />} />
      </Routes>
      </div>
     
    </div>)
};

export default App;
