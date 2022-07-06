import { createContext, useState } from "react";

const FacilityContext = createContext();

export const FacilityProvider = ({ children }) => {
  const [facilites, setFacilities] = useState([]);
  const [facility, setFacility] = useState({});

  const getFacilites = async () => {
    const response = await fetch("/facilities/all");
    const data = await response.json();
    setFacilities(data);
    console.log(data);
  };

  const getFacility = async (id) => {
    const response = await fetch(`/facilities/${id}`);
    const data = await response.json();
    setFacility(data);
    console.log(data);
  };

  return (
    <FacilityContext.Provider
      value={{
        getFacilites,
        facilites,
        getFacility,
        facility,
      }}
    >
      {children}
    </FacilityContext.Provider>
  );
};

export default FacilityContext;
