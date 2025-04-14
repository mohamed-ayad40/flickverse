import React, { useState } from "react";
import { FaBell, FaComment, FaHeart, FaShare, FaUser } from "react-icons/fa";

const Notifications: React.FC = () => {
  const [activeTab, setActiveTab] = useState("all");

  const notifications = {
    all: [
      {
        id: 1,
        type: "mention",
        user: "MovieBuff123",
        content: "mentioned you in a post about The Matrix",
        time: "2m ago",
        read: false,
        profileImage: "https://picsum.photos/200/200?random=1",
      },
      {
        id: 2,
        type: "like",
        user: "SeriesLover",
        content: "liked your post about Breaking Bad",
        time: "15m ago",
        read: true,
        profileImage: "https://picsum.photos/200/200?random=2",
      },
      {
        id: 3,
        type: "comment",
        user: "CinemaFan",
        content: "commented on your post: 'Great analysis!'",
        time: "1h ago",
        read: false,
        profileImage: "https://picsum.photos/200/200?random=3",
      },
      {
        id: 4,
        type: "share",
        user: "FilmCritic",
        content: "shared your review of Inception",
        time: "3h ago",
        read: true,
        profileImage: "https://picsum.photos/200/200?random=4",
      },
    ],
    mentions: [
      {
        id: 1,
        type: "mention",
        user: "MovieBuff123",
        content: "mentioned you in a post about The Matrix",
        time: "2m ago",
        read: false,
        profileImage: "https://picsum.photos/200/200?random=5",
      },
      {
        id: 2,
        type: "mention",
        user: "SeriesEnthusiast",
        content: "mentioned you in a discussion about Stranger Things",
        time: "1d ago",
        read: true,
        profileImage: "https://picsum.photos/200/200?random=6",
      },
    ],
    comments: [
      {
        id: 1,
        type: "comment",
        user: "CinemaFan",
        content: "commented on your post: 'Great analysis!'",
        time: "1h ago",
        read: false,
        profileImage: "https://picsum.photos/200/200?random=7",
      },
      {
        id: 2,
        type: "comment",
        user: "FilmBuff",
        content: "commented: 'I completely agree with your points'",
        time: "5h ago",
        read: true,
        profileImage: "https://picsum.photos/200/200?random=8",
      },
    ],
    likes: [
      {
        id: 1,
        type: "like",
        user: "SeriesLover",
        content: "liked your post about Breaking Bad",
        time: "15m ago",
        read: true,
        profileImage: "https://picsum.photos/200/200?random=9",
      },
      {
        id: 2,
        type: "like",
        user: "MovieCritic",
        content: "liked your review of The Dark Knight",
        time: "2d ago",
        read: true,
        profileImage: "https://picsum.photos/200/200?random=10",
      },
    ],
    shares: [
      {
        id: 1,
        type: "share",
        user: "FilmCritic",
        content: "shared your review of Inception",
        time: "3h ago",
        read: true,
        profileImage: "https://picsum.photos/200/200?random=11",
      },
      {
        id: 2,
        type: "share",
        user: "CinemaLover",
        content: "shared your post about Marvel movies",
        time: "1d ago",
        read: false,
        profileImage: "https://picsum.photos/200/200?random=12",
      },
    ],
  };

  const getIcon = (type: string) => {
    switch (type) {
      case "mention":
        return <FaUser className="text-indigo-500" />;
      case "comment":
        return <FaComment className="text-blue-500" />;
      case "like":
        return <FaHeart className="text-red-500" />;
      case "share":
        return <FaShare className="text-green-500" />;
      default:
        return <FaBell className="text-gray-500" />;
    }
  };


  return (
    <div className="h-full p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold text-gray-900 mb-8">Notifications</h1>

      {/* Tabs */}
      <div className="flex space-x-4 mb-6">
        <button
          onClick={() => setActiveTab("all")}
          className={`px-4 py-2 rounded-md transition-all duration-300 ${
            activeTab === "all"
              ? "bg-indigo-500 text-white shadow-md"
              : "bg-white text-gray-700 hover:bg-gray-50"
          }`}
        >
          All
        </button>
        <button
          onClick={() => setActiveTab("mentions")}
          className={`px-4 py-2 rounded-md transition-all duration-300 ${
            activeTab === "mentions"
              ? "bg-indigo-500 text-white shadow-md"
              : "bg-white text-gray-700 hover:bg-gray-50"
          }`}
        >
          Mentions
        </button>
        <button
          onClick={() => setActiveTab("comments")}
          className={`px-4 py-2 rounded-md transition-all duration-300 ${
            activeTab === "comments"
              ? "bg-indigo-500 text-white shadow-md"
              : "bg-white text-gray-700 hover:bg-gray-50"
          }`}
        >
          Comments
        </button>
        <button
          onClick={() => setActiveTab("likes")}
          className={`px-4 py-2 rounded-md transition-all duration-300 ${
            activeTab === "likes"
              ? "bg-indigo-500 text-white shadow-md"
              : "bg-white text-gray-700 hover:bg-gray-50"
          }`}
        >
          Likes
        </button>
        <button
          onClick={() => setActiveTab("shares")}
          className={`px-4 py-2 rounded-md transition-all duration-300 ${
            activeTab === "shares"
              ? "bg-indigo-500 text-white shadow-md"
              : "bg-white text-gray-700 hover:bg-gray-50"
          }`}
        >
          Shares
        </button>
      </div>

      {/* Notifications List */}
      <div className="bg-white rounded-lg p-6 border-4 border-indigo-500/20 hover:border-indigo-500/40 transition-all duration-300 shadow-[0_0_20px_rgba(99,102,241,0.1)] hover:shadow-[0_0_30px_rgba(99,102,241,0.2)]">
        {notifications[activeTab as keyof typeof notifications].map(
          (notification) => (
            <div
              key={notification.id}
              onClick={() => handleNotificationClick(notification)}
              className={`flex items-start p-4 border-b border-gray-100 last:border-0 cursor-pointer transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg hover:z-10 ${
                !notification.read ? "bg-indigo-50/50" : ""
              }`}
            >
              <div className="flex-shrink-0 mr-4 relative">
                <img
                  src={notification.profileImage}
                  alt={notification.user}
                  className="w-12 h-12 rounded-full object-cover border-2 border-indigo-500/20"
                />
                <div className="absolute -bottom-1 -right-1 bg-white rounded-full p-1">
                  {getIcon(notification.type)}
                </div>
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium text-gray-900">
                    {notification.user}
                  </p>
                  <span className="text-xs text-gray-500">
                    {notification.time}
                  </span>
                </div>
                <p className="text-sm text-gray-600 mt-1">
                  {notification.content}
                </p>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Notifications;
