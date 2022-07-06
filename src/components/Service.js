import React from "react";
import { Box, Text, VStack, HStack } from "@chakra-ui/react";
import { TimeIcon, CheckCircleIcon } from "@chakra-ui/icons";

const Service = () => {
  return (
    <HStack
      spacing={[5, 5, 5, 20]}
      align="center"
      justify="center"
      w={["fit-content", "fit-content", "fit-content", "100%"]}
      paddingTop={["10rem"]}
      paddingBottom={["10rem"]}
      flexDirection={["column", "column", "row", "row"]}
      height={["fit-content", "fit-content", "fit-content", "100%"]}
    >
      <VStack
        spacing={2}
        align="start"
        justify="center"
        w={["80%", "50%", "30%", "20%"]}
        marginBottom={["3rem", "3rem", "0", "0"]}
      >
        <Box>
          <TimeIcon
            w={10}
            h={10}
            color={"white"}
            borderRadius={"50%"}
            bg={"secondary.main"}
          />
        </Box>
        <Box>
          <Text fontSize="1.5rem" fontWeight="bold">
            Time Saving
          </Text>
        </Box>
        <Box>
          <Text fontSize="1.2rem">
            save your time by booking your parking spot online
          </Text>
        </Box>
      </VStack>
      //-----------------------------------------------------
      <VStack
        spacing={2}
        align="start"
        justify="center"
        w={["80%", "50%", "30%", "20%"]}
      >
        <Box>
          <CheckCircleIcon w={8} h={8} color={"secondary.main"} />
        </Box>
        <Box>
          <Text fontSize="1.5rem" fontWeight="bold">
            Easy to use
          </Text>
        </Box>
        <Box>
          <Text fontSize="1.2rem">
            Easy to use our website to book your parking spot
          </Text>
        </Box>
      </VStack>
      //----------------------------------------------------------
      <VStack
        spacing={2}
        align="start"
        justify="center"
        w={["80%", "50%", "30%", "20%"]}
        paddingTop={["3rem", "5rem", "0", "0"]}
      >
        <Box>
          <Text
            w={9}
            h={10}
            align="center"
            color={"white"}
            borderRadius={"50%"}
            bg={"secondary.main"}
            fontSize="1.8rem"
          >
            $
          </Text>
        </Box>
        <Box>
          <Text fontSize="1.5rem" fontWeight="bold">
            Online Payment
          </Text>
        </Box>
        <Box>
          <Text fontSize="1.2rem">
            Pay online for your parking spot easily and safely
          </Text>
        </Box>
      </VStack>
      //----------------------------------------------------------
    </HStack>
  );
};

export default Service;
