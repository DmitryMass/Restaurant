import { FC } from 'react';
import { IGift } from '@/types/gift';
import { giftStyles } from '@/styles/giftStyles';

interface IGiftCardProps {
  item: IGift;
}

const GiftCard: FC<IGiftCardProps> = ({
  item: { price, desc, img, title },
}) => {
  return (
    <div className={giftStyles.cardWrapper}>
      <div className={giftStyles.imgWrapper}>
        <img className={giftStyles.cardImg} src={img} alt='' />
      </div>
      <div>
        <p className={giftStyles.cardPrice}>{price}</p>
        <h4 className={giftStyles.cardTitle}>{title}</h4>
        <p className={giftStyles.cardDesc}>{desc}</p>
      </div>
    </div>
  );
};

export default GiftCard;
