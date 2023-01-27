import giftCard from '@/data/giftCard';
import { IGift } from '@/types/gift';
import { FC } from 'react';
import Footer from '../Footer/Footer';
import List from '../List/List';
import GiftCard from './GiftCard/GiftCard';

const GiftContent: FC = () => {
  return (
    <div className='max-w-[600px] w-full mx-auto py-[30px]  h-[100%] overflow-auto'>
      <List
        items={giftCard}
        renderItems={(item: IGift) => <GiftCard key={item.title} item={item} />}
      />
      <Footer />
    </div>
  );
};

export default GiftContent;
