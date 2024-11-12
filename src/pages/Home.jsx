import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CatCard from "../components/CatCard";
import "../assets/styles/Home.css";
import BeatifullBannerImage from "../assets/images/ludemeula-fernandes-9UUoGaaHtNE-unsplash.jpg";
import imageCat from "../assets/images/esteban-chinchilla-DwkgUqRcHrA-unsplash.jpg";

const catList = [
  {
    id: "1",
    catName: "moci",
    imgUrl:
      "https://images.unsplash.com/photo-1586289883499-f11d28aaf52f?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis perferendis hic asperiores quibusdam quidem voluptates doloremque reiciendis nostrum harum. Repudiandae?",
  },
  {
    id: "2",
    catName: "moci",
    imgUrl: imageCat,
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis perferendis hic asperiores quibusdam quidem voluptates doloremque reiciendis nostrum harum. Repudiandae?",
  },
  {
    id: "3",
    catName: "moci",
    imgUrl: imageCat,
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis perferendis hic asperiores quibusdam quidem voluptates doloremque reiciendis nostrum harum. Repudiandae?",
  },
  {
    id: "4",
    catName: "moci",
    imgUrl: imageCat,
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis perferendis hic asperiores quibusdam quidem voluptates doloremque reiciendis nostrum harum. Repudiandae?",
  },
  {
    id: "5",
    catName: "moci",
    imgUrl: imageCat,
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis perferendis hic asperiores quibusdam quidem voluptates doloremque reiciendis nostrum harum. Repudiandae?",
  },
  {
    id: "6",
    catName: "moci",
    imgUrl: imageCat,
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis perferendis hic asperiores quibusdam quidem voluptates doloremque reiciendis nostrum harum. Repudiandae?",
  },
  {
    id: "7",
    catName: "moci",
    imgUrl: imageCat,
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis perferendis hic asperiores quibusdam quidem voluptates doloremque reiciendis nostrum harum. Repudiandae?",
  },
  {
    id: "8",
    catName: "moci",
    imgUrl: imageCat,
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis perferendis hic asperiores quibusdam quidem voluptates doloremque reiciendis nostrum harum. Repudiandae?",
  },
];

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <div className="container mx-auto px-4">
          {/* Banner */}
          <div className="relative h-80 mb-5 mt-10 overflow-hidden rounded-lg">
            <img
              src={BeatifullBannerImage}
              alt="Beautiful cat banner"
              className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
              <p className="text-banner text-white text-center px-5 py-5">
                Adopt a Cat, Add Happiness to Your Home
              </p>
            </div>
          </div>

          {/* Pet List */}
          <section className="w-full mt-20">
            <h1 className="text-3xl font-extrabold">Pet List</h1>
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 p-5 mt-10">
              {catList.map((cat) => (
                <CatCard
                  key={cat.id}
                  id={cat.id}
                  imageUrl={cat.imgUrl}
                  catName={cat.catName}
                  description={cat.description}
                />
              ))}
            </div>
            <div className="w-full flex items-end justify-end">
              <button
                onClick={() => navigate("/pet")}
                className="text-blue-600 hover:text-blue-800"
              >
                <p className="underline">See more</p>
              </button>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
