import { Route, Routes } from 'react-router-dom';
import sw from './assets/sw.png';
import Home from './pages/Home';
import Tabs from './components/Tabs';
import Administrator from './pages/Administrator';
import Server from './pages/Server';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <div className="container bg-slate-900 text-slate-200 w-9/12">
        <img src={sw} className='mx-auto w-96'/>
        <Tabs/>
        <Routes>
          <Route path='/' element={<Home/>}>Home</Route>
          <Route path="/administrator" element={<Administrator/>}>Administrator</Route>
          <Route path="/server" element={<Server/>}>Server</Route>
        </Routes>
        <Footer/>
      </div>
    </>
  );
}

export default App;