import { createSlice } from '@reduxjs/toolkit';
import { loadState } from '../../app/utils';

const data = [
  {id: 1, name: 'Item', column: 'Column 1'},
  {id: 2, name: 'Item', column: 'Column 2'},
  {id: 3, name: 'Item', column: 'Column 1'}
]

const persistedData = loadState();

const initialState = { 
  items: persistedData ? persistedData : data,
  filteredItems: persistedData ? persistedData : data,
}

export const slice = createSlice({
  name: 'columns',
  initialState: initialState,
  reducers: {
    hydrate:(state, action) => {
      return {
        ...state,
        items: action.payload,
        filteredItems: action.payload
      }
    },
    addItem: (state, action) => {
      return {
        ...state,
        items: [...state.items, action.payload],
        filteredItems: [...state.items, action.payload]
      }
    },
    deleteItem: (state, action) => {
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload),
        filteredItems: state.filteredItems.filter((item) => item.id !== action.payload)
      }
    },
    searchItems: (state, action) => {
      return {
        ...state,
        filteredItems: state.items.filter(item => item.name.toLowerCase().startsWith(action.payload.toLowerCase()))
      }
    },
    showAll: (state) => {
      return {
        ...state,
        filteredItems: state.items
      }
    },
  }
});

export const { hydrate, addItem, deleteItem, searchItems, showAll } = slice.actions;

export const selectColumns = state => state.columns.filteredItems;

export default slice.reducer;
