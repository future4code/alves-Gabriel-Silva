import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from '../pages/HomePage';
import { AdminHomePage } from '../pages/AdminHomePage';
import { ApplicationFormPage } from '../pages/ApplicationFormPage';
import { CreateTripPage } from '../pages/CreateTripPage';
import { ListTripsPage } from '../pages/ListTripsPage';
import { LoginPage } from '../pages/LoginPage';
import { TripDetailsPage } from '../pages/TripDetailsPage';


export function Router() {

    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route index element={<HomePage/>} />
                    <Route path='admin' element={<AdminHomePage/>} />
                    <Route path='formPage' element={<ApplicationFormPage/>} />
                    <Route path='createTrip' element={<CreateTripPage/>} />
                    <Route path='listTrip' element={<ListTripsPage/>} />
                    <Route path='login' element={<LoginPage/>} />
                    <Route path='tripDetails' element={<TripDetailsPage/>} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}
