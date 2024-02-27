import { Route, Routes } from 'react-router-dom';
import sw from './assets/sw.png';
import Footer from './components/Footer';
import Tabs from './components/Tabs';
import Administrator from './pages/Administrator';
import Home from './pages/Home';
import HowTo from './pages/HowTo';
import Server from './pages/Server';

function App() {
  document.title = "Secret Weapon Deathmatch"

  return (
    <>
      <div className="lg:container bg-slate-900 text-slate-200 lg:w-11/12 antialiased xl:min-h-screen relative">
        <img src={sw} className='mx-auto w-96'/>
        <Tabs/>
        <Routes>
          <Route path='/' element={<Home title="Home"/>}>Home</Route>
          <Route path="/administrator" element={<Administrator title="Administrator"/>}>Administrator</Route>
          <Route path="/server" element={<Server title="Server"/>}>Server</Route>
          <Route path="/how-to" element={<HowTo title="How To"/>}>Server</Route>
        </Routes>
        <Footer/>
      </div>
    </>
  );
}

export default App;