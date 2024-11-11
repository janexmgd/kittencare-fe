import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="grid h-screen place-content-center bg-white px-4">
      <h1 className="text-4xl uppercase tracking-widest text-gray-500">
        404 | Not Found
      </h1>
      <button onClick={() => navigate("/")}>Home</button>
    </div>
  );
};

export default NotFound;
