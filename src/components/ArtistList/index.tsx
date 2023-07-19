import type { IArtist } from "../Artist/types";
import type { IArtistListProps } from "./types";
import Artist from "../Artist";

const ArtistList = ({ artists }: IArtistListProps) => {
  return (
    <>
      {artists?.map((artist: IArtist) => {
        return <Artist key={artist.id} artist={artist} />;
      })}
    </>
  );
};

export default ArtistList;
