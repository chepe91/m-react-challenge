import Artist from "../Artist";
import useQueryArtist from "../../hooks/useQueryArtist";

interface FavoriteArtistProps {
  id: number;
}

const FavoriteArtist = ({ id }: FavoriteArtistProps) => {
  const { data: response, isLoading, isError } = useQueryArtist(id);

  if (isLoading) {
    return;
  }

  if (isError) {
    return <>there was an error loading the info!</>;
  }

  return <Artist artist={response.data[0]} />;
};

export default FavoriteArtist;
