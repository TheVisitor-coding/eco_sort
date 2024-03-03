import Sidebar from './components/sidebar/Sidebar'
import Dashboard from './pages/Dashboard'

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
