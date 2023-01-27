import { FloatButton } from 'antd';
import { FC, useEffect, useRef } from 'react';
import { UpCircleOutlined } from '@ant-design/icons';
import MainContainer from '@/components/MainContainer/MainContainer';
import RightSideBar from '@/components/RightSideBar/RightSideBar';
import { giftStyles } from '@/styles/giftStyles';
import GiftContent from '@/components/GiftContent/GiftContent';

const Gift: FC = () => {
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
      <MainContainer title='Give a gift' subtitle='Shop' styles={giftStyles} />
      <RightSideBar>
        <div className='absolute top-0' ref={ref} />
        <GiftContent />
      </RightSideBar>
    </div>
  );
};

export default Gift;
