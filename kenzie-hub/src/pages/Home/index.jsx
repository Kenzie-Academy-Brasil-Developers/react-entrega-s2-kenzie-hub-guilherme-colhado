import { useNavigate, Navigate } from 'react-router-dom'

export const Home = () => {
    const navigate = useNavigate()
    if(!localStorage.getItem('@KenzieHub: Token')) {
        return <Navigate to={'/login'}/>
        
    }

}