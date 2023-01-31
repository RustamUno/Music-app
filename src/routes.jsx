import { Routes, Route } from 'react-router-dom'

import { Login } from './pages/login/login'
import {Registration} from './pages/registration/registration'
import { NotFound } from './pages/error/error'
// import  {ProtectedRoute} from './component/protected-road.jsx/protected'
import Main from './component/Main/Main'


export const AppRoutes=()=>{
    return(
        <Routes>
            <Route path='/login' element={<Login />}/>
            <Route path='/registration' element={<Registration/>}/>
            {/* <Route element={
                <ProtectedRoute isAllowed={Boolean(user)}> 
                    <Main/>
                </ProtectedRoute>}/> */}      
            
            <Route path='/' element={<Main/>}/>

            <Route path='*' element={<NotFound/>}/>
        </Routes>
    )
}

