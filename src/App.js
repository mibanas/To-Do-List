import { Routes, Route } from 'react-router-dom';
import './App.css';
import Sidebare from './components/common/Sidebare';
import Mybacklog from './pages/Mybacklog';
import Mykanban from './pages/Mykanban';

function App() {
  return (
    <div className='flex'>
      <div className='w-2/12 bg-gray-200 p-4 h-screen'>
        <Sidebare />
    </div>

    <div className='w-10/12 p-4 h-screen'>
      <Routes>
        <Route path='/' element={<Mybacklog />} />
        <Route path='/kanban' element={<Mykanban />} />
      </Routes>
    </div>
</div>
  );
}

export default App;
