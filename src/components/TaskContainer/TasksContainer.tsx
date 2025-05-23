import { SyntheticEvent, useContext, useEffect, useState } from "react";
import InputTask from "./ImputTask/InputTask";
import TaskList from "./TaskList/TaskList";
import { ThemeContext } from "../../context/ThemeContext";

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
  const [tasksList, setTasksList] = useState<Task[]>([]);
  const [activeTasksList, setActiveTasksList] = useState<Task[]>([]);
  const [completedTasksList, setCompletedTasksList] = useState<Task[]>([]); 
  const [filteredTasks, setFilteredTasks]= useState<Task[]>(tasksList);
  const [status, setStatus] = useState<string>('all')
  const {theme}= useContext(ThemeContext) as any

  const textClass= `${theme === 'light' ? 'text-blue-selected':'text-very-light-grayish-blue'}`

  useEffect(() => {
    selectList(status)
  },[tasksList])

const selectList= (list: string) => {
  switch (list) {
    case 'all':
      setFilteredTasks(tasksList)
      setStatus('all')
      break;
    case 'active':
      const actives= tasksList.filter((task: Task) => !task.done)
      setFilteredTasks(actives)
      setStatus('active')

      break;
    case 'completed':
      const completeds= tasksList.filter((task: Task) => task.done)
      setFilteredTasks(completeds)
      setStatus('completed')
      break;
  
    default:
      setFilteredTasks(tasksList)
      console.warn('Paramenter sender not found')
      break;
  }

}

  const handleInput = (e: any) => {
    setTask(e.target.value);
  };

  const handleDone = (id: number) => {
    const newTasksList = tasksList.map((task: Task) => {
      if (task.id === id) {
        task.done = !task.done;
      }
      return task;
    });

    const newTaskCompletedList: Task[] = tasksList.filter(
      (task) => task.done === true
    );
    setCompletedTasksList(newTaskCompletedList);

    const newActiveTasksList: Task[] = tasksList.filter(
      (task) => task.done === false
    );
    setActiveTasksList(newActiveTasksList);
    setTasksList(newTasksList);
  };

  const deleteCompleted = () => {
    const newTasksList = tasksList.filter((task) => task.done === false);
    setTasksList(newTasksList);
  };

  const deleteTask = (id: number) => {
    const newTaskList = tasksList.filter((task: Task) => task.id !== id);
    setTasksList(newTaskList);
    
    const newCompletedTaskList= completedTasksList.filter((task: Task) => task.id !== id)
    setCompletedTasksList(newCompletedTaskList)

    const newActiveTasksList= activeTasksList.filter((task:Task) => task.id !== id)
    setActiveTasksList(newActiveTasksList)
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
    setTask("");
  };

  const propsTasksList = {
    status,
    isMobile,
    tasksList:  filteredTasks ,
    selectList, 
    setTasksList,
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
