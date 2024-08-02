import Image from "next/image";
import React from "react";

const PropertyImages = ({ images }) => {
  return (
    <section className="bg-blue-50 p-4">
      <div className="container mx-auto">
        {images.length === 1 ? (
          <Image
            src={images[0]}
            alt=""
            height="400"
            width="1800"
            className="object-cover h-[400px] mx-auto rounded-t-xl"
          />
        ) : (
          <div className="grid grid-cols-2 gap-4">
            {images.map((image, index) => (
              <div className="col-span-1" key={index}>
                <Image
                  key={index}
                  src={image}
                  alt=""
                  height="400"
                  className="object-cover h-[400px] mx-auto rounded-t-xl"
                  width="1800"
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default PropertyImages;
