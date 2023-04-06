import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Home from '../pages/Home';
import MovieList from '../movie/Movies';
import BaconSale from '../pages/Podcasts';

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
