import React, { useContext, useState } from "react";
import { Grid, GridItem, Text } from "@chakra-ui/react";
import ParkingContext from "../context/ParkingContext";

const ParkItem = ({ item, index, parks }) => {

  const [backgroundColor, setBackgroundColor] = useState("#E7ECEF");
  const [isActive, setIsActive] = useState(false);

  const { selectedPark, setSelectedPark } = useContext(ParkingContext);

  const handleClick = () => {

    console.log(selectedPark);

    if (parks.includes(item)) {
      setBackgroundColor("red");
      return;
    }

    if (isActive) {
      setBackgroundColor("#E7ECEF");
      setSelectedPark([]);
      setIsActive(!isActive);
      console.log(selectedPark);
      return;
    }

    console.log("out")
    if (selectedPark !== 0) {
      console.log("first")
      // swal **********************************************
      alert("YOU CANT Book 2 Park");
      return;
    }

    setBackgroundColor("primary.main");
    setIsActive(!isActive);
    setSelectedPark(item);
  };

  return (
    <GridItem
      onClick={handleClick}
      key={index}
      w="40%"
      h={"2rem"}
      borderRadius={"4px"}
      bg={backgroundColor}
    >
      <Text>{item}</Text>
    </GridItem>
  );
};

export default ParkItem;
