import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './routes/Home';
import Detail from './routes/Detail';
import '../src/style.css';

const App = () => {
  return (
    <Router>
      <h1 className="title">React Movie App</h1>
      <Routes>
        <Route path="/movie/:id" element={<Detail />} />
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Navigate to="/"/>}/>
      </Routes>
    </Router>
  );
};

export default App;
