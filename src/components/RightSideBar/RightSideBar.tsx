import React, { FC } from 'react';

interface IRightSideBarProps {
  children: React.ReactNode | React.ReactElement;
}

const RightSideBar: FC<IRightSideBarProps> = ({ children }) => {
  return (
    <aside className='grow h-screen overflow-hidden w-full lg:w-[50%] py-[30px] px-[20px]'>
      {children}
    </aside>
  );
};

export default RightSideBar;
