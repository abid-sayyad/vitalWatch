import React from "react";
import Navbar from "../components/Navbar";
import { Toaster } from "react-hot-toast";

const MainLayout: React.FC<{ children: any }> = ({ children }) => {
  return (
    <div className="App">
      <Toaster position="top-center" />
      <Navbar />
      <main className="w-full mt-[55px] h-[calc(100vh_-_55px)] overflow-y-scroll">
        {" "}
        {children}
      </main>
    </div>
  );
};

export default MainLayout;
