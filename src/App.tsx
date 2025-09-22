import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';


const App = () => {
  return (
    <BrowserRouter>
      {/*<nav className="p-4 bg-gray-100 flex justify-center space-x-4">
        <Link to="/" className="text-blue-500 hover:underline">Strona główna</Link>
        <Link to="/about" className="text-blue-500 hover:underline">O nas</Link>
      </nav>*/}
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/*<Route path="/about" element={<AboutPage />} />*/}
      </Routes>
    </BrowserRouter>
  );
};

export default App;