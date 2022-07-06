import React from "react";
import { VStack, Text, Box, HStack, Image, Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
const Facilities = () => {
  const nav = useNavigate();

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
      <HStack
        spacing={[0, 20]}
        align="center"
        justifyContent="center"
        flexDirection={["column", "column", "column", "row"]}
      >
        <Box w={["50%", "60%", "40%", "15%"]}>
          <Image src="../images/facility1.png" />
        </Box>
        <Box w={["50%", "60%", "40%", "15%"]}>
          <Image src="../images/facility2.png" />
        </Box>
        <Box w={["50%", "60%", "40%", "15%"]}>
          <Image src="../images/facility3.jpg" />
        </Box>
        <Box w={["50%", "60%", "40%", "15%"]}>
          <Image src="../images/facility4.jpeg" />
        </Box>
      </HStack>
      <Button bg="primary.main" color={"white"} onClick={() => nav("/facilities")}>
        Browse More
      </Button>
    </VStack>
  );
};

export default Facilities;
