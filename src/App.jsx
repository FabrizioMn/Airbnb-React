import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Explorar from './pages/Explorar'
import Home from './pages/Home'
import { BrowserRouter as Router, Routes, Route} from "react-router";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/explorar" element={<Explorar/>}/>
        </Routes>
        <Footer/>
      </Router>

    </>
  );
}

export default App;
