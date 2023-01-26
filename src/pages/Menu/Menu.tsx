import Footer from '@/components/Footer/Footer';
import MainContainer from '@/components/MainContainer/MainContainer';
import MenuContent from '@/components/MenuContent/MenuContent';
import RightSideBar from '@/components/RightSideBar/RightSideBar';
import { menuStyles } from '@/styles/menuStyles';
import { FC } from 'react';

const Menu: FC = () => {
  return (
    <div className='flex flex-col lg:flex-row'>
      <MainContainer
        title='Our Menus'
        subtitle='Check Out'
        styles={menuStyles}
      />
      <RightSideBar>
        <MenuContent />
      </RightSideBar>
    </div>
  );
};

export default Menu;
