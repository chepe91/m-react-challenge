import { FAVORITE_ARTIST_LOCAL_STORAGE } from "../constants";
import { useLocalStorage } from "./useLocalStorage";

export default (initialValue?: number[]) => {
  const [storedValue, setStoredValue] = useLocalStorage(
    FAVORITE_ARTIST_LOCAL_STORAGE,
    initialValue ?? []
  );

  const addFavorite = (value: number) => {
    setStoredValue([...storedValue, value]);
  };

  const removeFavorite = (value: number) => {
    setStoredValue(storedValue.filter((v) => v !== value));
  };

  const isFavorite = (id: number) => storedValue.includes(id);

  return { favorites: storedValue, addFavorite, removeFavorite, isFavorite };
};
