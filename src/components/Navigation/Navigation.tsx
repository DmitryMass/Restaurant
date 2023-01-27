import { FC, useState } from 'react';
import { Link, NavLink, useParams } from 'react-router-dom';
import clock from '@/assets/icons/clock.svg';
import OpenHours from '../OpenHours/OpenHours';

const Navigation: FC = () => {
  const [opening, setOpening] = useState<boolean>(false);
  const activeStyle = {
    backgroundColor: 'rgb(239 239 239)',
  };

  return (
    <div className='relative'>
      {opening ? <OpenHours /> : null}
      <div className='bg-white p-[10px] flex justify-between items-center rounded-[100px] gap-[5px] min-h-[68px]'>
        <div onClick={() => setOpening((prev) => !prev)} className='p-[16px]'>
          <img src={clock} alt='clock' />
        </div>
        <NavLink
          className='p-[5px] sm:py-[10px] px-[15px] rounded-[100px] text-text text-sp leading-sp sm:text-p sm:leading-p font-medium'
          to={'/menu'}
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          Menu
        </NavLink>
        <NavLink
          className='p-[7px] sm:p-[15px] rounded-[100px] text-text  text-sp leading-sp sm:text-p sm:leading-p  font-medium'
          to={'/restaurant'}
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          Restaurant
        </NavLink>
        <NavLink
          className='p-[7px] sm:p-[15px] rounded-[100px] text-text  text-sp leading-sp sm:text-p sm:leading-p  font-medium'
          to={'/classes'}
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          Classes
        </NavLink>
        <NavLink
          className='p-[7px] sm:p-[15px] rounded-[100px] uppercase  text-sm leading-sm sm:text-sp sm:leading-sp  font-medium bg-bookedBtn text-white  hidden sm:block'
          to={'/booktable'}
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          Book a table
        </NavLink>
      </div>
      <NavLink
        className='max-w-[155px] w-full mx-auto flex justify-center items-center p-[7px] sm:p-[15px] rounded-[100px] text-text uppercase  text-sp leading-sp sm:text-p sm:leading-p  font-medium bg-white   mt-[10px] sm:hidden'
        to={'/booktable'}
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
      >
        Book a table
      </NavLink>
    </div>
  );
};

export default Navigation;
