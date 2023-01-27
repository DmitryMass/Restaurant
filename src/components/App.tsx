import Main from '@/pages/Main/Main';
import Menu from '@/pages/Menu/Menu';
import Restaurant from '@/pages/Restaurant/Restaurant';
import { FC } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.scss';

const App: FC = () => {
  return (
    <div className='h-screen'>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/menu' element={<Menu />} />
        <Route path='/restaurant' element={<Restaurant />} />
      </Routes>
    </div>
  );
};

export default App;
