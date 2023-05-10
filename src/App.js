import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


// component and route imports
import Navigation from './components/Navigation';
import Home from './routes/Home';
import Dramas from './routes/Dramas';
import NowPlaying from './routes/NowPlaying';

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dramas" element={<Dramas />} />
        <Route path="/nowplaying" element={<NowPlaying />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
