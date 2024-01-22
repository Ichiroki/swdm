import { Route, Routes } from 'react-router-dom';
import sw from './assets/sw.png';
import Home from './pages/Home';
import Tabs from './components/Tabs';
import Administrator from './pages/Administrator';
import Server from './pages/Server';
import Footer from './components/Footer';

function App() {
  document.title = "ExT x sw"

  return (
    <>
      <div className="lg:container bg-slate-900 text-slate-200 lg:w-11/12 antialiased">
        <img src={sw} className='mx-auto w-96'/>
        <Tabs/>
        <Routes>
          <Route path='/' element={<Home title="Home"/>}>Home</Route>
          <Route path="/administrator" element={<Administrator title="Administrator"/>}>Administrator</Route>
          <Route path="/server" element={<Server title="Server"/>}>Server</Route>
        </Routes>
        <Footer/>
      </div>
    </>
  );
}

export default App;