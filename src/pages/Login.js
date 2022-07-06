import { Box, Heading, VStack } from "@chakra-ui/layout";
import {
  Button,
  FormLabel,
  Input,
  Flex,
  HStack,
  Image,
  Link,
  Avatar,
  Text,
  Center,
} from "@chakra-ui/react";
import { FormControl } from "@chakra-ui/react";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const { loginadmin, logincustomers, setUserStorage } =
    useContext(AuthContext);

  const onClick = async () => {
    const loginResult = await logincustomers(email, password);
    if (loginResult) {
      navigate("/");
    }
  };

  return (
    <HStack spacing="-20">
      <Flex
        height="100vh"
        width={["100%", "100%", "50%"]}
        backgroundColor="white"
        alignItems="center"
        justifyContent="center"
      >
        <Box
          w={["full", "md"]}
          p={["8", "10"]}
          mt={["20", "10vh"]}
          mx="auto"
          border={["none", "1px"]}
          borderColor={["", "gray.300"]}
          borderRadius={10}
        >
          <Center>
            <Avatar src="https://bit.ly/broken-link" />
          </Center>
          <VStack spacing={6} align="flex-start" w="full">
            <VStack spacing={1} align={["flex-start", "center"]} w="full">
              <Heading fontSize="20px">Login</Heading>
            </VStack>

            <FormControl>
              <FormLabel>Email</FormLabel>

              <Input
                rounded="none"
                variant="filled"
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                value={email}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Password</FormLabel>
              <Input
                rounded="none"
                variant="filled"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                value={password}
              />
            </FormControl>
            <Button
              rounded="none"
              colorScheme="facebook"
              color="#E7ECEF"
              w="full"
              onClick={onClick}
            >
              Login
            </Button>
            <HStack fontSize="20px">
              <Text color="#274C77">You don't have an account?</Text>
              <Link color="#274C77" href="/register">
                Register
              </Link>
            </HStack>
          </VStack>
        </Box>
      </Flex>
      <Flex
        width="100vh"
        display={["none", "none", "flex"]}
        height="100vh"
        alignItems="center"
        justifyContent="center"
      >
        <Image
          src="../images/loginImage.jpg"
          width="493px"
          height="700px"
        ></Image>
      </Flex>
    </HStack>
  );
};
export default Login;
