import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homev2 from "./pages/Homev2";
import Login from "./pages/Login";
import DrawerLayout from "./components/DrawerLayout";

const RouteComponent: React.FC = () => {
  const [, setShowWelcomeBanner] = useState(false);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/login"
          element={<Login setShowWelcomeBanner={setShowWelcomeBanner} />}
        />

        <Route
          path="/"
          element={<Login setShowWelcomeBanner={setShowWelcomeBanner} />}
        />
        <Route
          path="/home"
          element={
            <DrawerLayout>
              <Homev2 />
            </DrawerLayout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteComponent;
