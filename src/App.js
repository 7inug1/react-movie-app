import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './routes/Home';
import Detail from './routes/Detail';
import Layout from './layouts/Layout'
import GlobalStyle from './styles/GlobalStyle'
// import UnavailablePage from './routes/UnavailablePage';
import '../src/style.css';

const App = () => {
  return (
    <>
    <GlobalStyle />
    <Router>
      <Routes>
      <Route path="/" element={<Layout />}>
          <Route path="movie/:id" element={<Detail />} />
        <Route path="/" element={<Home />} />
        <Route path="/*" element={<Navigate to="/"/>}/>
      </Route>
      </Routes>
    </Router>
    </>
  );
};

export default App;
