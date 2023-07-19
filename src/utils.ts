import { IArtistGenre } from "./components/Artist/types";

export const getPrimaryGenre = (genres: IArtistGenre[]): IArtistGenre => {
  const primaryGenres = genres.filter(({ is_primary }) => is_primary === 1);

  if (primaryGenres.length > 0) {
    return primaryGenres[0];
  }

  return {
    name: "",
    is_primary: 0,
    id: 0,
  };
};
