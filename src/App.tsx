import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { PacmanLoader } from 'react-spinners';
import Footer from './components/Footer';
import Tabs from './components/Tabs';
import Home from './pages/Home';
import HowTo from './pages/HowTo';
import Server from './pages/Server';

function App() {
  document.title = "Secret Weapon Deathmatch"

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 3000)
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
        // <div className="">
        //     <Routes>
        //       <Route path="/" element={<Home title="Home" />} >
        //         Home
        //       </Route>
        //       <Route path="/server" element={<Server title="Server" />}>
        //         Server
        //       </Route>
        //       <Route path="/how-to" element={<HowTo title="How To" />}>
        //         Server
        //       </Route>
        //     </Routes>
        //   <Footer />
        // </div>
        <>
          <Tabs />
          <Home title='Secret Weapon Deathmatch' />
        </>
      )}
    </>
  );
}

export default App;