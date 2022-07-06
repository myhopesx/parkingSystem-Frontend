import { createContext, useState } from "react";

const ReservationContext = createContext();

export const ReservationProvider = ({ children }) => {
  const [selectedCar, setSelectedCar] = useState(0);
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [parks, setParks] = useState([]);
  const [customerReservations, setResrvations] = useState([]);
  const [reservation, setCurrentResrvation] = useState("");

  const getParks = async (id, startTime, endTime) => {
    let tempStart = JSON.parse(JSON.stringify(startTime));
    let tempEnd = JSON.parse(JSON.stringify(endTime));

    let ts = new Date(tempStart.startTime);
    let te = new Date(tempEnd.endTime);

    console.log(ts.toString(), "+", te.toString());

    const response = await fetch(
      `/reservations/parks?id=${id}&startTime=${ts.toString()}&endTime=${te.toString()}`
    );

    console.log(response);
    const data = await response.json();
    setParks(data.body);
  };

  const addReservation = async (
    facilityId,
    selectedPark,
    startTime,
    endTime
  ) => {
    let tempStart = JSON.parse(JSON.stringify(startTime));
    let tempEnd = JSON.parse(JSON.stringify(endTime));

    let ts = new Date(tempStart.startTime);
    let te = new Date(tempEnd.endTime);

    const response = await fetch(
      `/reservations/${localStorage.getItem(
        "customerid"
      )}/${facilityId}/${selectedCar}/${selectedPark}`,
      {
        headers: {
          "Content-Type": "application/json",
          "X-Requested-Width": "XMLHttpRequest",
        },
        method: "POST",
        body: JSON.stringify({
          startTime: ts.toString(),
          endTime: te.toString(),
          customer: {
            id: localStorage.getItem("customerid"),
          },
          facility: {
            id: facilityId,
          },
          car: {
            id: selectedCar,
          },
          park: {
            id: selectedPark,
          },
        }),
      }
    );
    const data = await response.json();
    console.log(data);
  };

  const getReservationsByCustomerId = async () => {
    const response = await fetch(
      `/customers/${localStorage.getItem("customerid")}/reservations`
    );

    console.log(response);
    const data = await response.json();
    console.log(data)
    setResrvations(data);
  };

  const getReservationsById = async (resID) => {
    const response = await fetch(
      `/reservations/info/${resID}`
    );

    console.log(response);
    const data = await response.json();
    console.log(data)
    setCurrentResrvation(data);
  };

  return (
    <ReservationContext.Provider
      value={{
        getParks,
        parks,
        startTime,
        setStartTime,
        endTime,
        setEndTime,
        selectedCar,
        setSelectedCar,
        addReservation,
        getReservationsByCustomerId,
        customerReservations,
        getReservationsById,
        reservation
      }}
    >
      {children}
    </ReservationContext.Provider>
  );
};

export default ReservationContext;
