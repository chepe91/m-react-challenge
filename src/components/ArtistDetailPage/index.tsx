import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import RelatedArtist from "../RelatedArtists";
import ArtistDetailCard from "../ArtistDetailCard";
import Menu from "../Menu";
import { Backbutton } from "../Buttons";

const ArtistDetail = styled.div`
  display: flex;
  flex-direction: column;
`;

const ArtistDetailPage = () => {
  const navigate = useNavigate();
  const params = useParams();
  const artist_id = Number(params.id);

  const goBack = () => {
    navigate("/");
  };

  return (
    <ArtistDetail>
      <Menu />
      <Backbutton onClick={goBack}>Back to Search</Backbutton>
      <ArtistDetailCard id={artist_id} />
      <RelatedArtist id={artist_id} />
    </ArtistDetail>
  );
};

export default ArtistDetailPage;
