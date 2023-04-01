import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import Home from './Home';
import MovieList from './Movies';
import BaconSale from './Podcasts';

//configures the routing for the navbar to work
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="podcasts" element={<BaconSale />} />
          <Route path="movies" element={<MovieList />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
