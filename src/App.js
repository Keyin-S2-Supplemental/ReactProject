  // App.js

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';
import Feed from './Feed';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<Signup />}>
        </Route>
        <Route path="/feed" element={<Feed />}>
        </Route>
        <Route path="/login" element={<Login />}>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
