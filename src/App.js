import Home from './Pages/Home';
import SelectedFood from './Pages/SelectedFood';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PageLikes from './Pages/PageLikes';

function App() {
  return (
    <div className="App">
        {/* <Home /> */}
            <Router>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/pageSelectedFood" element={<SelectedFood />} />
                <Route path="/pageLikes" element={<PageLikes />} />
              </Routes>
            </Router>
    </div>
  );
}

export default App;
