import Navbar from "../components/Navbar";
import "../assets/styles/Home.css";
import BeatifullBannerImage from "../assets/images/ludemeula-fernandes-9UUoGaaHtNE-unsplash.jpg";
import CatCard from "../components/CatCard";
import imageCat from "../assets/images/esteban-chinchilla-DwkgUqRcHrA-unsplash.jpg";
import { useNavigate } from "react-router-dom";
const catList = [
  {
    id: "1",
    catName: "moci",
    imgUrl:
      "https://images.unsplash.com/photo-1586289883499-f11d28aaf52f?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "2",
    catName: "moci",
    imgUrl: imageCat,
  },
  {
    id: "3",
    catName: "moci",
    imgUrl: imageCat,
  },
  {
    id: "4",
    catName: "moci",
    imgUrl: imageCat,
  },
  {
    id: "5",
    catName: "moci",
    imgUrl: imageCat,
  },
  {
    id: "6",
    catName: "moci",
    imgUrl: imageCat,
  },
  {
    id: "7",
    catName: "moci",
    imgUrl: imageCat,
  },
  {
    id: "8",
    catName: "moci",
    imgUrl: imageCat,
  },
];
const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="mb-5">
      <Navbar />
      <div className="flex flex-col justify-center items-center">
        {/* image banner */}
        <div className="flex w-4/5 h-80 relative mb-5 mt-10">
          <img
            src={BeatifullBannerImage}
            alt=""
            srcSet=""
            className="object-cover h-full w-full hover"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <p className="text-banner bg-opacity-50 px-5 py-5">
              Adopt a Cat, Add Happiness to Your Home
            </p>
          </div>
        </div>
        {/* pet card */}
        <div className="w-full mt-20">
          <h1 className="text-header">Pet List</h1>
          <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-5 p-5 mt-10">
            {catList.map((e) => (
              <CatCard
                id={e.id}
                imageUrl={e.imgUrl}
                catName={e.catName}
                key={e.id}
              />
            ))}
          </div>
          <div className="w-full flex items-end justify-end">
            <button onClick={() => navigate("/pet")}>
              <p className="underline">See more</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
