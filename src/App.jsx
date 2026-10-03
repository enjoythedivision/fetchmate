import './App.css'
import Header from './components/Header'
import RequestWorkspace from './components/RequestWorkspace'
import Sidebar from './components/Sidebar'

function App() {

  async function handleSubmit() {
    
  }

  return (
    <div className="app-shell">
     <Header />
     <div className="workspace">
       <Sidebar />
       <RequestWorkspace handleSubmit={handleSubmit}/>
     </div>
    </div>
  )
}

export default App
