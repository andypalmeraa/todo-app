import { useContext } from "react";
import { ThemeContext } from "../../../context/ThemeContext";

interface Props {
  handleInput: any;
  task: string;
  handleSubmit: any;
}

const InputTask = (props: Props) => {
  const { handleInput, task, handleSubmit } = props;
  const {theme,setTheme}= useContext(ThemeContext) as any
  return (
    <div className={`${theme === 'light' ? 'bg-white': 'bg-very-dark-desaturated-blue'} flex justify-center p-4 relative -top-32  m-auto br rounded-lg max-w-lg gap-4 box-content`}>
      <div
        className={`${theme === 'light' ? 'border-very-light-grayish-blue': 'border-dark-grayish-blue'} flex justify-center items-center w-6 h-6 rounded-full border-2 border-solid`}
      ></div>
      <form onSubmit={handleSubmit} className="w-full">
        <input
          type="text"
          placeholder="Create a new todo..."
          className="bg-white text-very-dark-grayish-blue outline-none"
          value={task}
          onInput={handleInput}
        />
      </form>
    </div>
  );
};
export default InputTask;
