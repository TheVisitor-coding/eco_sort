import Dashboard from './pages/Dashboard'
import Sidebar from './components/Sidebar'

function App () {
  return (
    <>
      <main className='mt-6 flex flex-row items-start'>
        <Sidebar />
        <Dashboard />
      </main>
    </>
  )
}

export default App
