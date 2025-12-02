import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./screens/Landing";
import Privacy from "./forms/Privacy";

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Landing />} />

        {/* Dashboard & Nested Routes */}
        <Route path="/dashboard" element={<Landing />}>
          <Route path="privacy" element={<Privacy />} />
        </Route>

      </Routes>
    </Router>
  );
}

export default App;
