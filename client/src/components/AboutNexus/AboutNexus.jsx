import React from "react";
import MainNavbar from "../Main Navbar/MainNavbar";
import ReactNexus from "./ReactNexus";
import BackendNexus from "./BackendNexus";
import DbNexus from "./DbNexus";
import ANexus from "./ANexus";
import FunctionalityNexus from "./FunctionalityNexus";

const AboutNexus = () => {
  return (
    <div className="main bg-[#2A2828] text-white overflow-hidden">
      <MainNavbar />
      <ANexus />
      <ReactNexus />
      <BackendNexus />
      <DbNexus />
      <FunctionalityNexus />
    </div>
  );
};

export default AboutNexus;
