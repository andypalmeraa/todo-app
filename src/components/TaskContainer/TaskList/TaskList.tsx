import { Task } from "../TasksContainer";
import checkIcon from "../../../assets/images/icon-check.svg";
import crossIcon from "../../../assets/images/icon-cross.svg";
import { TasksDetails } from "../TasksDetails/TasksDetails";
import { useContext } from "react";
import { ThemeContext } from "../../../context/ThemeContext";

interface Props {
  status: String;
  isMobile: Boolean;
  tasksList: Task[];
  selectList: (list: string) => void;
  handleDone: (id: number) => void;
  deleteTask: (id: number) => void;
  deleteCompleted: () => void;
  leftItems: number;
}

const TaskList = (props: Props) => {
  const { status, isMobile, tasksList, selectList, handleDone, deleteTask, deleteCompleted, leftItems } = props;
  const {theme}= useContext(ThemeContext) as any

  const taskDetailsProps= {
    status,
    itemsLeftNumber:leftItems,
    deleteCompleted,
    isMobile,
    selectList
  }

  return (
    <>
        <ul className={`${theme === 'light' ? 'bg-white text-very-dark-grayish-blue':''}flex flex-col gap-4  p-4 relative -top-24 m-auto br rounded-lg  max-w-xl shadow-[0_3px_10px_rgb(0,0,0,0.2)]`}>
          {tasksList.length ? tasksList.map((task: Task) => {
            return (
              <div key={task.id}>
              <li className="flex justify-between p-2.5" >
                <div className="flex gap-4">
                  <div
                  // no funciona la gradiente 
                    className={`${theme === 'light' ? 'border-very-light-grayish-blue': ''} flex justify-center items-center w-6 h-6 rounded-full border border-solid  bg-gradient-to-r from-cyan-500 to-blue-500 ${task.done && 'bg-gradient-to-r from-cyan-500 to-blue-500'}`}
                    onClick={() => {
                      handleDone(task.id);
                    }}
                  >
                    {task.done && <img src={checkIcon} alt="check" />}
                  </div>
                  <span className={task.done ? 'line-through': ''}>{task.description}</span>
                </div>

                <button
                  onClick={() => {
                    deleteTask(task.id);
                  }}
                >
                  <img src={crossIcon} alt="" />
                </button>
              </li>
              <hr className="border-slate-500 "/>
              </div>
            );
          })
        :
         <li className="flex justify-center p-2.5 text-center">Your todo list is empty: add a new task</li>
        }
          <li>
            <TasksDetails {...taskDetailsProps}/>
          </li>
        </ul>
    </>
  );
};
export default TaskList;
