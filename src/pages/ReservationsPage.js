import { GridItem, Grid } from "@chakra-ui/react";
import React, { useEffect } from "react";
import ReservationCard from "../components/ReservationCard";
import ReservationContext from "../context/ReservationContext";
import { useContext } from "react";

const ReservationsPage = () => {

  const { getReservationsByCustomerId, customerReservations } = useContext(ReservationContext);

  useEffect(() => { getReservationsByCustomerId() }, []);

  return (
    <Grid
      templateColumns="repeat(2, 1fr)"
      gap={10}
      alignItems="center"
      paddingLeft={"5rem"}
      paddingBottom={"5rem"}
    >

      {

        customerReservations.length === 0
          ? <h2>No Reservations</h2>

          : customerReservations.map(res => {
            return <GridItem>
              <ReservationCard key={res.id} reservation={res} />
            </GridItem>
          })
      }

    </Grid>
  );
};

export default ReservationsPage;
