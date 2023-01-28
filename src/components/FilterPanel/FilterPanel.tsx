import useActions from '@/store/storageHooks/useActions';
import useTypedSelector from '@/store/storageHooks/useTypedSelector';
import { FC } from 'react';
import { useDispatch } from 'react-redux';

const FilterPanel: FC = () => {
  const dispatch = useDispatch();
  const { filterMenu } = useActions();
  const menu: any = useTypedSelector((state) => state.filterSlice.filteredMenu);

  return (
    <div className='mb-[30px] sm:mb-[80px] text-center max-w-[530px] w-full mx-auto'>
      <button
        onClick={() => dispatch(filterMenu('All'))}
        className={`${
          menu.all ? 'text-goldPrimary' : 'text-white'
        } text-p leading-p px-[20px] py-[10px] `}
      >
        All
      </button>
      <button
        onClick={() => dispatch(filterMenu('starters'))}
        className={`${
          menu.starters ? 'text-goldPrimary' : 'text-white'
        } text-p leading-p px-[20px] py-[10px] `}
      >
        Starters
      </button>
      <button
        onClick={() => dispatch(filterMenu('breakfast'))}
        className={`${
          menu.breakfast ? 'text-goldPrimary' : 'text-white'
        } text-p leading-p px-[20px] py-[10px] `}
      >
        Breakfast
      </button>
      <button
        onClick={() => dispatch(filterMenu('dinner'))}
        className={`${
          menu.dinner ? 'text-goldPrimary' : 'text-white'
        } text-p leading-p px-[20px] py-[10px`}
      >
        Dinner
      </button>
      <button
        onClick={() => dispatch(filterMenu('drinks'))}
        className={`${
          menu.drinks ? 'text-goldPrimary' : 'text-white'
        } text-p leading-p px-[20px] `}
      >
        Drinks
      </button>
    </div>
  );
};

export default FilterPanel;
