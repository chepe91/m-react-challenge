import type { IArtist } from "../components/Artist/types";
import type { ApiResponse } from "../types";
import { API_ARTIST_SIMILAR, HEADERS } from "../constants";
import { useQuery } from "@tanstack/react-query";

const getSimilarArtist = async (
  id: number
): Promise<ApiResponse<IArtist[]>> => {
  const response = await fetch(API_ARTIST_SIMILAR(id), { headers: HEADERS });
  return response.json();
};

const useQuerySimilarArtist = (id: number) => {
  return useQuery<ApiResponse<IArtist[]>, Error, ApiResponse<IArtist[]>>({
    queryKey: ["similarArtist", id],
    queryFn: () => getSimilarArtist(id),
  });
};

export default useQuerySimilarArtist;
