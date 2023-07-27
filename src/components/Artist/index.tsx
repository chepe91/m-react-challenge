import styled from "styled-components";
import type { IArtist } from "./types";
import { getPrimaryGenre } from "../../utils";
import { useNavigate } from "react-router-dom";
import { AddFavoriteButton, RemoveFavoriteButton } from "../Buttons";
import useFavorites from "../../hooks/useFavorites";

const ArtistStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 25px 25px;
  margin: 25px 15px;
  border: 1px solid white;
`;

const ArtistImage = styled.img`
  height: 150px;
  width: 150px;
`;

const ArtistInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const ArtistName = styled.label`
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
`;

const ArtistGenre = styled.span`
  font-size: 16px;
  color: #fff000;
`;

export interface ArtistProps {
  artist: IArtist;
}

const Artist = ({ artist }: ArtistProps) => {
  const { addFavorite, removeFavorite, isFavorite } = useFavorites();
  const navigate = useNavigate();
  const primaryGenre = getPrimaryGenre(artist.genres);

  const goToArtistDetail = (id: number) => {
    navigate(`/artist/${id}`);
  };

  return (
    <ArtistStyle>
      <ArtistImage src={artist.image} />
      <ArtistInfo>
        <ArtistName
          onClick={() => {
            goToArtistDetail(artist.id);
          }}
        >
          {artist.name}
        </ArtistName>
        <ArtistGenre>{primaryGenre.name}</ArtistGenre>
      </ArtistInfo>
      {isFavorite(artist.id) ? (
        <RemoveFavoriteButton
          onClick={() => {
            removeFavorite(artist.id);
          }}
        >
          Remove
        </RemoveFavoriteButton>
      ) : (
        <AddFavoriteButton
          onClick={() => {
            addFavorite(artist.id);
          }}
        >
          Add
        </AddFavoriteButton>
      )}
    </ArtistStyle>
  );
};

export default Artist;
