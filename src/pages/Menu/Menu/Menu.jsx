import { Helmet } from "react-helmet-async";
import useMenu from "../../../hooks/useMenu";
import MenuCategory from "../MenuCategory/MenuCategory";
import menuBg from "../../../assets/menu/banner3.jpg";
import dessertsBg from "../../../assets/menu/dessert-bg.jpeg";
import pizzaBg from "../../../assets/menu/pizza-bg.jpg";
import saladBg from "../../../assets/menu/salad-bg.jpg";
import soupBg from "../../../assets/menu/soup-bg.jpg";

const Menu = () => {
  const [menu] = useMenu();
  const offered = menu.filter((item) => item.category === "offered");
  const desserts = menu.filter((item) => item.category === "dessert");
  const pizzas = menu.filter((item) => item.category === "pizza");
  const salads = menu.filter((item) => item.category === "salad");
  const soups = menu.filter((item) => item.category === "soup");

  return (
    <div>
      <Helmet>
        <title>Bistro | Menu</title>
      </Helmet>

      {/* <Cover img={menuBg} title="Our Menu"></Cover> */}

      {/* offered menu section */}
      {/* <SectionTitle
        heading="Todays offer"
        subheading="Donot miss"
      ></SectionTitle> */}

      <MenuCategory
        items={offered}
        title={"offered"}
        img={menuBg}
      ></MenuCategory>

      {/* desert menu section */}
      <MenuCategory
        items={desserts}
        title="dessert"
        img={dessertsBg}
      ></MenuCategory>
      <MenuCategory items={pizzas} title="pizza" img={pizzaBg}></MenuCategory>
      <MenuCategory items={salads} title="salad" img={saladBg}></MenuCategory>
      <MenuCategory items={soups} title="soup" img={soupBg}></MenuCategory>
    </div>
  );
};

export default Menu;
