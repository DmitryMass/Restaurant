import { FC } from 'react';
import { dishStyles } from '@/styles/dish';
import { IDish } from '@/types/dish';
import close from '@/assets/icons/close.svg';
import '../Dish/dish.scss';

interface IDishModalProps {
  item: IDish;
  setState: (value: boolean) => void;
}

const DishModal: FC<IDishModalProps> = ({ item, setState }) => {
  return (
    <div className={dishStyles.modalWrapper}>
      <div className={`${dishStyles.contentContainer} dishModal`}>
        <div className='grow'>
          <h5 className={dishStyles.modalTitle}>{item.title}</h5>
          <p className={dishStyles.modalDesc}>{item.desc}</p>
        </div>
        <div>
          <div className='flex justify-between mb-[25px]'>
            <span className={dishStyles.modalRate}>Rate 4.95*</span>
            <p className={dishStyles.modalPrice}>{item.price}</p>
          </div>
          <div className={dishStyles.modalVote}>
            <button className={dishStyles.modalVoteBtn}>1*</button>
            <button className={dishStyles.modalVoteBtn}>2*</button>
            <button className={dishStyles.modalVoteBtn}>3*</button>
            <button className={dishStyles.modalVoteBtn}>4*</button>
            <button className={dishStyles.modalVoteBtn}>5*</button>
          </div>
        </div>
        <div
          onClick={() => setState(false)}
          className='text-white cursor-pointer absolute top-[25px] right-[25px] hover:scale-[1.1] transition-all duration-75'
        >
          <img className='w-[25px] h-[25px]' src={close} alt='close' />
        </div>
      </div>
    </div>
  );
};

export default DishModal;
