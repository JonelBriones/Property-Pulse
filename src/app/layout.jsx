import Navbar from "@/components/Navbar";
import "../assets/styles/globals.css";
import React from "react";
import Footer from "@/components/Footer";
export const metadata = {
  title: "Property Pulse",
  description: "Find your dream rental property",
  keywords: "rental, find rentals, find prperties",
};

const MainLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
};

export default MainLayout;
