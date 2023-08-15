import { Route, Routes, useNavigate } from "react-router-dom";
import { LoginPage } from "../components/LoginPage";
import { RegisterPage } from "../components/RegisterPage";
import { HomePage } from "../components/HomePage";
import { useState } from "react";

export const RoutesMain = () => {

  return (
    <Routes>
      <Route path="/" element={<LoginPage/>} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/dashboard" element={<HomePage/>}
      />
    </Routes>
  );
};
