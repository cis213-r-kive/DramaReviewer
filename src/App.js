import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


// component and route imports
import Navigation from './components/Navigation';
import Home from './routes/Home';
import Dramas from './routes/Dramas';

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dramas" element={<Dramas />} />
        {/*<Route path="/signup" element={<SignUp />} />*/}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
