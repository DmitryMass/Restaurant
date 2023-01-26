import useActions from '@/store/storageHooks/useActions';
import useTypedSelector from '@/store/storageHooks/useTypedSelector';
import { FC } from 'react';
import { useDispatch } from 'react-redux';

const FilterPanel: FC = () => {
  const dispatch = useDispatch();
  const { filterMenu } = useActions();
  const menu: any = useTypedSelector((state) => state.filterSlice.filteredMenu);

  return (
    <div className=' mb-[80px] max-w-[530px] w-full mx-auto'>
      <button
        onClick={() => dispatch(filterMenu('All'))}
        className={`${
          menu.all ? 'text-goldPrimary' : null
        } text-p leading-p px-[20px] text-white`}
      >
        All
      </button>
      <button
        onClick={() => dispatch(filterMenu('starters'))}
        className={`${
          menu.starters ? 'text-goldPrimary' : null
        } text-p leading-p px-[20px] text-white`}
      >
        Starters
      </button>
      <button
        onClick={() => dispatch(filterMenu('breakfast'))}
        className={`${
          menu.breakfast ? 'text-goldPrimary' : null
        } text-p leading-p px-[20px] text-white`}
      >
        Breakfast
      </button>
      <button
        onClick={() => dispatch(filterMenu('dinner'))}
        className={`${
          menu.dinner ? 'text-goldPrimary' : null
        } text-p leading-p px-[20px] text-white`}
      >
        Dinner
      </button>
      <button
        onClick={() => dispatch(filterMenu('drinks'))}
        className={`${
          menu.drinks ? 'text-goldPrimary' : null
        } text-p leading-p px-[20px] text-white`}
      >
        Drinks
      </button>
    </div>
  );
};

export default FilterPanel;
