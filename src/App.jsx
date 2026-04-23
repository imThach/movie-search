import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import Navbar from './components/navBar';
import MovieDetail from './pages/movieDetail';
import Home from './pages/Home';

function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const isDetailPage = location.pathname.includes('/movie/');

  return (
    <div className="min-h-screen bg-[#424242] text-white">
      {/* Navbar cố định */}
      <Navbar onHomeClick={() => navigate('/')} showBackBtn={isDetailPage} onBack={() => navigate(-1)} />
      <main className="pt-20 px-4 md:px-8 max-w-7xl mx-auto">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:id" element={<MovieDetail />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;