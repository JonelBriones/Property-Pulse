import "../assets/styles/globals.css";
import React from "react";

export const metadata = {
  title: "Property Pulse",
  description: "Find your dream rental property",
  keywords: "rental, find rentals, find prperties",
};

const MainLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <div>{children}</div>;
      </body>
    </html>
  );
};

export default MainLayout;
