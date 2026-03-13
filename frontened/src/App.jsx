import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import { Leaf, Clock } from 'lucide-react';
import Recommend from './pages/Recommend';
import BestTime from './pages/BestTime';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50 text-gray-800 flex flex-col">
        <header className="bg-green-600 shadow-md">
          <div className="container mx-auto px-4">
            <nav className="flex justify-between items-center py-4">
              <div className="flex items-center space-x-2">
                <Leaf className="text-white" size={24} />
                <h1 className="text-2xl font-bold text-white tracking-tight">PlantSmart</h1>
              </div>
              
              <div className="flex space-x-6">
                <NavLink 
                  to="/" 
                  className={({ isActive }) => 
                    `flex items-center space-x-1 px-3 py-2 rounded-md transition-colors
                     ${isActive ? 'bg-green-700 text-white' : 'text-green-100 hover:bg-green-700/50'}`
                  }
                  end
                >
                  <Leaf size={18} />
                  <span>Recommend Crop</span>
                </NavLink>
                
                <NavLink 
                  to="/best-time" 
                  className={({ isActive }) => 
                    `flex items-center space-x-1 px-3 py-2 rounded-md transition-colors
                     ${isActive ? 'bg-green-700 text-white' : 'text-green-100 hover:bg-green-700/50'}`
                  }
                >
                  <Clock size={18} />
                  <span>Best Time</span>
                </NavLink>
              </div>
            </nav>
          </div>
        </header>
        
        <main className="flex-grow container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Recommend />} />
            <Route path="/best-time" element={<BestTime />} />
          </Routes>
        </main>
        
        <footer className="bg-green-600 text-white py-4">
          <div className="container mx-auto px-4 text-center text-sm">
            © {new Date().getFullYear()} PlantSmart - Intelligent Soil Monitoring System
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;