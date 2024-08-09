import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Game } from './components/Game.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/game/:page" element={<Game />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
