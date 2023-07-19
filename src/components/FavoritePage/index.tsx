import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Backbutton } from "../Buttons";
import styled from "styled-components";
import { FavoriteContext } from "../../context/FavoriteContext";
import FavoriteArtist from "../FavoriteArtist";

const StyleFavoritePage = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyleFavoritePageTitle = styled.h1`
  color: white;
`;

const FavoritePageNoData = styled.h3`
  color: lightgray;
`;

const FavoritePage = () => {
  const navigate = useNavigate();
  const { favorites } = useContext(FavoriteContext);

  const goBack = () => {
    navigate("/");
  };

  return (
    <StyleFavoritePage>
      <Backbutton onClick={goBack}>Back to Search</Backbutton>
      <StyleFavoritePageTitle>My List</StyleFavoritePageTitle>
      {favorites.length === 0 && (
        <FavoritePageNoData>No Artists in List</FavoritePageNoData>
      )}
      {favorites.map((id) => {
        return <FavoriteArtist key={`favoriteArtist${id}`} id={id} />;
      })}
    </StyleFavoritePage>
  );
};

export default FavoritePage;
