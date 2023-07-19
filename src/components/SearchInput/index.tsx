import { useState } from "react";
import useQueryGenres from "../../hooks/useQueryGenres";
import styled from "styled-components";

interface SearchInputProps {
  setSelectedGenre: (id: number) => void;
}

const Input = styled.input`
  font-size: 20px;
`;

const SuggestionArea = styled.div`
  position: relative;
`;

const Suggestion = styled.div`
  font-size: 18px;
  cursor: pointer;
`;

const SearchInput = ({ setSelectedGenre }: SearchInputProps) => {
  const [searchText, setSearchText] = useState("");
  const [showSuggestion, setShowSuggestion] = useState(false);
  const { data: genres } = useQueryGenres(searchText);

  const searchTextChangeHandler = (e: any) => {
    setShowSuggestion(true);
    setSelectedGenre(0);
    setSearchText(e.target.value);
  };

  const selectGenreHandler = (id: number, name: string) => {
    setShowSuggestion(false);
    setSearchText(name);
    setSelectedGenre(id);
  };

  const suggestions = () => {
    if (!showSuggestion) return;

    return genres?.map(({ name, id }) => {
      return (
        <Suggestion
          key={id}
          onClick={() => {
            selectGenreHandler(id, name);
          }}
        >
          {name}
        </Suggestion>
      );
    });
  };

  return (
    <>
      <Input
        key={`searchGenre`}
        value={searchText}
        onChange={searchTextChangeHandler}
      />
      <SuggestionArea>{suggestions()}</SuggestionArea>
    </>
  );
};

export default SearchInput;
