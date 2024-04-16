import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { PacmanLoader } from 'react-spinners';
import Footer from './components/Footer';
import Tabs from './components/Tabs';
import Home from './pages/Home';
import HowTo from './pages/HowTo';
import Server from './pages/Server';
import sw from '/assets/sw.png';

function App() {
  document.title = "Secret Weapon Deathmatch"

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 8000)
  }, [])

  return (
    <>
      {loading ? (
        <div className="flex flex-col items-center justify-center h-screen bg-[#5a233c] text-[rgb(243,1,93,1)]">
          <PacmanLoader
            color={"rgb(243,1,93,1)"}
            loading={loading}
            size={40}
            // margin={250}
            className="mx-auto motion-safe:animate-pulse"
          />
          <span className="mt-3 motion-safe:animate-pulse text-3xl">Loading</span>
        </div>
      ) : (
        <div className="lg:container bg-[#5a233c] text-slate-200 antialiased">
          <img src={sw} className="mx-auto w-52 mb-6" />
          <Tabs />
          <Routes>
            <Route path="/" element={<Home title="Home" />}>
              Home
            </Route>
            {/* <Route
              path="/administrator"
              element={<Administrator title="Administrator" />}
            >
              Administrator
            </Route> */}
            <Route path="/server" element={<Server title="Server" />}>
              Server
            </Route>
            <Route path="/how-to" element={<HowTo title="How To" />}>
              Server
            </Route>
          </Routes>
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;