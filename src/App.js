import {useState, useEffect} from 'react';

import './App.css';
import Skeleton from './components/Skeleton/Skeleton';
import Main from './components/Main/Main';
import Bar from './components/bar/Bar';
import { AppRoutes } from './routes';

function App() {

    const [profile, setProfile] = useState(true);
    useEffect(()=>{
      setTimeout(() => setProfile(false), 1000)
    }, [])


  return (
    profile ? <Skeleton/> :
    <div className='wrapper' >
    <AppRoutes/>
      <div className='container'>
        <Main/>
        <Bar/>
        <footer className="footer"/>
      </div>
   </div>
  );
}

export default App;