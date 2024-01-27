import Carousel from "../components/Carousel";
import ProductLists from "../components/ProductLists";

const Home = ({ carouselItems }) => {
  return (
    <section className="px-4">
      <Carousel />
      <ProductLists />
    </section>
  );
};

export default Home;
