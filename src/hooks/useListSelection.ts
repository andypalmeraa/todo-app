import { useEffect, useState } from "react"
import { Task } from "../components/TaskContainer/TasksContainer";


export interface Props{
    task: string;
}
export function useListSelection (){
    const [tasksList, setTasksList] = useState<Task[]>([]);
    const [status, setStatus] = useState<string>('all')
    const [filteredTasks, setFilteredTasks]= useState<Task[]>(tasksList);
    const [activeTasksList, setActiveTasksList] = useState<Task[]>([]);
    const [completedTasksList, setCompletedTasksList] = useState<Task[]>([]); 

    
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

 

    return {tasksList, status, filteredTasks, setTasksList, selectList, handleDone, deleteCompleted, deleteTask}
}