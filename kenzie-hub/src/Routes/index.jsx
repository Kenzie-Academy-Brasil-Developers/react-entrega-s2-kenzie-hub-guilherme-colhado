import { Route, Routes } from "react-router-dom"
import { Home } from "../pages/Home"
import { Login } from "../pages/Login"
import { Registro } from "../pages/Register"
export const RouteComponent = () => (<Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/registro" element={<Registro/>}/>
</Routes>)