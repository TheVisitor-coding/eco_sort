import LoginPage from './pages/auth/LoginPage'
import RegisterPage from './pages/auth/RegisterPage'
import Dashboard from './pages/Dashboard'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ErrorPage from './pages/ErrorPage'
import Leaderboard from './pages/Leaderboard'
import { ToastContainer } from 'react-toastify'
import ParamsPage from './pages/ParamsPage'
import 'react-toastify/dist/ReactToastify.css'

function App () {
  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<RegisterPage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='*' element={<ErrorPage />} />
          <Route path='dashboard' element={<Dashboard />} />
          <Route path='leaderboard' element={<Leaderboard />} />
          <Route path='settings' element={<ParamsPage />} />
        </Routes>
      </BrowserRouter>

      <ToastContainer />

    </>
  )
}

export default App
