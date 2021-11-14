import { useState, useEffect, createContext, useContext } from "react";

const FavoritesContext = createContext();

const defaultFavorites = JSON.parse(localStorage.getItem("favorites")) || [];

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState(defaultFavorites);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const addToFavorites = (data, findFavoriteItem) => {
    if (!findFavoriteItem) {
      return setFavorites((items) => [data, ...items]); //eğer tıkladığım ürün sepetfavorilerde te yoksa  ekliyoruz
    }
    const filtered = favorites.filter(
      (item) => item.id !== findFavoriteItem.id
    );
    setFavorites(filtered);
  };

  const removeFromFavorites = (item_id) => {
    const filtered = favorites.filter((item) => item.id !== item_id);
    setFavorites(filtered);
  };

  const emptyFavorites = () => setFavorites([]);

  const values = {
    favorites,
    setFavorites,
    addToFavorites,
    removeFromFavorites,
    emptyFavorites,
  };
  return (
    <FavoritesContext.Provider value={values}>
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => useContext(FavoritesContext);
