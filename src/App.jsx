import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from './Components/HomePage';
import { DetailPokemon } from './Components/DetailsPage';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/detailpokemon/:id" element={<DetailPokemon />} />
        </Routes>

      </Router>
    </div>
  )
}

export default App;