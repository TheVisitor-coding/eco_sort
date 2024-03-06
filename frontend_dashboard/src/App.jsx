import LoginPage from './pages/auth/LoginPage'
import RegisterPage from './pages/auth/RegisterPage'
import Dashboard from './pages/Dashboard'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ErrorPage from './pages/ErrorPage'

function App () {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/register' element={<RegisterPage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='*' element={<ErrorPage />} />
          <Route path='/dashboard' element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
