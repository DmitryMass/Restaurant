import { IDish } from './../../types/dish';
import { IMenu } from './../../types/menu';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import menu from '../../data/menu';

interface IInitialState {
  menu: IMenu;
  filteredMenu: IDish[] | IMenu | [];
}

const initialState: IInitialState = {
  menu,
  filteredMenu: menu,
};

export const filterSlice = createSlice({
  name: 'filterSlice',
  initialState,
  reducers: {
    filterMenu: (state, { payload }: PayloadAction<string>) => {
      if (payload === 'All') {
        state.filteredMenu = state.menu;
      } else if (payload === 'starters') {
        state.filteredMenu = { starters: state.menu.starters! };
      } else if (payload === 'breakfast') {
        state.filteredMenu = { breakfast: state.menu.breakfast! };
      } else if (payload === 'dinner') {
        state.filteredMenu = { dinner: state.menu.dinner! };
      } else if (payload === 'drinks') {
        state.filteredMenu = { drinks: state.menu.drinks! };
      }
    },
  },
});

export const filterSliceReducer = filterSlice.reducer;
export const filterSliceAction = filterSlice.actions;
