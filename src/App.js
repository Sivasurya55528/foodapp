//import logo from './logo.svg';
// import './App.css';
import Header from './Header/Header';
// import Body from './Body/Body';
import Footer from './Footer/Footer';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />
      <Outlet />
      <Footer />

    </div>
  );
}

export default App;
