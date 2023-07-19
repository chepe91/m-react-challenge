export interface IArtistGenre {
  id: number;
  name: string;
  is_primary: number;
}

export interface IArtist {
  id: number;
  name: string;
  image: string;
  popularity: number;
  genres: IArtistGenre[];
}
