import { SyntheticEvent, useContext, useEffect, useState } from "react";
import InputTask from "./ImputTask/InputTask";
import TaskList from "./TaskList/TaskList";
import { ThemeContext } from "../../context/ThemeContext";
import { useListSelection } from "../../hooks/useListSelection";

export interface Task {
  id: number;
  description: string;
  date: string;
  done: boolean;
}

interface Props {
  isMobile: Boolean
}

const TasksContainer = (props:Props) => {
  const {isMobile}= props
  const [task, setTask] = useState("");
  const {theme}= useContext(ThemeContext) as any
  const { status,tasksList, filteredTasks, setTasksList, selectList,  handleDone,deleteTask,deleteCompleted,} = useListSelection()
  const textClass= `${theme === 'light' ? 'text-blue-selected':'text-very-light-grayish-blue'}`


  const handleInput = (e: any) => {
    setTask(e.target.value);
  };

  const handleSubmit = (e: SyntheticEvent) => {
      
      e.preventDefault();
      const newTask = {
        id: tasksList.length ? tasksList[tasksList.length - 1].id + 1 : 1,
        description: task,
        date: new Date().toISOString(),
        done: false,
      };
        setTasksList([...tasksList, newTask]);
        setTask('')
  };

  const propsTasksList = {
    status,
    isMobile,
    tasksList:  filteredTasks ,
    selectList, 
    handleDone,
    deleteTask,
    deleteCompleted,
    leftItems: tasksList.filter((task:Task) => task.done === false).length
  };

  return (
    <div className={`${theme === 'light'? 'bg-very-light-gray': 'bg-very-dark-Blue'} h-screen p-5`}>
      <InputTask
        handleInput={handleInput}
        task={task}
        handleSubmit={handleSubmit}
      />
      <TaskList {...propsTasksList} />
      {
        isMobile &&
        <div className={`${theme === 'light' ? 'bg-white ':'bg-very-dark-desaturated-blue '}flex justify-evenly bg-slate-800 p-4 relative -top-16 w-full br rounded-lg text-slate-500 w-72 my-4 shadow-[0_3px_10px_rgb(0,0,0,0.2)]`}>
          <button className={`${status == 'all' && textClass}`} onClick={() => selectList('all')}>All</button>
          <button className={`${status === 'active' && textClass}`} onClick={() => selectList('active')}>Active</button>
          <button className={`${status === 'completed' && textClass}`} onClick={() => selectList('completed')}>Completed</button>
      </div>
      }
    </div>
  );
};
export default TasksContainer;
