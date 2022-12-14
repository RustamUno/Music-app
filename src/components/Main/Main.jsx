// import {useState, useEffect} from 'react';

import '../../App.css';
// import Skeleton from '../Skeleton/Skeleton';
import CenterBlock from './CenterBlock/CenterBlock'
import Navigation from './Navigation/Navigation'
import SideBar from './SideBar/SideBar'


function Main(){
    // const [profile, setProfile] = useState(true);
  
    // useEffect(()=>{
    //   setTimeout(() => setProfile(false), 5000)
    // }, [])
    return(
        // profile ? <Skeleton/> :
        <div className='main'>
            <Navigation/>
            <CenterBlock/>
            <SideBar/>
        </div>
    )
}

export default Main;