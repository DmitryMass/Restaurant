import MainContainer from '@/components/MainContainer/MainContainer';
import { mainContainer } from '@/styles/mainContainer';
import { FC } from 'react';

const Main: FC = () => {
  return (
    <MainContainer
      styles={mainContainer}
      subtitle='The pure taste of'
      title='Thailand'
      text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.'
    />
  );
};

export default Main;
