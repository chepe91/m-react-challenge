import styled from "styled-components";

const ArtistButton = styled.button`
  border-radius: 50px;
  padding: 10px 25px;
  border: 1px solid black;
`;

export const AddFavoriteButton = styled(ArtistButton)`
  background-color: #1b0076;
  background: -moz-linear-gradient(45deg, #1b0076 0, #e71e3d 100%);
  background: -webkit-linear-gradient(45deg, #1b0076, #e71e3d);
  background: linear-gradient (45deg, #1b0076 0, #e71e3d 100%);
  color: #fff;
`;

export const RemoveFavoriteButton = styled(ArtistButton)`
  background-color: lightblue;
  color: black;
`;

export const Backbutton = styled.button`
  max-width: 300px;
  margin-bottom: 30px;
`;
