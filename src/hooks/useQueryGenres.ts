import type { ApiResponse } from "../types";
import { API_GENRES, HEADERS } from "../constants";
import { useQuery } from "@tanstack/react-query";
import type { IGenre } from "../components/SearchPage/types";

const getGenres = async (
  searchText: string
): Promise<ApiResponse<IGenre[]>> => {
  if (searchText.length === 0) return { data: [], errors: [] };

  const response = await fetch(API_GENRES(searchText), { headers: HEADERS });
  return response.json();
};

const useQueryGenres = (searchText: string) => {
  return useQuery<ApiResponse<IGenre[]>, Error, IGenre[]>({
    queryKey: ["genres", searchText],
    queryFn: () => getGenres(searchText),
    select: (res) => res.data || [],
  });
};

export default useQueryGenres;
