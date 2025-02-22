import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import TasksContainer from './components/TaskContainer/TasksContainer'
import ThemeContextProvider from './context/ThemeContext'

function App() {
  const [isMobile,setIsMobile] = useState<boolean>(() => {
    document.addEventListener("DOMContentLoaded", function() {
      if(   window.matchMedia("(max-width: 768px)").matches){
        return true
      }
    });
    return false
  })

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.matchMedia("(max-width: 768px)").matches);
    };
  
    window.addEventListener('resize', handleResize);
  
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="App">
      <ThemeContextProvider>
        <Header isMobile={isMobile} />
        <TasksContainer isMobile={isMobile}/>
      </ThemeContextProvider>
    </div>
  )
}

export default App
