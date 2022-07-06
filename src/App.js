import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import FacilitesPage from "./pages/FacilitesPage";

import ParkPage from "./pages/ParkPage";
import NavBar from "./components/Header";
import Footer from "./components/Footer";
import Profile from "./pages/Profile";
import ReservationsPage from "./pages/ReservationsPage";
import { FacilityProvider } from "./context/FacilityContext";
import { ReservationProvider } from "./context/ReservationContext";
import { ParkingProvider } from "./context/ParkingContext";
import Login from "./pages/Login";
import { AuthProvider } from "./context/AuthContext";
import { CarProvider } from "./context/CarContext";
import Paypal from "./pages/PayPal";
import QrPagee from "./pages/QrPagee";


function App() {
  return (
    <AuthProvider>
      <FacilityProvider>
        <ReservationProvider>
          <ParkingProvider>
            <CarProvider>
              <BrowserRouter>
                <div className="App">
                  <NavBar />
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/facilities" element={<FacilitesPage />} />
                    <Route path="/parking" element={<ParkPage />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/reservation" element={<ReservationsPage />} />
                    <Route path="/facilities/:id" element={<ParkPage />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/payment" element={<Paypal />} />
                    <Route path="/qr/:id" element={<QrPagee />} />
                  </Routes>
                  <Footer />
                </div>
              </BrowserRouter>
            </CarProvider>
          </ParkingProvider>
        </ReservationProvider>
      </FacilityProvider>
    </AuthProvider>
  );
}

export default App;
