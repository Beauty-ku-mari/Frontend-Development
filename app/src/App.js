
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import DataList from './DataList/DataList.jsx';
import ApiData from './DataList/ApiData.jsx';


function App() {
  return (
  <>
  

  <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/datalist" element={<DataList />} />
        <Route path="/apidata" element={<ApiData />} />

      </Routes>
    </Router>
  </>
  );
}

export default App;
