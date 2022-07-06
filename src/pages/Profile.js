import { Button, Grid, GridItem, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import React from "react";

const Profile = () => {
  const nav = useNavigate();
  const onClick = () => {
    nav("/reservation");
  };
  return (
    <Grid alignItems="center" justifyContent={"center"}>
      <GridItem>
        <Button bg="primary.main" size="md" w={"100%"} onClick={onClick}>
          My Reservations
        </Button>
      </GridItem>
    </Grid>
  );
};

export default Profile;
