import { configureStore } from '@reduxjs/toolkit';
import columnsReducer from '../features/columns/columnsSlice';
import { saveState } from './utils';

const store = configureStore({
  reducer: {
    columns: columnsReducer,
  },
});

//when the states in store changes call the function to save items in the localstorage
store.subscribe(()=>{
    saveState(store.getState().columns.items);
})

export default store;