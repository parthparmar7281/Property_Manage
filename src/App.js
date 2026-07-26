import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Service from "./pages/Service";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Properties } from "./pages/Properties";
import PropertyDetail from "./components/PropertyDetails/PropertyDetails";

import Login from "./components/auth/Login";
import SignUp from "./components/auth/SignUp";
import MainLayout from "./components/layout/Mainlayout";
import AddProperty from "./components/AddProperty";

function App() {
  return (
    <Routes>

      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/service" element={<Service />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/property" element={<Properties />} />
        <Route path="/property/:id" element={<PropertyDetail />} />
        <Route path="/addProperty" element={<AddProperty />} />
      </Route>

      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />

    </Routes>
  );
}

export default App;