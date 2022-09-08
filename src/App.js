import "./App.css";
import { Routes, Route } from "react-router-dom";
import PhonesList from "./Components/PhonesList";
import PhoneDetails from "./pages/PhoneDetails";
import Home from "./pages/Home";
import Error from "./pages/Error";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div className="App">
    
      <PhonesList />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/phones/:phoneId" element={<PhoneDetails />} />
        <Route path="/error" element={<Error />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
