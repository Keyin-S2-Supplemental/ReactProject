  // App.js

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';
import Feed from './Feed';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />}>
        </Route>
        <Route path="/signup" element={<Signup />}>
        </Route>
        <Route path="/" element={<Feed />}>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
