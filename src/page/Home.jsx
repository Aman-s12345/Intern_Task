

import React from 'react';
import { useDrag, useDrop } from 'react-dnd';
import { ItemTypes } from '../utils/constants.js'; 

import { useSelector, useDispatch } from 'react-redux';
import { updateTaskOrder } from '../redux/Slice/Taskslice';
import TaskItem from '../Component/Task_item';

const DraggableTaskItem = ({ task, index }) => {
  const dispatch = useDispatch();

  const [{ isDragging }, drag] = useDrag({
    type: ItemTypes.TASK,
    item: { id: task.id, index },
  });

  const [, drop] = useDrop({
    accept: ItemTypes.TASK,
    hover: (item) => {
      const draggedIndex = item.index;
      const targetIndex = index;
      dispatch(updateTaskOrder({ draggedIndex, targetIndex }));
      item.index = targetIndex;
    },
  });

  return (
    <div ref={(node) => drag(drop(node))} style={{ opacity: isDragging ? 0.5 : 1 }}>
      <TaskItem key={task.id} task={task} />
    </div>
  );
};


const Home = () => {
  const taskState = useSelector((state) => state.task);

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl p-2 mx-auto space-y-10 space-x-5">
        {taskState.task.map((task, index) => (
          <DraggableTaskItem key={task.id} task={task} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Home;