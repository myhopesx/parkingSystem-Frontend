import React, { useContext, useEffect } from "react";
import { Grid, GridItem, Text } from "@chakra-ui/react";
import { useState } from "react";
import ParkItem from "./ParkItem";
import ReservationContext from "../context/ReservationContext";
const ParkGrid = () => {
  const array = [];
  for (let i = 1; i < 51; i++) {
    array.push(i);
  }

  const { startTime, endTime, parks } = useContext(ReservationContext);
  useEffect(() => {
    if (parks === "" || parks.length === 0) {
      return;
    }
    console.log(parks);
  }, [parks]);

  return (
    <Grid
      padding={["0", " 2rem 7rem"]}
      templateColumns={["repeat(3, 6fr)", "repeat(5, 1fr)"]}
      gap={[2, 6]}
      alignItems="center"
    >
      {array.map((item, index) => {
        return (
          <ParkItem
            backgroundCol={parks.includes(item) ? "red" : "#E7ECEF"}
            item={item}
            index={index}
            parks={parks}
          />
        );
      })}
    </Grid>
  );
};

export default ParkGrid;
