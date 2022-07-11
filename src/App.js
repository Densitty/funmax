/* eslint-disable react/react-in-jsx-scope */
import Header from './components/header/Header';
import './App.scss';
import Main from './components/main/Main';
import {
  BrowserRouter as Router,
  Route,
  Routes
  // Switch
} from 'react-router-dom';
import Details from './components/content/details/Details';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/:id/:name/details" element={<Details />} />
      </Routes>
    </Router>
  );
}

export default App;
