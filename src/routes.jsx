import { Routes, Route } from "react-router-dom";
import {Login} from './pages/login/login'
import {Registration} from './pages/registration/registration'
import {NotFound} from './pages/error/error';
import { Account } from "./pages/account/account";
import { ProtectedRoute } from "./components/protected-route/protected";

export const AppRoutes = ({user}) =>{
    return(
        <Routes>
            <Route path="/login" element={<Login/>}/>
            <Route path="*" element={<NotFound/>}/>
            <Route path="/registration" element={<Registration/>}/>
            <Route path="/account"
                element={
                    <ProtectedRoute isAllowed={Boolean(user)}>
                        <Account/>
                    </ProtectedRoute>}
            />
        </Routes>
    )
}