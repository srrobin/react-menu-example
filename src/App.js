import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import MenuOne from "./components/MenuOne/MenuOne";
const App = () => {
  return (
    <BrowserRouter>
      <MenuOne />
      {/* <MenuTwo /> */}

      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="about" element={<About />} />
        <Route path="services" element={<Services />} />
        <Route path="contact" element={<Contact />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
