import { useState } from "react";
import { useParams } from "react-router-dom";
import { Cat, Heart, Info } from "lucide-react";
import imageCat from "../assets/images/esteban-chinchilla-DwkgUqRcHrA-unsplash.jpg";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";
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
const PetDetail = () => {
  const { id } = useParams();
  const [pet, setPet] = useState(catList.find((p) => p.id === id));
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = () => {
    console.log("hello");
  };

  return (
    <div>
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="aspect-square w-full">
            <img
              src={pet.imgUrl}
              alt="Buddy the Golden Retriever"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>
          <div>
            <h1 className="text-3xl font-bold mb-4">{pet.catName}</h1>
            <div className="flex items-center gap-4 mb-4">
              <span className="flex items-center gap-1">
                <Cat className="h-4 w-4" />
                golden
              </span>
              <span className="flex items-center gap-1">
                <Heart className="h-4 w-4" />3 year old
              </span>
              <span className="flex items-center gap-1">
                <Info className="h-4 w-4" />
                Male
              </span>
            </div>
            <p className="mb-6">{pet.description}</p>
            <div className="bg-white shadow-md rounded-lg p-6">
              <h2 className="text-2xl font-semibold mb-2">Adoption Form</h2>
              <p className="text-gray-600 mb-4">
                Please fill out this form to express your interest in adopting
                Buddy.
              </p>
              {formSubmitted ? (
                <p className="text-green-600">
                  Thank you for your interest in adopting Buddy! We'll be in
                  touch soon.
                </p>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Full Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Why do you want to adopt Buddy?
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={4}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-primary text-black font-semibold py-2 px-4 rounded-md hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                  >
                    Submit Adoption Form
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PetDetail;
