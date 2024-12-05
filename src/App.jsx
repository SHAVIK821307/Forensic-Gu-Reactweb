import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <div className="min-h-screen flex flex-col ">
        <Navbar></Navbar>

        <div className="mx-0">
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/about" element={<About />} /> */}
            {/* <Route path="/contact" element={<Contact />} /> */}
            {/* <Route path="/services" element={<Services />} /> */}
            {/* <Route path="/portfolio" element={<Portfolio />} /> */}
            {/*<Route path="/services" element={<Services />} />
            <Route path="/franchise" element={<Franchise />} /> */}
          </Routes>
        </div>
      </div>
      {/* <Footer></Footer> */}
    </>
  );
}

export default App;
