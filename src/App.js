import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Header from './components/Header';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Main from './pages/Main';
import Gallery from './pages/Gallery';
import Play from './pages/Play';
import Letter from './pages/Letter';
import Cam from './pages/Cam';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Nav Link={Link} />
      <Routes>
        <Route path="/birthday_project" element={<Main Link={Link} />} />
        <Route path="/happy" element={<Gallery Link={Link} />} />
        <Route path="/birthday" element={<Play Link={Link} />} />
        <Route path="/to" element={<Letter Link={Link} />} />
        <Route path="/you" element={<Cam Link={Link} />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
