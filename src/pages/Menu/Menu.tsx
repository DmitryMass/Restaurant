import { FC, useEffect, useRef } from 'react';
import MainContainer from '@/components/MainContainer/MainContainer';
import MenuContent from '@/components/MenuContent/MenuContent';
import RightSideBar from '@/components/RightSideBar/RightSideBar';
import { menuStyles } from '@/styles/menuStyles';
import { FloatButton } from 'antd';
import { UpCircleOutlined } from '@ant-design/icons';

const Menu: FC = () => {
  const ref = useRef<any>(null);

  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  return (
    <div className='flex flex-col lg:flex-row'>
      <FloatButton.BackTop
        className='flex justify-center items-center'
        icon={<UpCircleOutlined className='text-goldPrimary ' />}
      />
      <MainContainer
        title='Our Menus'
        subtitle='Check Out'
        styles={menuStyles}
      />
      <RightSideBar>
        <div className='absolute top-0' ref={ref} />
        <MenuContent />
      </RightSideBar>
    </div>
  );
};

export default Menu;
