import React from "react";
import { HStack, VStack, Box, Text, Image, Button } from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";

const Banner = () => {
  const navigate = useNavigate();
  const onClick = () => {
    // if (localStorage.getItem("userid") === "") {
    //   navigate("/login");
    // }
    navigate("/login");
  };

  return (
    <HStack
      spacing={[2, 5, 5, 4]}
      paddingTop={["0", "10rem", "10rem", 0]}
      align="center"
      justify="center"
      flexDirection={["column", "column", "column", "row"]}
    >
      <VStack
        spacing="1.2rem"
        alignItems={["center", "center", "center", "start"]}
      >
        <Text fontSize={["2rem", "2rem", "5rem", "2.5rem"]} fontWeight="bold">
          Park easy and safe!
        </Text>
        <Text
          fontSize={["1.2rem", "2rem", "2rem", "1.2rem"]}
          w={["20rem", "30rem", "45rem", "30rem"]}
          align={["center", "center", "center", "left"]}
        >
          By using our parking website, you can find your parking spot easily
          and safely.all you have to do is sign up and you are ready to go!
        </Text>
        <HStack>
          <Button bg="primary.main" w="9rem" color="white">
            Learn More
          </Button>
          <Button bg="none" w="5rem" color="primary.main" onClick={onClick}>
            Login <ChevronRightIcon />
          </Button>
        </HStack>
      </VStack>
      <Box w={["100%", "40%", "60%", "40%"]} h={["100%", "40%"]}>
        <Image src="../images/home.jpg" />
      </Box>
    </HStack>
  );
};

export default Banner;
