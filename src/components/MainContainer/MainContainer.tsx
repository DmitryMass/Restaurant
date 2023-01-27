import { FC } from 'react';
import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';
import './mainContainer.scss';

interface IMainContainer {
  title: string;
  subtitle: string;
  text?: string;
  styles: any;
}

const MainContainer: FC<IMainContainer> = ({
  title,
  subtitle,
  text,
  styles,
}) => {
  return (
    <div className={`${styles.wrapper}`}>
      <Logo />
      <section className={styles.contentWrapper}>
        <h2 className={styles.subtitle}>{subtitle}</h2>
        <h1 className={styles.title}>{title}</h1>
        {text ? <p className={styles.text}>{text}</p> : null}
      </section>
      <Navigation />
    </div>
  );
};

export default MainContainer;
