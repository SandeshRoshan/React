import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar.jsx'
import Header from './components/Header.jsx'
import Topbar from './components/Topbar.jsx'
import Footer from './components/Footer.jsx'
import Feature from './components/Feature.jsx'
import Courses from './components/Courses.jsx'
import About from './components/About.jsx'

function App() {

  return (
    <Router>
      <Topbar />
      <Navbar />
      <Header />
      <Routes>
      <Route index path="/index.html" element={<Courses />} />
      <Route path="/about.html" element={<About />} />
      </Routes>
      <Feature />
      <Footer />
    </Router>
  )
}

export default App
