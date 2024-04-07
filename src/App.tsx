import './App.css';
import { Route, Routes } from 'react-router-dom';
import Indro from './Pages/Indro/Indro';
import Watch from './Pages/Watch/Watch';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Indro />} />
      <Route path="/watch" element={<Watch />} />
    </Routes>
  );
}

export default App;
