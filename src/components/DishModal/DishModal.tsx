import { FC, useState } from 'react';
import { dishStyles } from '@/styles/dish';
import { IDish } from '@/types/dish';
import close from '@/assets/icons/close.svg';
import '../Dish/dish.scss';
import { Rate } from 'antd';

interface IDishModalProps {
  item: IDish;
  setState: (value: boolean) => void;
}

const desc = ['Terrible', 'Bad', 'Normal', 'Good', 'Wonderful'];
const DishModal: FC<IDishModalProps> = ({ item, setState }) => {
  const [value, setValue] = useState(3);
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
            <span className='flex min-h-[61px] h-full flex-col items-center gap-[10px]'>
              <Rate tooltips={desc} onChange={setValue} value={value} />
              {value ? (
                <span className='ant-rate-text block text-white text-sp leading-sp'>
                  {desc[value - 1]}
                </span>
              ) : (
                ''
              )}
            </span>
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
