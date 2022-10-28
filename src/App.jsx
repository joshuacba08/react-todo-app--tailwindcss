import './App.css'
import Header from './components/Header'
import TaskListContainer from './components/TaskListContainer'

function App() {
  
  return (
    <div className="w-screen h-screen bg-slate-900">
       <Header />
       <TaskListContainer />
    </div>
  )
}

export default App
