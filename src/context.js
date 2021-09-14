import { useContext, createContext, useState } from 'react';
import data from './data.json';
import vesti from './vesti.json';

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [showSublinks, setShowSublinks] = useState(false);
  const [index, setIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  const handleSublinks = () => {
    console.log('multimedia');
    setShowSublinks(!showSublinks);
  };

  const subKategorija = (e) => {
    console.log(e.currentTarget.textContent);
  };

  const checkIndex = (index) => {
    if (index > vesti.length - 1) return 0;
    if (index < 0) return vesti.length - 1;
    return index;
  };

  const slideRight = () => {
    setIndex((index) => checkIndex(index + 1));
  };

  const slideLeft = () => {
    setIndex((index) => checkIndex(index - 1));
  };

  return (
    <AppContext.Provider
      value={{
        showSidebar,
        setShowSidebar,
        showSublinks,
        setShowSublinks,
        data,
        vesti,
        index,
        setIndex,
        checkIndex,
        slideLeft,
        slideRight,
        handleSublinks,
        subKategorija,
        loading,
        setLoading,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
