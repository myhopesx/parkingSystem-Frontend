import React from "react";
import { VStack, HStack, Box, Image, Text, Button } from "@chakra-ui/react";
const Footer = () => {
  return (
    <HStack
      spacing={[0, 0, 5, 20]}
      bg={"primary.main"}
      w={["100%"]}
      padding={"5rem"}
      justifyContent="center"
      flexDirection={["column", "column", "row", "row"]}
    >
      <VStack
        color={"white"}
        spacing={5}
        align={["center", "left"]}
        marginBottom={["2rem", "0"]}
      >
        <Box fontSize={"1.4rem"}>Logo</Box>
        <Box>Contact us:</Box>
        <HStack flexDirection={["column", "column", "column", "row"]}>
          <Text>Email :</Text>
          <Text>AmaalAlzhrani.it@gmail.com</Text>
        </HStack>
        <HStack>
          <Text>phoneNumber :</Text>
          <Text>0559572634</Text>
        </HStack>
      </VStack>

      <VStack
        color={"white"}
        spacing={5}
        align={["center", "left"]}
        paddingBottom={["2rem", "0"]}
      >
        <Box fontSize={"1.4rem"}>For Customer</Box>
        <Box>Home</Box>
        <Box>Features</Box>
        <Box>Facilities</Box>
      </VStack>
      <VStack color={"white"} spacing={5} align={["center", "left"]}>
        <Box fontSize={"1.4rem"}>For Facilities</Box>
        <Box fontWeight={"bold"}>Join us!</Box>
        <Box>Login</Box>
        <Box>Home</Box>
      </VStack>
    </HStack>
  );
};

export default Footer;
