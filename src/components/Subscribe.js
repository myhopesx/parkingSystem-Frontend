import React from "react";
import { HStack, Box, Image, Text, Button } from "@chakra-ui/react";

const Subscribe = () => {
  return (
    <HStack align="center" justifyContent="center">
      <Box>
        <Image
          src="../images/home2.jpg"
          w={"60%"}
          display={["none", "block"]}
          flexDirection={["column", "column", "row", "row"]}
        />
      </Box>
      <Box>
        <Text fontSize={["1.5rem", "2.5rem"]} fontWeight="bold">
          Join Us Now and book your
        </Text>
        <Text
          fontSize={["1.5rem", "2.5rem"]}
          fontWeight="bold"
        >
          parking space with us!
        </Text>
        <Button
          bg="primary.main"
          w="9rem"
          color="white"
          h={"2.5rem"}
          marginTop="2rem"
        >
          Subscribe Now
        </Button>
      </Box>
    </HStack>
  );
};

export default Subscribe;
