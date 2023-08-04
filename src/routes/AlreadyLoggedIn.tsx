import { Navigate } from 'react-router-dom'
import Cookies from 'js-cookie'

function AlreadyLoggedinRedirect({ children }: any) {
  const token = Cookies.get('token')

  if (token) {
    return <Navigate to='/' replace state={{ alreadyLoggedin: true }} />
  }

  return children
}

export default AlreadyLoggedinRedirect
