import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { CssBaseline } from '@mui/material';
import Hello from './pages/Hello';
import Books from './pages/Books';
import Navbar from './components/Navbar';

export default function App() {
  return (
    <Router>
      <CssBaseline />
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Hello />} />
          <Route path="/books" element={<Books />} />
        </Routes>
      </div>
    </Router>
  );
}
