import { Box } from '@chakra-ui/react';
import React, { useContext, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2'
import ReservationContext from '../context/ReservationContext';

const QrPagee = () => {
    const nav = useNavigate();
    const params = useParams();

    const { getReservationsById, reservation } = useContext(ReservationContext);

    useEffect(() => { getReservationsById(params.id) }, []);

    return (
        <Box>
            {
                reservation === ""
                    ? <Box />
                    : Swal.fire(`Reservation ID: ${reservation.id}\n
                    Car Info: ${reservation.car.name} ${reservation.car.plate}`,
                        `Start Time: ${reservation.startTime} - End Time: ${reservation.endTime}`)
                        .then((result) => {
                            if (result.isConfirmed) {
                                nav("/");
                            }
                        })


            }
        </Box>
    )
};

export default QrPagee;