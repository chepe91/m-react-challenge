import type { ApiResponse } from "../types";
import { API_ARTIST_BY_GENRE, HEADERS } from "../constants";
import { useQuery } from "@tanstack/react-query";
import type { IArtist } from "../components/Artist/types";

const getArtists = async (id: number): Promise<ApiResponse<IArtist[]>> => {
  const response = await fetch(API_ARTIST_BY_GENRE(id), { headers: HEADERS });
  return response.json();
};

const useQueryArtistsByGenre = (id: number) => {
  return useQuery<ApiResponse<IArtist[]>, Error, ApiResponse<IArtist[]>>({
    queryKey: ["artistsByGender", id],
    queryFn: () => getArtists(id),
  });
};

export default useQueryArtistsByGenre;
