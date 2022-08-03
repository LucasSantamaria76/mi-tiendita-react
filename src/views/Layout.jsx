import Navbar from '../components/Navbar';

export const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div>{children}</div>
    </>
  );
};
