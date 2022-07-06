import { createContext, useState } from "react";

const CarContext = createContext();

export const CarProvider = ({ children }) => {
  const [cars, setCars] = useState([]);

  const getCars = async (customerId) => {
    const response = await fetch(`/cars/${customerId}`, {
      headers: {
        "Content-Type": "application/json",
        "X-Requested-Width": "XMLHttpRequest",
      },
    });
    const data = await response.json();
    setCars(data);
    console.log(data);
  };

  return (
    <CarContext.Provider
      value={{
        cars,
        getCars,
      }}
    >
      {children}
    </CarContext.Provider>
  );
};

export default CarContext;
