import Dashboard from 'pages/dashboard/Dashboard'
import Login from 'pages/login/Login'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ProtectedRoute from './ProtectedRoute'
import AlreadyLoggedinRedirect from './AlreadyLoggedIn'

interface AppRoutesProps {}

const AppRoutes: React.FunctionComponent<AppRoutesProps> = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/login'
          element={
            <AlreadyLoggedinRedirect>
              <Login />
            </AlreadyLoggedinRedirect>
          }
        />
        <Route
          path='/'
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes
