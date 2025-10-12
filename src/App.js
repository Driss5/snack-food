import Home from './Pages/Home';
import SelectedFood from './Pages/SelectedFood';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
        {/* <Home /> */}
            <Router>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/pageSelectedFood" element={<SelectedFood />} />
              </Routes>
            </Router>
    </div>
  );
}

export default App;
