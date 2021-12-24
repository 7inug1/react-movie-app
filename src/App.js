import { BrowserRouter as Router, Routes, Route, Navigate, Outlet } from 'react-router-dom';
import Home from './routes/Home';
import Detail from './routes/Detail';
// import UnavailablePage from './routes/UnavailablePage';
import '../src/style.css';

const App = () => {
  return (
    <Router>
      <h1 className="title">React Movie App</h1>
      <Routes>

      <Route path="movie">
        <Route path=":id" element={<Detail />} />

      </Route>

        <Route path="/" element={<Home />} />
        <Route path="/*" element={<Navigate to="/"/>}/>
        {/* <Route path="/movie/*" element={<UnavailablePage />} /> */}
      </Routes>
    </Router>
  );
};

export default App;
