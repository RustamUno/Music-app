import { Routes, Route } from 'react-router-dom'
import  {ProtectedRoute} from './component/Protected-road/Protected'
import {Login} from './pages/login/login'
import {Registration} from './pages/registration/registration'
import {NotFound} from './pages/error/error'
import {MainBox} from './pages/mainBox'
import { Profile } from './pages/profile'
// import {Collection} from './pages/collection/collection'
// import {PlayList} from './pages/'


export function AppRoutes({user}){
    return(
        <Routes>
            <Route path='/login' element={<Login />}/>
            <Route path='/registration' element={<Registration/>}/>
            <Route path='*' element={<NotFound/>}/>

            <Route element={<ProtectedRoute isAllowed={Boolean(user)}/>}/>
                <Route path='/' element={<MainBox/>}/>
                <Route path='/profile/:id' element={<Profile/>}/>
                {/* <Route path='/collection' element={<Collection/>}/> */}
                {/* <Route path='/playlist/:id' element={<Playlist/>}/> */}

        </Routes>
    )
}

