export const FAVORITE_ARTIST_LOCAL_STORAGE = "favoriteArtists";

export const API_KEY = "5db48e1f3a0a4580bad47849f1317bd0";
export const API_URL = "https://music.musicaudience.info";

// export const API_ARTIST = `${API_URL}/api/v1/music/artists`;

export const API_GENRES = (searchText: string) => {
  return `${API_URL}/api/v1/music/genres?limit=5&q=${searchText}`;
};

export const API_ARTIST_BY_GENRE = (genre_id: number) => {
  return `${API_URL}/api/v1/music/genres/${genre_id}/artists`;
};

export const API_ARTIST_DETAIL = (artist_id: number) => {
  return `${API_URL}/api/v1/music/artists/${artist_id}`;
};

export const API_ARTIST_SIMILAR = (artist_id: number) => {
  return `${API_URL}/api/v1/music/artists/${artist_id}/similar`;
};

export const HEADERS = {
  Authorization: `apikey ${API_KEY}`,
};
