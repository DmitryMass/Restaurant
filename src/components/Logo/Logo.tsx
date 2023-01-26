import { logoStyle } from '@/styles/logo';
import { FC } from 'react';
import { Link } from 'react-router-dom';

const Logo: FC = () => {
  return (
    <Link className={logoStyle.logo} to={'/'}>
      nique.
    </Link>
  );
};

export default Logo;
