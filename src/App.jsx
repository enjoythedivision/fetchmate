import './App.css'
import Header from './components/Header'
import RequestWorkspace from './components/RequestWorkspace'
import Sidebar from './components/Sidebar'

function App() {

  return (
    <div className="app-shell">
     <Header />
     <div className="workspace">
       <Sidebar />
       <RequestWorkspace/>
     </div>
    </div>
  )
}

export default App
