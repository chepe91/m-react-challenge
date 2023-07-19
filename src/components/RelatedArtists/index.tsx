import styled from "styled-components";
import ArtistList from "../ArtistList";
import type { RelatedArtistProps } from "./types";
import useQuerySimilarArtist from "../../hooks/useQuerySimilarArtists";

const RelatedArtistStyle = styled.div`
  margin-top: 40px;
`;

const RelatedArtistTitle = styled.h2`
  text-align: left;
  margin: 25px 15px;
`;

const RelatedArtist = ({ id }: RelatedArtistProps) => {
  const { data: response, isLoading, isError } = useQuerySimilarArtist(id);

  if (isLoading) {
    return <>Loading data...</>;
  }

  if (isError || response.errors.length > 0) {
    return <>Data was not avalaible</>;
  }

  return (
    <RelatedArtistStyle>
      <RelatedArtistTitle>Related Artists:</RelatedArtistTitle>
      <ArtistList artists={response.data} />
    </RelatedArtistStyle>
  );
};

export default RelatedArtist;
