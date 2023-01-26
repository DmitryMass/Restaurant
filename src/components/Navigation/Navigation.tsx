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
          className='py-[10px] px-[15px] rounded-[100px] text-text text-p leading-p font-medium'
          to={'/menu'}
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          Menu
        </NavLink>
        <NavLink
          className='p-[15px] rounded-[100px] text-text text-p leading-p font-medium'
          to={'/restaurant'}
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          Restaurant
        </NavLink>
        <NavLink
          className='p-[15px] rounded-[100px] text-text text-p leading-p font-medium'
          to={'/classes'}
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          Classes
        </NavLink>
        <NavLink
          className='p-[15px] rounded-[100px] uppercase text-sm leading-p font-medium bg-bookedBtn text-white tracking-[1px]'
          to={'/booktable'}
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          Book a table
        </NavLink>
      </div>
    </div>
  );
};

export default Navigation;
