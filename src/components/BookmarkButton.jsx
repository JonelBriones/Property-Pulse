"use client";
import bookmarkProperty from "@/app/actions/bookmarkProperty";
import React, { useState, useEffect } from "react";
import { FaBookmark } from "react-icons/fa";
import { toast } from "react-toastify";
import { useSession } from "next-auth/react";
import checkBookmarkStatus from "@/app/actions/checkBookmarkStatus";
const BookmarkButton = ({ property }) => {
  const { data: session } = useSession();
  const userId = session?.user?.id;

  const [isBookmarked, setIsBookmarked] = useState(false);
  const [loading, setLoading] = useState(true);

  const handleClick = async () => {
    if (!userId) {
      toast.error("You need to be sign in to bookmark a property");
      return;
    }
    bookmarkProperty(property._id).then((res) => {
      if (res.error) return toast.error(res.error);
      setIsBookmarked(res.isBookmarked);
      toast.success(res.message);
    });
  };

  useEffect(() => {
    if (!userId) {
      setLoading(false);
      return;
    }
    checkBookmarkStatus(property._id).then((res) => {
      if (res.error) toast.error(res.error);
      if (res.isBookmarked) setIsBookmarked(res.isBookmarked);
      setLoading(false);
    });
  }, [property.id, userId, checkBookmarkStatus()]);

  return (
    <>
      {isBookmarked ? (
        <button
          className="bg-red-500 hover:bg-red-600 text-white font-bold w-full py-2 px-4 rounded-full flex items-center justify-center"
          onClick={handleClick}
        >
          <FaBookmark className="mr-2" /> Remove Bookmark
        </button>
      ) : (
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold w-full py-2 px-4 rounded-full flex items-center justify-center"
          onClick={handleClick}
        >
          <FaBookmark className="mr-2" /> Bookmark Property
        </button>
      )}
    </>
  );
};

export default BookmarkButton;
