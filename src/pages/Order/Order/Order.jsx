import Cover from "../../Shared/Cover/Cover";
import orderImg from "../../../assets/shop/banner2.jpg";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useState } from "react";
import useMenu from "../../../hooks/useMenu";
import OrderPanel from "../OrderPanel/OrderPanel";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Order = () => {
  const categories = ["salad", "pizza", "soup", "dessert", "drinks", "offered"];
  const { category } = useParams();
  const initialIndex = categories.indexOf(category);
  const [menu] = useMenu();
  const [tabIndex, setTabIndex] = useState(initialIndex);

  const salads = menu.filter((item) => item.category === "salad");
  const pizzas = menu.filter((item) => item.category === "pizza");
  const soups = menu.filter((item) => item.category === "soup");
  const desserts = menu.filter((item) => item.category === "dessert");
  const drinks = menu.filter((item) => item.category === "drinks");
  const offered = menu.filter((item) => item.category === "offered");

  return (
    <div>
      <Helmet>
        <title>Bistro | Order Food</title>
      </Helmet>
      <Cover img={orderImg} title="Order Food"></Cover>

      <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
          <Tab>Salad</Tab>
          <Tab>Pizza</Tab>
          <Tab>Soup</Tab>
          <Tab>Dessert</Tab>
          <Tab>Drinks</Tab>
          <Tab>Offered</Tab>
        </TabList>
        <TabPanel>
          <OrderPanel items={salads}></OrderPanel>
        </TabPanel>
        <TabPanel>
          <OrderPanel items={pizzas}></OrderPanel>
        </TabPanel>
        <TabPanel>
          <OrderPanel items={soups}></OrderPanel>
        </TabPanel>
        <TabPanel>
          <OrderPanel items={desserts}></OrderPanel>
        </TabPanel>
        <TabPanel>
          <OrderPanel items={drinks}></OrderPanel>
        </TabPanel>
        <TabPanel>
          <OrderPanel items={offered}></OrderPanel>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Order;
