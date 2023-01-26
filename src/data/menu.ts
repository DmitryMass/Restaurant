import { IMenu } from './../types/menu';
import appleBreeze from '@/assets/images/appleBreez.png';
import avocadoSmash from '@/assets/images/avocadoSmash.png';
import deliciousPanc from '@/assets/images/deliciousPanc.png';
import frenchmanBlitz from '@/assets/images/frenchmanBlitz.png';
import italianPizza from '@/assets/images/italianPizza.png';
import noodleBowl from '@/assets/images/noodleBowl.png';
import noodleSoup from '@/assets/images/noodleSoup.png';
import oatmealSpirit from '@/assets/images/oatmealSpirit.png';
import pumpkinSoup from '@/assets/images/pumpkinSoup.png';
import seaCurry from '@/assets/images/seaCurry.png';
import sweetHeaven from '@/assets/images/sweetHeaven.png';
import tomatoToast from '@/assets/images/tomatoToast.png';
import tonic from '@/assets/images/tonic.png';
import veganBurger from '@/assets/images/veganBurger.png';

const menu: IMenu = {
  starters: [
    {
      id: 1,
      img: `${tomatoToast}`,
      title: 'Tomato Toast',
      desc: 'Lorem ipsum dolor sit amet, consectetur',
      price: '$29',
    },
    {
      id: 2,
      img: `${noodleSoup}`,
      title: 'Noodle Soup',
      desc: 'Lorem ipsum dolor sit amet, consectetur',
      price: '$5.00',
    },
    {
      id: 3,
      img: `${pumpkinSoup}`,
      title: 'Pumpkin Soup',
      desc: 'Lorem ipsum dolor sit amet, consectetur',
      price: '$5.00',
    },
  ],
  breakfast: [
    {
      id: 1,
      img: `${deliciousPanc}`,
      title: 'Delicious Pancakes',
      desc: 'Lorem ipsum dolor sit amet, consectetur',
      price: '$5.00',
    },
    {
      id: 2,
      img: `${sweetHeaven}`,
      title: 'Sweet Heaven',
      desc: 'Lorem ipsum dolor sit amet, consectetur',
      price: '$11.00',
    },
    {
      id: 3,
      img: `${oatmealSpirit}`,
      title: 'Oatmeal Spirit',
      desc: 'Lorem ipsum dolor sit amet, consectetur',
      price: '$8.00',
    },
    {
      id: 4,
      img: `${avocadoSmash}`,
      title: 'Avocado Smash',
      desc: 'Lorem ipsum dolor sit amet, consectetur',
      price: '$6.50',
    },
  ],
  dinner: [
    {
      id: 1,
      img: `${italianPizza}`,
      title: 'Italian Pizza',
      desc: 'Tomatillo, Baja Crema, Cabbage, Fried Okra',
      price: '$14.00',
    },
    {
      id: 2,
      img: `${seaCurry}`,
      title: 'Sea Curry',
      desc: 'Tomatillo, Baja Crema, Cabbage, Fried Okra',
      price: '$20.00',
    },
    {
      id: 3,
      img: `${veganBurger}`,
      title: 'Vegan Burger',
      desc: 'Tomatillo, Baja Crema, Cabbage, Fried Okra',
      price: '$9.00',
    },
    {
      id: 4,
      img: `${noodleBowl}`,
      title: 'Noodle Bowl',
      desc: 'Tomatillo, Baja Crema, Cabbage, Fried Okra',
      price: '$10.00',
    },
  ],
  drinks: [
    {
      id: 1,
      img: `${tonic}`,
      title: 'Panthouse Tonic',
      desc: 'Tomatillo, Baja Crema, Cabbage, Fried Okra',
      price: '$15.00',
    },
    {
      id: 2,
      img: `${appleBreeze}`,
      title: 'Apple Breeze',
      desc: 'Tomatillo, Baja Crema, Cabbage, Fried Okra',
      price: '$10.00',
    },
    {
      id: 3,
      img: `${frenchmanBlitz}`,
      title: 'Frenchman Blitz',
      desc: 'Tomatillo, Baja Crema, Cabbage, Fried Okra',
      price: '$12.00',
    },
  ],
  luch: [
    {
      id: 1,
      img: '',
      title: '',
      desc: '',
      price: '',
    },
    {
      id: 2,
      img: '',
      title: '',
      desc: '',
      price: '',
    },
    {
      id: 3,
      img: '',
      title: '',
      desc: '',
      price: '',
    },
  ],
  all: true,
};

export default menu;
