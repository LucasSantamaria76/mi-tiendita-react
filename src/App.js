import { Layout } from './views/Layout';
import './app.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Home } from './views/Home';
import { Auth } from './views/Auth';
import { Products } from './views/Products';

/* const RequireAuth = ({ children }) => {
  if (!localStorage.getItem('user')) {
    return <Navigate to='/login' replace={true} />;
  }
  return children;
}; */

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/products' element={<Products />} />
          <Route path='/login' element={<Auth />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
