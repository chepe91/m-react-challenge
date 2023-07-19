import { useState } from "react";
import styled from "styled-components";
import ArtistList from "../ArtistList";
import SearchInput from "../SearchInput";
import useQueryArtistsByGenre from "../../hooks/useQueryArtistsByGenre";
import Menu from "../Menu";

const Search = styled.div``;

const SearchTitle = styled.h3``;

const SearchPage = () => {
  const [selectedGenre, setSelectedGenre] = useState<number>(0);
  const {
    data: response,
    isLoading,
    isError,
  } = useQueryArtistsByGenre(selectedGenre);

  const artistByGender = () => {
    if (isLoading) {
      <>Loading artists</>;
    }

    if (isError) {
      return <>There was an error loading artist list</>;
    }

    return <ArtistList artists={response?.data} />;
  };

  return (
    <Search>
      <Menu />
      <SearchTitle>Enter a genre to find artists:</SearchTitle>

      <SearchInput setSelectedGenre={setSelectedGenre} />
      {artistByGender()}
    </Search>
  );
};

export default SearchPage;
