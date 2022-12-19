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
      <Header Link={Link} />
      <Nav Link={Link} />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/happy" element={<Gallery />} />
        <Route path="/birthday" element={<Play />} />
        <Route path="/to" element={<Letter />} />
        <Route path="/you" element={<Cam />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
