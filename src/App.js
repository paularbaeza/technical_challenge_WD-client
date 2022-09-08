import "./App.css";
import { Routes, Route } from "react-router-dom";
import PhonesList from "./Components/PhonesList";
import PhoneDetails from "./pages/PhoneDetails";

function App() {
  return (
    <div className="App">
    
      <PhonesList />
      <Routes>
        <Route path="/phones/:phoneId" element={<PhoneDetails />} />
      </Routes>
    </div>
  );
}

export default App;
