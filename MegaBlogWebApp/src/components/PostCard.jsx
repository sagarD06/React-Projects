import React from "react";
import { Link } from "react-router-dom";
import storageService from "../appwrite/storageConfig";

function PostCard({ $id, title, featuredImage }) {
  return (
    <Link to={`/post/${$id}`}>
      <div className="w-full bg-gray-100 p-4 rounded-xl">
        <div className="w-full justify-center mb-4">
          <img
            src={storageService.getFilePreview(featuredImage)}
            alt={title}
            className="rounded-xl"
          />
        </div>
        <h2 className="text-xl font-bold">{title}</h2>
      </div>
    </Link>
  );
}

export default PostCard;
