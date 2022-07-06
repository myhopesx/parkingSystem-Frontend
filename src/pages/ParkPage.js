import React, { useEffect } from "react";
import {
  Grid,
  GridItem,
  Box,
  Image,
  Text,
  Flex,
  Select,
  Button,
} from "@chakra-ui/react";
import DateTimePicker from "react-datetime-picker";
import ParkGrid from "../components/ParkGrid";
import { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import FacilityContext from "../context/FacilityContext";
import ReservationContext from "../context/ReservationContext";
import CarContext from "../context/CarContext";
import ParkingContext from "../context/ParkingContext";

const ParkPage = () => {
  const nav = useNavigate();
  const { facility, getFacility } = useContext(FacilityContext);
  const { selectedPark } = useContext(ParkingContext);
  const {
    startTime,
    endTime,
    setEndTime,
    setStartTime,
    getParks,
    setSelectedCar,
    selectedCar,
    addReservation,
  } = useContext(ReservationContext);

  const { cars, getCars } = useContext(CarContext);
  const params = useParams();
  const id = params.id;

  // const { parkingList, getAllParks } = useContext(ParkContext);

  // useEffect(() => {}, []);

  const onClick = () => {
    // console.log("id", id);
    addReservation(id, selectedPark, { startTime }, { endTime });
    nav("/payment");
  };
  useEffect(() => {
    getCars(localStorage.getItem("userid"));
  }, []);

  useEffect(() => {
    getFacility(id);
    console.log(facility);

    if (startTime !== "" && endTime !== "") {
      console.log("first");
      let x = getParks(id, { startTime }, { endTime });
      console.log(x);
    }
  }, [startTime, endTime]);

  return (
    <Grid templateColumns={"(1,1fr)"} align="center" padding={"3rem"}>
      <GridItem>
        <Box borderWidth="1px" borderRadius="lg" overflow="hidden" w={"70%"}>
          <Box>
            <Flex alignItems={"center"} justifyContent={"flex-end"} gap={20}>
              <Image src="../images/facility1.png" w={"40%"} />
              <Box align="left">
                <Text fontWeight={"bold"}>{facility.name}</Text>
                <Text>
                  {" "}
                  Working hour: {facility.startTime}-{facility.endTime}
                </Text>
                <Text> Adress: {facility.address}</Text>
                <Text w={"80%"}> Description: {facility.description}</Text>
              </Box>
            </Flex>
          </Box>
        </Box>

        <Box
          borderWidth="1px"
          borderRadius="lg"
          overflow="hidden"
          w={"70%"}
          marginTop={"3rem"}
          paddingTop={"5rem"}
          height={["fit-content", "20%"]}
        >
          <Grid templateColumns="repeat(1, 6fr)" gap={6} paddingBottom={"2rem"}>
            <GridItem>
              <Text align="center" fontSize={"1.4rem"} fontWeight="w.500">
                1- Pick your date and time for your visit
              </Text>
            </GridItem>

            <GridItem>
              <Grid
                templateColumns={["repeat(1, 5fr)", "repeat(2, 0.3fr)"]}
                gap={2}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <GridItem paddingTop={"5rem"}>
                  <Text
                    align="center"
                    fontSize={"1.4rem"}
                    fontWeight="w.500"
                    paddingBottom={"2rem"}
                  >
                    start time
                  </Text>
                  <DateTimePicker
                    onChange={(date) => {
                      setStartTime(date);
                      console.log(typeof date);
                    }}
                    value={startTime}
                    format="yyyy-MM-dd HH:mm"
                  />
                </GridItem>

                <GridItem paddingTop={"5rem"}>
                  <Text
                    align="center"
                    fontSize={"1.4rem"}
                    fontWeight="w.500"
                    paddingBottom={"2rem"}
                  >
                    end time
                  </Text>
                  <DateTimePicker
                    onChange={(date) => setEndTime(date)}
                    value={endTime}
                    format="yyyy-MM-dd HH:mm"
                  />
                </GridItem>
              </Grid>
            </GridItem>
          </Grid>
        </Box>

        <Box
          borderWidth="1px"
          borderRadius="lg"
          overflow="hidden"
          w={["100%", "70%"]}
          marginTop={"3rem"}
          paddingTop={"3rem"}
        >
          <Box>
            <Text align="center" fontSize={"1.4rem"} fontWeight="w.500">
              2- Parking Space Overview
            </Text>
            <Text align="center" fontSize={"1rem"} fontWeight="w.500">
              Please choose your parking number
            </Text>
          </Box>
          <ParkGrid />
        </Box>

        <Box
          borderWidth="1px"
          borderRadius="lg"
          overflow="hidden"
          w={"70%"}
          marginTop={"3rem"}
          paddingTop={"3rem"}
        >
          <Grid templateColumns="repeat(1, 6fr)" gap={2} paddingBottom={"2rem"}>
            <GridItem>
              <Text align="center" fontSize={"1.4rem"} fontWeight="w.500">
                3- choose your car
              </Text>
            </GridItem>

            <GridItem>
              <Text align="center" fontSize={"1rem"} fontWeight="w.500">
                please make sure that you already registered your car
              </Text>
            </GridItem>

            <GridItem>
              <Select
                placeholder="Select your car"
                size="md"
                w={"50%"}
                onChange={(e) => {
                  setSelectedCar(e.target.value);
                }}
              >
                {cars.map((car) => (
                  <option key={car.id} value={car.id}>
                    {car.name}
                  </option>
                ))}
              </Select>
            </GridItem>
            <GridItem>
              <Button
                bg="primary.main"
                w="9rem"
                color="white"
                onClick={onClick}
              >
                Book Your Park
              </Button>
            </GridItem>
          </Grid>
        </Box>
      </GridItem>
    </Grid>
  );
};

export default ParkPage;
