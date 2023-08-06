import { Navigate, useLocation } from "react-router-dom"
import { useAuth } from "./AuthContext"

const RequirAuth = ({children}) => {

   const {currntUser} = useAuth()
   const location = useLocation()
   if(!currntUser){
      return <Navigate to="/login" state={{path:location.pathname}}/>
   }
  return children
}

export default RequirAuth
