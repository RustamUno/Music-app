import './App.css';
import {useState, useEffect} from 'react';
import Skeleton from './components/Skeleton/Skeleton';
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Bar from './components/Bar/Bar'

function App() {

    const [profile, setProfile] = useState(true);
    useEffect(()=>{
      setTimeout(() => setProfile(false), 10000)
    }, [])


  return (
    profile ? <Skeleton/> :
    <div className='wrapper' >
      <Header/>
      <div className='container'>
        <Main/>
        <Bar/>
        <footer className="footer"/>
      </div>
   </div>
  );
}

export default App;
