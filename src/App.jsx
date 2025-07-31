import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import AlumniPage from './components/AlumniPage';
import OfficerDetailPage from './components/OfficerDetailPage';
import './App.css'

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/alumni" element={<AlumniPage />} />
            <Route path="/officer/:id" element={<OfficerDetailPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App
