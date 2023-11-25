import Carousel from "../components/Carousel";
import Navbot from "../components/Navbot";
import "../css/home.css";

function Home() {
  const carousel_images = [
    "/images/carousel-1.jpeg",
    "/images/carousel-2.jpeg",
    "/images/carousel-3.jpeg",
    "/images/carousel-4.jpeg",
    // Add more image URLs as needed
  ];

  return (
    <div className="home">
      <h2>Hello, User!</h2>
      <p>What do you want to cook for today?</p>
      <input type="text" />

      <div className="row-1">
        <h3>Feature Recipes</h3>
        <Carousel carousel_images={carousel_images} />
      </div>

      <div className="row-2">
        <h3>Recipes For You</h3>
        <div className="rfy"></div>
      </div>

      <div className="row-3">
        <h3>All Recipes</h3>
        <div className="ar"></div>
      </div>

      <Navbot />
    </div>
  );
}

export default Home;
