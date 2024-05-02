import React from 'react';
import { Route, Routes } from "react-router-dom";
import { routers } from '../router';
import Projects from '../pages/Projects'

const AppRoutes = () => {
    return (
        <Routes>
             <Route index element={<Projects />} />
            {routers.map(route => <Route key={route.path} path={route.path} element={route.element}/>)}
        </Routes>
    );
};

export default AppRoutes;