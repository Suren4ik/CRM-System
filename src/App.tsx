import { Route, Routes } from 'react-router-dom';
import './App.scss';
import { TodoPage } from './pages';

function App() {
  return (
    <Routes>
      <Route path="/" element={<TodoPage />} />
    </Routes>
  );
}

export default App;
