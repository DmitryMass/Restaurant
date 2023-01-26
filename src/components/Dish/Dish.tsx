import { dishStyles } from '@/styles/dish';
import { IDish } from '@/types/dish';
import { FC, useState } from 'react';
import DishModal from '../DishModal/DishModal';
import './dish.scss';

interface IDishProps {
  item: IDish;
}

const Dish: FC<IDishProps> = ({ item }) => {
  const { desc, id, img, price, title } = item;
  const [modal, setModal] = useState<boolean>(false);
  return (
    <>
      {modal ? <DishModal item={item} setState={setModal} /> : null}
      <div
        onClick={() => setModal((prev) => !prev)}
        className={`dish mr-[20px] ${dishStyles.wrapper}`}
      >
        <div className='w-[90px] h-[70px]'>
          <img className={dishStyles.img} src={img} alt='' />
        </div>
        <div className={dishStyles.contentWrapper}>
          <div className='grow'>
            <h5 className={dishStyles.title}>{title}</h5>
            <p className={dishStyles.desc}>{desc}</p>
          </div>
          <span className={dishStyles.price}>{price}</span>
        </div>
      </div>
    </>
  );
};

export default Dish;
