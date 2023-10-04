import './App.css';
import { BrowserRouter } from 'react-router-dom';
import RouterManagement from './routers';

function App() {
  return (
    <BrowserRouter forceRefresh={true}>
      <RouterManagement />
    </BrowserRouter>
  );
}

export default App;
