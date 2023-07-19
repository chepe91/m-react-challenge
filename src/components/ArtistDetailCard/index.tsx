import { useContext } from "react";
import styled from "styled-components";
import useQueryArtist from "../../hooks/useQueryArtist";
import { getPrimaryGenre } from "../../utils";
import { AddFavoriteButton, RemoveFavoriteButton } from "../Buttons";
import { FavoriteContext } from "../../context/FavoriteContext";

const StyleArtistDetailCard = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px;
  border: 2px solid white;
`;

const ArtistDetailImg = styled.img`
  width: 300px;
  heigth: 300px;
  margin-right: 20px;
`;

const ArtistDetailInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-left: 20px;
`;

const ArtistDetailName = styled.h1``;

const ArtistDetailPrimaryGenre = styled.span`
  font-size: 30px;
  margin-bottom: 10px;
`;

const ArtistDetailPopularity = styled.span`
  font-size: 20px;
  margin-bottom: 10px;
`;

const ArtistDetailFooter = styled.div`
  margin-top: 10px;
`;

const ArtistDetailAdditionalGenre = styled.span`
  color: lightgray;
`;

interface ArtistDetailCardProps {
  id: number;
}

const ArtistDetailCard = ({ id }: ArtistDetailCardProps) => {
  const { data, isLoading, isError } = useQueryArtist(id);
  const { isArtistFavorite, removeFavorite, addFavorite } =
    useContext(FavoriteContext);
  if (isLoading) {
    return <>Loading data...</>;
  }

  if (isError || data.errors.length > 0) {
    return <>Data was not avalaible</>;
  }

  const artist = data.data[0];
  const isFavorite = isArtistFavorite(artist.id);
  const primaryGenre = getPrimaryGenre(artist.genres);
  const additionalGenres = artist.genres
    .filter((genre) => {
      return genre.id !== primaryGenre.id;
    })
    .map((genre) => genre.name)
    .join(", ");

  return (
    <StyleArtistDetailCard>
      <ArtistDetailImg src={artist.image} />
      <ArtistDetailInfo>
        <ArtistDetailName>{artist.name}</ArtistDetailName>
        <ArtistDetailPrimaryGenre>
          Primary Genre: {primaryGenre.name}
        </ArtistDetailPrimaryGenre>
        <ArtistDetailPopularity>
          Popularity: {artist.popularity}
        </ArtistDetailPopularity>
        {additionalGenres.length > 0 && (
          <ArtistDetailAdditionalGenre>
            Additional genres:&nbsp;
            {additionalGenres}
          </ArtistDetailAdditionalGenre>
        )}
        <ArtistDetailFooter>
          {isFavorite ? (
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
        </ArtistDetailFooter>
      </ArtistDetailInfo>
    </StyleArtistDetailCard>
  );
};

export default ArtistDetailCard;
