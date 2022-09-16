import './App.css';
import { AuthContextProvider } from './Context/AuthContext';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div>
      <Navbar/>
      <AuthContextProvider>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </AuthContextProvider>
    </div>
  );
}

export default App;
