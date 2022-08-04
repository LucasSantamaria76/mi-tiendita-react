import { Layout } from './views/Layout';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './views/Home';
import { Auth } from './views/Auth';
import { Products } from './views/Products';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import './App.css';

/* const RequireAuth = ({ children }) => {
  if (!localStorage.getItem('user')) {
    return <Navigate to='/login' replace={true} />;
  }
  return children;
}; */
const queryClient = new QueryClient();

const App = () => {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <Layout>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/products' element={<Products />} />
            <Route path='/login' element={<Auth />} />
          </Routes>
        </Layout>
        <ReactQueryDevtools />
      </QueryClientProvider>
    </BrowserRouter>
  );
};

export default App;
