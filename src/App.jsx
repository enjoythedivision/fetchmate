import './App.css'
import Header from './components/Header'
import Sidebar from './components/Sidebar'

function App() {

  return (
    <div className="app-shell">
     <Header />
     <div className="workspace">
       <Sidebar />
       <main className="main-content" aria-label="Request workspace" tabIndex={0} />
     </div>
    </div>
  )
}

export default App
