import React, { useEffect, useContext } from "react";
import { VStack, Grid, Box, Text, Image, Button } from "@chakra-ui/react";
import FacilityContext from "../context/FacilityContext";
import FacilityItem from "../components/FacilityItem";
import { useNavigate } from "react-router-dom";

const FacilitesPage = () => {
  const { facilites, getFacilites } = useContext(FacilityContext);
  const navigate = useNavigate();

  useEffect(() => {
    getFacilites();
  }, []);

  return (
    <VStack
      spacing={["2rem", "2rem", "2rem", "2rem"]}
      paddingTop="10rem"
      paddingBottom={"10rem"}
    >
      <Text fontSize={"2.5rem"} fontWeight="500">
        {" "}
        Our Facilities
      </Text>
      <Grid
        templateColumns={["repeat(1, 5fr)", "repeat(3, 5fr)"]}
        gap={5}
        align="center"
      >
        {facilites.map((facility) => (
          <FacilityItem
            key={facility.id}
            image={"../images/facility1.png"}
            open={facility.startTime}
            title={facility.name}
            close={facility.endTime}
            onClick={() => navigate(`/facilities/${facility.id}`)}
          />
        ))}
      </Grid>
    </VStack>
  );
};

export default FacilitesPage;
