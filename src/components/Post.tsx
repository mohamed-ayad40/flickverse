import React, { useState } from "react";
import {
  FaHeart,
  FaComment,
  FaShare,
  FaBookmark,
  FaEllipsisH,
  FaStar,
} from "react-icons/fa";
import HeartAnimation from "./HeartAnimation";

interface PostProps {
  post: {
    id: string;
    author: {
      name: string;
      avatar: string;
      username: string;
    };
    content: string;
    images: string[];
    timestamp: string;
    likes: number;
    comments: number;
    shares: number;
    isLiked: boolean;
    isBookmarked: boolean;
    isStarred?: boolean;
    hashtags?: string;
  };
  onLike: (id: string) => void;
  onShare: (id: string) => void;
  onBookmark: (id: string) => void;
  onStar?: (id: string) => void;
}

const Post: React.FC<PostProps> = ({
  post,
  onLike,
  onShare,
  onBookmark,
  onStar,
}) => {
  // const handleLike = () => onLike(post.id);
  const handleShare = () => onShare(post.id);
  const handleBookmark = () => onBookmark(post.id);
  const handleStar = () => onStar?.(post.id);
  const [showHeart, setShowHeart] = useState(false);
  const handleLike = () => {
    setTimeout(() => setShowHeart(false), 3000);
    onLike(post.id);
    if (!post.isLiked) {
      setShowHeart(true);
      return
    }
  };

  return (
    <div className="bg-white rounded-xl p-6 mb-6 transform transition-all duration-500 hover:shadow-[0_0_30px_rgba(99,102,241,0.15)] relative overflow-hidden group border-4 border-purple-100 hover:border-purple-300">
      {/* Heart Animation - Positioned relative to the post */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 pointer-events-none z-50">
        <HeartAnimation isVisible={showHeart} size={2} />
      </div>
      <div className="absolute inset-0 rounded-xl border-4 border-transparent group-hover:border-purple-400/20 transition-all duration-500 pointer-events-none" />

      <div className="absolute inset-0 bg-gradient-to-br from-purple-50/0 via-indigo-50/0 to-blue-50/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      {/* Main content */}
      <div className="relative">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className="relative">
              <img
                src={post.author.avatar}
                alt={post.author.name}
                className="w-12 h-12 rounded-full border-4 border-purple-200 shadow-[0_0_15px_rgba(99,102,241,0.3)] transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-3"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-500/20 to-indigo-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 hover:underline cursor-pointer transition-all duration-200 group-hover:text-purple-600 font-poppins">
                {post.author.name}
              </h3>
              <p className="text-sm text-gray-500 group-hover:text-gray-600 transition-colors duration-200 font-inter">
                @{post.author.username}
              </p>
            </div>
          </div>
          <button className="text-gray-400 bg-white hover:text-gray-600 transform transition-all duration-300 hover:rotate-12">
            <FaEllipsisH />
          </button>
        </div>

        <div className="mb-4">
          <p className="text-gray-700 group-hover:text-gray-800 transition-colors duration-200 font-inter">
            {post.content}
            <span className="text-purple-600 cursor-pointer hover:text-purple-700 font-medium font-poppins">
              {post.hashtags}
            </span>
          </p>
        </div>

        {post.images.length > 0 && (
          <div className="relative group mb-4 overflow-hidden rounded-lg border-4 border-purple-100 group-hover:border-purple-300 transition-all duration-500">
            <img
              src={post.images[0]}
              alt="Post content"
              className="w-full h-64 object-cover transition-all duration-500 group-hover:scale-105 group-hover:rotate-1 shadow-[0_0_20px_rgba(0,0,0,0.15)]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
            {/* Movie screen corners */}
            <div className="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-purple-400/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute top-0 right-0 w-8 h-8 border-t-4 border-r-4 border-purple-400/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute bottom-0 left-0 w-8 h-8 border-b-4 border-l-4 border-purple-400/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 border-purple-400/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
        )}

        <div className="flex items-center justify-between text-gray-500 border-t-4 border-purple-100 pt-4 group-hover:border-purple-200 transition-colors duration-300">
          <span className="text-sm group-hover:text-gray-600 transition-colors duration-200 font-inter">
            {post.timestamp}
          </span>
          <div className="flex items-center space-x-4">
            <button
              onClick={handleLike}
              className={`flex items-center bg-white space-x-0.5 text-gray-500 hover:text-pink-500 transition-all duration-300 transform hover:scale-105 ${
                post.isLiked ? "text-pink-500" : ""
              }`}
            >
              <FaHeart className="text-base" />
              <span className="text-xs">{post.likes}</span>
            </button>
            <button
              className="flex bg-white items-center space-x-0.5 text-gray-500 hover:text-blue-500 transition-all duration-300 transform hover:scale-105"
            >
              <FaComment className="text-base" />
              <span className="text-xs">{post.comments}</span>
            </button>
            <button
              onClick={handleShare}
              className="flex items-center bg-white space-x-0.5 text-gray-500 hover:text-green-500 transition-all duration-300 transform hover:scale-105"
            >
              <FaShare className="text-base" />
              <span className="text-xs">{post.shares}</span>
            </button>
            <button
              onClick={handleStar}
              className={`flex bg-white items-center space-x-0.5 text-gray-500 hover:text-yellow-500 transition-all duration-300 transform hover:scale-105 ${
                post.isStarred ? "text-yellow-500" : ""
              }`}
            >
              <FaStar className="text-base" />
            </button>
            <button
              onClick={handleBookmark}
              className={`text-gray-500 bg-white hover:text-purple-500 transition-all duration-300 transform hover:scale-105 ${
                post.isBookmarked ? "text-purple-500" : ""
              }`}
            >
              <FaBookmark className="text-base" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Post;
