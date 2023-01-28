import { FC } from 'react';
import photo from '@/assets/images/restaurantPhoto.png';
import Footer from '../Footer/Footer';
import { restaurantStyles } from '@/styles/restaurantStyles';

const RestaurantContent: FC = () => {
  return (
    <div className={restaurantStyles.restContentContainer}>
      <div>
        <h4 className={restaurantStyles.restTitle}>Lorem ipsum dolor</h4>
        <p className={restaurantStyles.restSubtitle}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Integer
          malesuada nunc vel risus commodo viverra maecenas. Dis parturient
          montes nascetur ridiculus mus mauris vitae ultricies. Placerat duis
          ultricies lacus sed turpis. Vel elit scelerisque mauris pellentesque
          pulvinar pellentesque habitant morbi tristique. Turpis massa sed
          elementum tempus egestas sed sed risus.{' '}
        </p>
      </div>
      <div className='mb-[30px]'>
        <img src={photo} alt='' />
      </div>
      <div>
        <h4 className={restaurantStyles.restTitle}>Lorem ipsum dolor</h4>
        <p className={restaurantStyles.restSubtitle}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Integer
          malesuada nunc vel risus commodo viverra maecenas. Dis parturient
          montes nascetur ridiculus mus mauris vitae ultricies. Placerat duis
          ultricies lacus sed turpis. Vel elit scelerisque mauris pellentesque
          pulvinar pellentesque habitant morbi tristique. Turpis massa sed
          elementum tempus egestas sed sed risus. Velit ut tortor pretium
          viverra. Vivamus arcu felis bibendum ut. Quis enim lobortis
          scelerisque fermentum dui faucibus in ornare. Fusce ut placerat orci
          nulla pellentesque dignissim enim. Congue eu consequat ac felis donec
          et. Feugiat vivamus at augue eget arcu dictum. Scelerisque felis
          imperdiet proin fermentum leo vel orci. Auctor urna nunc id cursus
          metus aliquam eleifend mi. Facilisis mauris sit amet massa vitae
          tortor condimentum lacinia. Eget arcu dictum varius duis at
          consectetur lorem. Magna eget est lorem ipsum.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default RestaurantContent;
