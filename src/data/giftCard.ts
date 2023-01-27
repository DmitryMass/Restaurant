import { IGift } from './../types/gift';
import cardLight from '@/assets/images/cardLight.png';
import cardStandart from '@/assets/images/cardStandart.png';
import cardGold from '@/assets/images/cardGold.png';
import cardPremium from '@/assets/images/cardPremium.png';

const giftCard: IGift[] = [
  {
    id: 1,
    img: `${cardLight}`,
    price: '$ 15 USD',
    title: 'Gift Card Light',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit eo ut vitae neque sed sed sit sagittis tristique scelerisque.',
  },
  {
    id: 2,
    img: `${cardStandart}`,
    price: '$ 30 USD',
    title: 'Gift Card Standard',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit eo ut vitae neque sed sed sit sagittis tristique scelerisque.',
  },
  {
    id: 3,
    img: `${cardPremium}`,
    price: '$ 50 USD',
    title: 'Gift Card Premium',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit eo ut vitae neque sed sed sit sagittis tristique scelerisque.',
  },
  {
    id: 4,
    img: `${cardGold}`,
    price: '$ 100 USD',
    title: 'Gift Card Gold',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit eo ut vitae neque sed sed sit sagittis tristique scelerisque.',
  },
];

export default giftCard;
