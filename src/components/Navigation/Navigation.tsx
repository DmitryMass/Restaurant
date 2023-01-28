import { FC, useState } from 'react';
import { NavLink } from 'react-router-dom';
import clock from '@/assets/icons/clock.svg';
import OpenHours from '../OpenHours/OpenHours';
import { navigationStyles } from '@/styles/navigationStyles';

const Navigation: FC = () => {
  const [opening, setOpening] = useState<boolean>(false);
  const activeStyle = {
    backgroundColor: 'rgb(239 239 239)',
  };
  return (
    <div className='relative'>
      {opening ? <OpenHours /> : null}
      <div className={navigationStyles.wrapper}>
        <div onClick={() => setOpening((prev) => !prev)} className='p-[10px]'>
          <img src={clock} alt='clock' />
        </div>
        <NavLink
          className={navigationStyles.navLink}
          to={'/menu'}
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          Menu
        </NavLink>
        <NavLink
          className={navigationStyles.navLink}
          to={'/restaurant'}
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          Restaurant
        </NavLink>
        <NavLink
          className={navigationStyles.navLink}
          to={'/gift'}
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          Gift
        </NavLink>
        <NavLink
          className={navigationStyles.bookATableBlack}
          to={'/booktable'}
          style={({ isActive }) =>
            isActive ? { backgroundColor: 'gray', color: 'black' } : undefined
          }
        >
          Book a table
        </NavLink>
      </div>
      <NavLink
        className={navigationStyles.bookATable}
        to={'/booktable'}
        style={({ isActive }) =>
          isActive ? { backgroundColor: 'gray', color: 'black' } : undefined
        }
      >
        Book a table
      </NavLink>
    </div>
  );
};

export default Navigation;
