import { useState } from "react";
import { Search } from "lucide-react";
import SearchResults from "./SearchResults";

const SearchInput = ({ data }) => {
  const [value, setValue] = useState("");
  const [results, setResults] = useState([]);
  const [showResults, setShowResults] = useState(false);

  const handleChange = (e) => {
    setValue(e.currentTarget.value);

    setResults(
      data.filter((item) =>
        item.title.toLowerCase().includes(e.currentTarget.value.toLowerCase()),
      ),
    );
  };

  const handleBlur = (e) => {
    if (e.relatedTarget?.closest(".search-results")) {
      return;
    }

    setShowResults(false);
  };

  const handleLinkClick = () => {
    setShowResults(false);
    setValue("");
  };

  return (
    <li className="search-bar" onBlur={(e) => handleBlur(e)}>
      <label>
        <input
          defaultValue={value}
          placeholder="Search Products"
          type="text"
          onFocus={() => setShowResults(true)}
          onChange={(e) => handleChange(e)}
          onBlur={(e) => handleBlur(e)}
        />
        <Search size={36} />
        {showResults && (
          <SearchResults results={results} onClick={handleLinkClick} />
        )}
      </label>
    </li>
  );
};

export default SearchInput;
