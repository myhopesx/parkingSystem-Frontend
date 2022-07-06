import React from "react";
import Banner from "../components/Banner";
import Service from "../components/Service";
import { VStack } from "@chakra-ui/react";
import Subscribe from "../components/Subscribe";
import Facilities from "../components/Facilities";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <VStack>
      <Banner />
      <Service />
      <Subscribe />
      <Facilities />
    </VStack>
  );
};

export default Home;
