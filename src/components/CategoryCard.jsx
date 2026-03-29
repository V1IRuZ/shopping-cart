import StarRating from "./StarRating.jsx";

const CategoryCard = ({ product }) => {
  return (
    <li className="category-card">
      <div>
        <h1>{product.title}</h1>
        <StarRating rating={product.rating.rate} count={product.rating.count} />
      </div>
    </li>
  );
};

export default CategoryCard;
