import { useDrag } from 'react-dnd';
import { ItemTypes } from '../utils/constants';
import { useDispatch, useSelector } from "react-redux";
import { removeFromTask, updateFromTask } from "../redux/Slice/Taskslice";
import { MdDeleteForever } from "react-icons/md";

const Task_item = ({ task }) => {
    const dispatch = useDispatch();
    const handleremoveTask = (id) => {
        dispatch(removeFromTask(id));
    }
    const handleupdateTask = (id) => {
        dispatch(updateFromTask(id));
    }
    const [{ isDragging }, drag] = useDrag({
        type: ItemTypes.TASK,
        item: { id: task.id },
        collect: (monitor) => ({
          isDragging: !!monitor.isDragging(),
        }),
      });
    
    return (
        <div ref={drag} style={{ opacity: isDragging ? 0.5 : 1 }}>
                <div className="flex flex-col items-center justify-between 
    hover:scale-110 transition duration-300 ease-in gap-0 p-4 mt-10 ml-5 rounded-xl outline  bg-white">
            <div className="flex justify-between  items-center w-full mt-2">
                <p className="text-gray-700 font-bold uppercase text-lg text-left  w-40 ">{task.title}</p>
            </div>
            <div className="flex justify-between  items-center w-full mt-2">
                <p className="w-40 text-gray-400 font-semibold text-[14px] text-left">{task.description}</p>
            </div>
            <div className="flex justify-between gap-8 items-center w-full mt-1">
                <button
                    className={`text-gray-700 border-2 rounded-full font-semibold text-[12px] p-1 px-3 uppercase 
              ${task.status ? 'bg-green-600' : 'bg-red-600'} 
              hover:bg-gray-700 hover:text-white transition duration-300 ease-in`}
                >
                    {task.status ? 'Complete' : 'Running'}
                </button>
                <div>
                    <button onClick={() => handleremoveTask(task.id)}>
                        <MdDeleteForever className="text-slate-900 text-4xl" />
                    </button>

                </div>
            </div>

            <div className="flex justify-between gap-4 items-center w-full mt-1">
                <div>
                    <p className="text-slate-900 font-semibold">{task.date}</p>
                </div>

                <button
                    className="text-gray-700 pr-2 border-2 border-gray-700 rounded-full font-semibold 
    text-[12px] p-1 px-3 uppercase  hover:bg-gray-700 hover:text-white transition duration-300 ease-in"
                    onClick={() => handleupdateTask(task.id)}
                >
                    {task.status === false ? 'Mark as Complete' : 'Mark as Running'}
                </button>

            </div>
        </div>

        </div>
    
       
    );
};

export default Task_item;
