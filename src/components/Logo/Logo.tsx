import { logoStyle } from '@/styles/logo';
import { FC } from 'react';
import { Link } from 'react-router-dom';

interface ILogoProps {
  modificator?: string;
}

const Logo: FC<ILogoProps> = ({ modificator }) => {
  return (
    <Link className={`${logoStyle.logo} ${modificator}`} to={'/'}>
      nique.
    </Link>
  );
};

export default Logo;
