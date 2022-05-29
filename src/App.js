import { BrowserRouter as Router, Route, Link, Routes, Navigate, Outlet } from "react-router-dom";
import './App.css';
import Deshboard from "./Components/Deshboard";
import Login from "./Components/Login";
import Registrastion from "./Components/Registrastion";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={
            <ProtectedRoute>
              <Login />
            </ProtectedRoute>} />
          <Route exact path="/registrastion" element={
            <ProtectedRoute>
              <Registrastion />
            </ProtectedRoute>} />
          <Route exact path="/deshboard" element={
            <PrivateRoute>
              <Deshboard />
            </PrivateRoute>} />
        </Routes>
      </Router>
    </div>
  );
}

const PrivateRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem('isAuthenticated');
  return isAuthenticated ? children : <Navigate to="/" />;
};

const ProtectedRoute = ({ children }) => {
  const useAuth = () => {
    const isAuthenticated = localStorage.getItem('isAuthenticated');
    if(isAuthenticated){
    return true
  } else {
    return false
  }

  }
  const auth = useAuth()
  return auth ? children : <Navigate to="/" />;
};
export default App;
