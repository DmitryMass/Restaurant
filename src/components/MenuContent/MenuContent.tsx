import { FC } from 'react';
import FilterPanel from '../FilterPanel/FilterPanel';
import List from '../List/List';
import menu from '../../data/menu';
import Dish from '../Dish/Dish';
import { IDish } from '@/types/dish';
import useTypedSelector from '@/store/storageHooks/useTypedSelector';
import { contentStyles } from '@/styles/contentStyles';
import Footer from '../Footer/Footer';

interface IMenuTitle {
  title: string;
}
const MenuTitle: FC<IMenuTitle> = ({ title }) => {
  return (
    <h2 className='font-dancing text-goldPrimary text-[32px] leading-[38px] sm:text-h3 sm:leading-h3 mb-[20px]'>
      {title}
    </h2>
  );
};

const MenuContent: FC = () => {
  const menu: any = useTypedSelector((state) => state.filterSlice.filteredMenu);
  return (
    <>
      <FilterPanel />
      <div className={contentStyles.wrapper}>
        {menu.starters ? (
          <div>
            <MenuTitle title={'Starters'} />
            <List
              items={menu.starters}
              renderItems={(item: IDish) => (
                <Dish key={`${item.desc}${item.id}`} item={item} />
              )}
            />
          </div>
        ) : null}
        {menu.breakfast ? (
          <div>
            <MenuTitle title={'Breakfast'} />
            <List
              items={menu.breakfast}
              renderItems={(item: IDish) => (
                <Dish key={`${item.desc}${item.id}`} item={item} />
              )}
            />
          </div>
        ) : null}
        {menu.dinner ? (
          <div>
            <MenuTitle title={'Dinner'} />
            <List
              items={menu.dinner!}
              renderItems={(item: IDish) => (
                <Dish key={`${item.desc}${item.id}`} item={item} />
              )}
            />
          </div>
        ) : null}
        {menu.drinks ? (
          <div>
            <MenuTitle title={'Drinks'} />
            <List
              items={menu.drinks!}
              renderItems={(item: IDish) => (
                <Dish key={`${item.desc}${item.id}`} item={item} />
              )}
            />
          </div>
        ) : null}
        <Footer />
      </div>
    </>
  );
};

export default MenuContent;
