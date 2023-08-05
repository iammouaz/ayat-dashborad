import { Navigate, useLocation } from 'react-router-dom'
import Cookies from 'js-cookie'

function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const token = Cookies.get('token')
  const location = useLocation()

  if (!token) {
    return <Navigate to='/login' state={{ redirectTo: location.pathname }} />
  }

  return <>{children}</>
}

export default ProtectedRoute
