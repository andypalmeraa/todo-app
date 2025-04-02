import { useContext } from "react";
import { ThemeContext } from "../../../context/ThemeContext";

interface Props{
    status: String;
    isMobile: Boolean;
    selectList: (list: string) => void;
    itemsLeftNumber: number;
    deleteCompleted: () => void;
}
export const TasksDetails= (props:Props) => {
    const {theme} = useContext(ThemeContext) as any
const {status, isMobile, selectList, itemsLeftNumber, deleteCompleted}= props
const textClass= `${theme === 'light' ? 'text-blue-selected':'text-very-light-grayish-blue'}`
return (
    <div className="flex justify-between p-2.5" >
        <div className="text-center m-auto">{itemsLeftNumber} items left</div>
        {
            !isMobile &&
            <div className={`flex justify-between bg-slate-800 p-4 relative mx-3.5 px-14 br rounded-lg  w-72 my-4`}>
                
              <button className={`${status == 'all' && textClass}`} onClick={() => selectList('all')}>All</button>
              <button className={`${status === 'active' && textClass}`} onClick={() => selectList('active')}>Active</button>
              <button className={`${status === 'completed' && textClass}`} onClick={() => selectList('completed')}>Completed</button>
            </div>
            }
        <button onClick={deleteCompleted}>Clear completed</button>
    </div>
)
}