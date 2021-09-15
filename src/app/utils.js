//function to load items from the localstorage
export const loadState = () => {
    try {
      const persistedState = localStorage.getItem('reduxStateItems');
      if (persistedState) {
        return JSON.parse(persistedState);
      }
    } catch (err) {
      console.warn(err);
      return undefined;
    }
  };

//function to save item in the localstorage
export const saveState = (state) => {
  try {
      const persistedState = JSON.stringify(state);
      localStorage.setItem('reduxStateItems', persistedState);
  } catch (err) {
    console.warn(err);
  }
};