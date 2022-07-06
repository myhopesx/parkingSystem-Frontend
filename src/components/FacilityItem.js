import React from "react";
import { VStack, Grid, Box, Text, Image, Button } from "@chakra-ui/react";
const FacilityItem = ({ image, title, open, close, onClick }) => {
  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      onClick={onClick}
    >
      <Box w={"20rem"}>
        <Image src={image} />
      </Box>
      <Text align="center" fontSize={"1.4rem"} fontWeight="bold">
        {title}
      </Text>
      <Text align="center" fontSize={"0.8rem"}>
        Opening Hour : {open}
      </Text>
      <Text align="center" fontSize={"0.8rem"}>
        Closing Hour : {close}
      </Text>
    </Box>
  );
};

export default FacilityItem;
