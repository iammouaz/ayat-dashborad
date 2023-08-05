import Dashboard from 'pages/dashboard/Dashboard'
import Login from 'pages/login/Login'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ProtectedRoute from './ProtectedRoute'
import AlreadyLoggedinRedirect from './AlreadyLoggedIn'
import Profile from 'pages/profile/Profile'
import Services from 'pages/profile/containers/services/Services'
import AddService from 'pages/profile/containers/add-service/AddService'

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
          path='/home/profile'
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        >
          <Route path='services' element={<Services />}>
            <Route path='Add-New-Service' element={<AddService />} />
          </Route>
          <Route path='user' element={<></>} />
          <Route path='hospitals' element={<></>} />
          <Route path='order' element={<></>} />
        </Route>
        <Route
          path='/*'
          element={
            <AlreadyLoggedinRedirect>
              <Login />
            </AlreadyLoggedinRedirect>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes
