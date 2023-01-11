import { Routes, Route } from "react-router-dom";
import {Login} from './pages/login/login'
import {Registration} from './pages/registration/registration'
import {NotFound} from './pages/error/error';

export const AppRoutes = () =>{
    return(
        <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="*" element={<NotFound/>}/>
            <Route path="/registration" element={<Registration/>}/>
            {/* <Route path="/main" element={<Main/>}/> */}
        </Routes>
    )
}