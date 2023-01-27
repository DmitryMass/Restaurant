import MainContainer from '@/components/MainContainer/MainContainer';
import RestaurantContent from '@/components/RestaurantContent/RestaurantContent';
import RightSideBar from '@/components/RightSideBar/RightSideBar';
import { restaurantStyles } from '@/styles/restaurantStyles';
import { FloatButton } from 'antd';
import { FC, useEffect, useRef } from 'react';
import { UpCircleOutlined } from '@ant-design/icons';

const Restaurant: FC = () => {
  const ref = useRef<any>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      ref.current?.scrollIntoView({ behavior: 'smooth' });
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className='flex flex-col lg:flex-row'>
      <FloatButton.BackTop
        className='flex justify-center items-center'
        icon={<UpCircleOutlined className='text-goldPrimary ' />}
      />
      <MainContainer
        title='Restaurant'
        subtitle='Since in 2023'
        styles={restaurantStyles}
      />
      <RightSideBar>
        <div className='absolute top-0' ref={ref} />
        <RestaurantContent />
      </RightSideBar>
    </div>
  );
};

export default Restaurant;
