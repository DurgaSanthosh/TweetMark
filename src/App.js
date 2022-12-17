import Landing from "./pages/Landing/Landing";
import Navbar from "./components/navbar/navbar";
import {BrowserRouter as Router, Route,Routes} from 'react-router-dom';
import Feed from "./pages/Feed/Feed";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
     <Route path='/' element={<><Navbar/><Landing/></>}/>
     <Route path='/landing' element={<><Navbar/><Landing/></>}/>
     <Route path="/feed" element={<Feed/>}/>
     </Routes>
      </Router>
    </div>
  );
}

export default App;
