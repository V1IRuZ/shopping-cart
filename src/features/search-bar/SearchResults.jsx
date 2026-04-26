import { Link } from "react-router";

const Result = ({ product, onClick }) => {
  return (
    <li className="search-result">
      <Link to={`/shop/${product.category}/${product.id}`} onClick={onClick}>
        <img src={product.thumbnail} alt="" />
        <p>{product.title}</p>
      </Link>
    </li>
  );
};

const SearchResults = ({ results, onClick }) => {
  return (
    <ul className="search-results">
      {results.map((item) => (
        <Result product={item} onClick={onClick} />
      ))}
    </ul>
  );
};

export default SearchResults;
