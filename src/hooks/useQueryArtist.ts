import type { IArtist } from "../components/Artist/types";
import type { ApiResponse } from "../types";
import { API_ARTIST_DETAIL, HEADERS } from "../constants";
import { useQuery } from "@tanstack/react-query";

const getArtist = async (id: number): Promise<ApiResponse<IArtist[]>> => {
  const response = await fetch(API_ARTIST_DETAIL(id), { headers: HEADERS });
  return response.json();
};

const useQueryArtist = (id: number) => {
  return useQuery<ApiResponse<IArtist[]>, Error, ApiResponse<IArtist[]>>({
    queryKey: ["artist", id],
    queryFn: () => getArtist(id),
  });
};

export default useQueryArtist;
