import { bindActionCreators } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { filterSliceAction } from '../slices/filterSlice';

const actions = {
  ...filterSliceAction,
};

const useActions = () => {
  const dispatch = useDispatch();

  return bindActionCreators(actions, dispatch);
};

export default useActions;
