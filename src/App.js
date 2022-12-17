import Landing from "./pages/Landing/Landing";
import Navbar from "./components/navbar/navbar";
import {BrowserRouter as Router, Route,Routes} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
     <Route path='/' element={<><Navbar/><Landing/></>}/>
     </Routes>
      </Router>
    </div>
  );
}

export default App;
