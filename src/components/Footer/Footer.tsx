import { footerStyles } from '@/styles/footerStyles';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Logo/Logo';

const Footer: FC = () => {
  return (
    <div className={footerStyles.wrapper}>
      <div>
        <Logo modificator='text-h4 leading-h4' />
        <p className={footerStyles.designed}>Designed by Pawel Gola</p>
        <p className={footerStyles.developed}>Developed by Jimmy-Co</p>
      </div>
      <div className={footerStyles.contentContainer}>
        <h4 className={footerStyles.title}>Pages</h4>
        <Link className={`${footerStyles.link} mb-[5px]`} to='/menu'>
          Menu
        </Link>
        <Link className={`${footerStyles.link} mb-[5px]`} to='/restaurant'>
          About
        </Link>
        <Link className={`${footerStyles.link} mb-[5px]`} to='/gift'>
          Gift
        </Link>
        <Link className={footerStyles.link} to='/bookThetable'>
          Book the table
        </Link>
      </div>
      <div className='flex flex-col items-start'>
        <h4 className={footerStyles.title}>Utility Pages</h4>
        <Link className={`${footerStyles.link} mb-[5px]`} to='/licensing'>
          Licensing
        </Link>
        <Link className={`${footerStyles.link} mb-[5px]`} to='/*'>
          404 Page
        </Link>
      </div>
    </div>
  );
};

export default Footer;
