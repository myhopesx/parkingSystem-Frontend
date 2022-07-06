import { createContext, useState } from "react";

const ParkingContext = createContext();

export const ParkingProvider = ({ children }) => {
  const [selectedPark, setSelectedPark] = useState(0);
  const [parkingList, setParkingList] = useState("");

  const getAllParks = async (id) => {
    console.log("id", id);
    const response = await fetch(`/parks/${id}`, {
      headers: {
        "Content-Type": "application/json",
        "X-Requested-Width": "XMLHttpRequest",
      },
    });
    const data = await response.json();
    setParkingList(data);
    console.log(data);
  };

  return (
    <ParkingContext.Provider
      value={{
        selectedPark,
        setSelectedPark,
        parkingList,
        getAllParks,
      }}
    >
      {children}
    </ParkingContext.Provider>
  );
};

export default ParkingContext;
