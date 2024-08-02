import PropertyAddForm from "@/components/PropertyAddForm";
import React from "react";

const PropertyAddPage = () => {
  return (
    <div>
      <section className="bg-blue-50">
        <div className="container m-auto max-w-2xl py-24">
          <div className="bg-white px-6 py-8 mb-4 shadow-md rounded-md border-md md:m-0">
            <PropertyAddForm />
          </div>
        </div>
      </section>
    </div>
  );
};

export default PropertyAddPage;
