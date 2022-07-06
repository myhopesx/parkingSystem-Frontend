import { Grid, GridItem, HStack } from "@chakra-ui/react";
import React from "react";
import { Box, Text, Button } from "@chakra-ui/react";
import QRCode from "react-qr-code";

const ReservationCard = ({ reservation }) => {
  return (
    <Box
      align="center"
      bg="tertiary.main"
      borderRadius={"2rem"}
      elevation={4}
      alignItems="center"
      justifyContent="center"
      padding={"2rem"}
      width={"80%"}
    >
      <HStack>
        <Box align="left" paddingRight={"2rem"}>
          <Text fontSize={["1.5rem"]} fontWeight="bold">
            Reservation Summary
          </Text>
          <Text fontSize={["1rem"]}>Place: {reservation.facility.name}</Text>
          <Text fontSize={["1rem"]}>Start at: {reservation.startTime}</Text>
          <Text fontSize={["1rem"]}>End at: {reservation.endTime}</Text>
          <Text fontSize={["1rem"]}>Car Info: {reservation.car.name} {reservation.car.plate}</Text>
          <Text fontSize={["1rem"]} paddingBottom={"1rem"}>
            Park Number : {reservation.park.id}
          </Text>
        </Box>
        <QRCode value={`${process.env.REACT_APP_QR_URL}/${reservation.id}`} size="180" />
      </HStack>
    </Box>//yes
  );
};

export default ReservationCard;
