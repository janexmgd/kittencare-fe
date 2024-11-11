import { useNavigate } from "react-router-dom";

const CatCard = ({ imageUrl, catName, id }) => {
  const navigate = useNavigate();
  const handleClick = () => navigate(`/pet/${id}`);
  return (
    <button
      className="max-w-xs bg-white rounded-lg shadow-lg overflow-hidden hover:scale-105"
      onClick={handleClick}
    >
      <img
        src={imageUrl}
        alt={`Picture of ${catName}`}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-left text-xl font-semibold">
          {catName || "Unknown Cat"}
        </h2>
        <h1 className="text-orang-300">adopt now</h1>
      </div>
    </button>
  );
};

export default CatCard;
