import { FC, useEffect, useRef } from 'react';
import { FloatButton } from 'antd';
import { UpCircleOutlined } from '@ant-design/icons';
import MainContainer from '@/components/MainContainer/MainContainer';
import RightSideBar from '@/components/RightSideBar/RightSideBar';
import BookedContent from '@/components/BookedContent/BookedContent';
import { bookedStyles } from '@/styles/bookedStyles';

const Booked: FC = () => {
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
        title='Book a table'
        subtitle='Contact'
        styles={bookedStyles}
      />
      <RightSideBar>
        <div className='absolute top-0' ref={ref} />
        <BookedContent />
      </RightSideBar>
    </div>
  );
};

export default Booked;
