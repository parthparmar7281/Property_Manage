
import { Route, Routes } from 'react-router-dom';
import Service from './pages/Service';
import Home from './pages/Home';
function App() {
  return (
    <div className="App">
     
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/service" element={<Service />} />
      </Routes>
    </div>
  );
}

export default App;
