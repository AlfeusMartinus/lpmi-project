import Sidebar from '../src/components/Sidebar.jsx'
import MainContent from '../src/components/MainContent.jsx'

function App() {
  return (
    <div className="min-h-screen flex bg-gray-900 text-white">
        <Sidebar/>
        <MainContent/>
    </div>
  )
}

export default App
