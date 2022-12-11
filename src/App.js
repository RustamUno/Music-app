import './App.css';
import Navigation from './components/navigation/Navigation'
import CenterBlock from './components/centerblock/CenterBlock';
import Sidebar from './components/sidebar/Sidebar';
import Bar from './components/bar/Bar'

function App() {
  return (
    <div className='wrapper'>
     <div className='container'>
      <main className='main'>
        <Navigation/>
        <CenterBlock/>
        <Sidebar/>
      </main>
      <Bar/>
      <footer className='footer'/>
      </div>
    </div>
  );
}

export default App;
