import React from "react";
import PropertyCard from "@/components/PropertyCard";
import User from "@/models/User";
import connectDB from "@/config/database";
import { getSessionUser } from "@/utils/getSessionUser";
const SavedProperties = async () => {
  const { userId } = await getSessionUser();
  const { bookmarks } = await User.findById(userId).populate("bookmarks");
  console.log(bookmarks);

  return (
    <section className="px-4 py-6">
      <div className="container lg:container m-auto px-4 py-6">
        <h1 className="text-2xl mb-4">Saved Properties</h1>
        {bookmarks.length === 0 ? (
          <h1>No saved properties</h1>
        ) : (
          <div className="grid grid-col-1 md:grid-cols-3 gap-6">
            {bookmarks.map((bookmark) => (
              <PropertyCard key={bookmark._id} property={bookmark} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default SavedProperties;
