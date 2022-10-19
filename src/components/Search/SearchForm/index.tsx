import SearchButton from "../SearchButton";
import SearchInput from "../SearchInput";

const SearchForm: React.FC = () => {
  return (
    <form>
      <SearchInput />
      <SearchButton />
    </form>
  );
};

export default SearchForm;
