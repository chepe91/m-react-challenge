import React from "react";
import { FAVORITE_ARTIST_LOCAL_STORAGE } from "../constants";
import { useLocalStorage } from "../hooks/useLocalStorage";

interface IFavoriteContext {
  favorites: number[];
  addFavorite: (artist_id: number) => void;
  removeFavorite: (artist_id: number) => void;
  isArtistFavorite: (artist_id: number) => boolean;
}

const initialState = {
  favorites: [],
  addFavorite: () => {},
  removeFavorite: () => {},
  isArtistFavorite: () => false,
};

export const FavoriteContext =
  React.createContext<IFavoriteContext>(initialState);

export const FavoriteContextProvider = ({ children }: any) => {
  const [favorites, setFavorites] = useLocalStorage<number[]>(
    FAVORITE_ARTIST_LOCAL_STORAGE,
    []
  );

  const addFavorite = (artist_id: number) => {
    const newFavorites = [...favorites, artist_id];
    setFavorites(newFavorites);
  };

  const removeFavorite = (artist_id: number) => {
    const filteredFavorites = favorites.filter(
      (artist) => artist !== artist_id
    );
    setFavorites(filteredFavorites);
  };

  const isArtistFavorite = (artist_id: number) => {
    return favorites.includes(artist_id);
  };

  return (
    <FavoriteContext.Provider
      value={{ favorites, addFavorite, removeFavorite, isArtistFavorite }}
    >
      {children}
    </FavoriteContext.Provider>
  );
};
