import React, { useState } from "react";
import {
  FaUser,
  FaEdit,
  FaStar,
  FaHeart,
  FaComment,
  FaShare,
  FaBookmark,
  FaCog,
  FaFilm,
  FaTv,
  FaCalendarAlt,
} from "react-icons/fa";

const Profile: React.FC = () => {
  const [activeTab, setActiveTab] = useState("posts");

  const userStats = {
    posts: 128,
    followers: 1200,
    following: 856,
    watchlist: 45,
  };

  const recentActivity = [
    {
      id: 1,
      type: "review",
      title: "Dune: Part Two",
      rating: 5,
      content:
        "Absolutely breathtaking! The visuals and storytelling are on another level.",
      timestamp: "2 hours ago",
      likes: 45,
      comments: 12,
      image: "https://picsum.photos/200/300?random=22",
    },
    {
      id: 2,
      type: "watchlist",
      title: "Shōgun",
      action: "added to watchlist",
      timestamp: "5 hours ago",
      image: "https://picsum.photos/200/300?random=30",
    },
    {
      id: 3,
      type: "review",
      title: "Poor Things",
      rating: 4,
      content:
        "Emma Stone delivers an incredible performance in this unique film.",
      timestamp: "1 day ago",
      likes: 32,
      comments: 8,
      image: "https://picsum.photos/200/300?random=23",
    },
  ];

  return (
    <div className="max-w-xl mx-auto">
      {/* Profile Header */}
      <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-xl shadow-lg p-6 mb-6 border border-indigo-100">
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-4">
            <div className="relative group">
              <img
                src="https://api.dicebear.com/7.x/avataaars/png?seed=user"
                alt="Profile"
                className="w-24 h-24 rounded-full border-4 border-indigo-200 transition-transform duration-300 group-hover:scale-105 object-cover"
              />
              <div className="absolute bottom-0 right-0 w-6 h-6 bg-green-500 rounded-full border-2 border-white flex items-center justify-center shadow-md">
                <FaUser className="text-white text-xs" />
              </div>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-indigo-900 font-poppins">
                John Doe
              </h1>
              <p className="text-gray-600">@movielover</p>
              <p className="text-sm text-gray-500 mt-1">
                Movie enthusiast | Series addict | Always looking for the next
                great story
              </p>
              <div className="flex items-center space-x-2 mt-2">
                <span className="text-xs bg-indigo-100 text-indigo-700 px-2 py-1 rounded-full">
                  <FaFilm className="inline mr-1" />
                  Director
                </span>
                <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">
                  <FaTv className="inline mr-1" />
                  Critic
                </span>
              </div>
            </div>
          </div>
          <button className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white px-4 py-2 rounded-lg transition-all duration-300 flex items-center space-x-2 shadow-lg hover:shadow-xl relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-blue-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
            <FaEdit className="text-sm relative z-10" />
            <span className="relative z-10 font-medium">Edit Profile</span>
            <div className="absolute right-0 top-0 h-full w-12 bg-gradient-to-l from-white/20 to-transparent transform translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-4 gap-4 mt-6">
          {Object.entries(userStats).map(([key, value]) => (
            <div
              key={key}
              className="text-center bg-white p-3 rounded-lg shadow-sm hover:shadow-md transition-all duration-200"
            >
              <div className="text-2xl font-bold text-indigo-900">{value}</div>
              <div className="text-sm text-gray-600 capitalize">{key}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white rounded-xl shadow-lg p-4 mb-6 border border-gray-100">
        <div className="flex space-x-4 border-b border-gray-200 pb-2">
          {["posts", "watchlist", "reviews", "liked"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-lg transition-all duration-300 flex items-center space-x-2 relative overflow-hidden group ${
                activeTab === tab
                  ? "bg-gradient-to-r from-indigo-500 to-blue-500 text-white shadow-lg"
                  : "bg-white text-gray-600 hover:bg-gray-50 border border-gray-200"
              }`}
            >
              {tab === "posts" && <FaFilm className="text-sm" />}
              {tab === "watchlist" && <FaBookmark className="text-sm" />}
              {tab === "reviews" && <FaStar className="text-sm" />}
              {tab === "liked" && <FaHeart className="text-sm" />}
              <span className="capitalize font-medium">
                {tab === "liked" ? "Liked Posts" : tab}
              </span>
              {activeTab === tab && (
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-blue-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
              )}
            </button>
          ))}
        </div>

        {/* Activity Feed */}
        <div className="mt-4 space-y-4">
          {recentActivity.map((activity) => (
            <div
              key={activity.id}
              className="bg-white p-4 rounded-xl border border-gray-100 hover:shadow-md transition-all duration-300 group"
            >
              {activity.type === "review" ? (
                <>
                  <div className="flex items-start space-x-4">
                    <div className="w-20 h-28 rounded-lg overflow-hidden flex-shrink-0">
                      <img
                        src={activity.image}
                        alt={activity.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h3 className="font-semibold text-indigo-900">
                          {activity.title}
                        </h3>
                        <div className="flex items-center space-x-1 text-yellow-500">
                          {[...Array(activity.rating)].map((_, i) => (
                            <FaStar key={i} className="text-sm" />
                          ))}
                        </div>
                      </div>
                      <p className="text-gray-600 mt-2">{activity.content}</p>
                      <div className="flex items-center justify-between mt-4 text-sm text-gray-500">
                        <span className="flex items-center space-x-2">
                          <FaCalendarAlt className="text-indigo-500" />
                          <span>{activity.timestamp}</span>
                        </span>
                        <div className="flex items-center space-x-4">
                          <button className="flex items-center space-x-1 hover:text-indigo-600 transition-colors duration-200 bg-white px-3 py-1.5 rounded-lg border border-gray-200 hover:border-indigo-200 hover:shadow-sm">
                            <FaHeart />
                            <span>{activity.likes}</span>
                          </button>
                          <button className="flex items-center space-x-1 hover:text-indigo-600 transition-colors duration-200 bg-white px-3 py-1.5 rounded-lg border border-gray-200 hover:border-indigo-200 hover:shadow-sm">
                            <FaComment />
                            <span>{activity.comments}</span>
                          </button>
                          <button className="hover:text-indigo-600 transition-colors duration-200 bg-white px-3 py-1.5 rounded-lg border border-gray-200 hover:border-indigo-200 hover:shadow-sm">
                            <FaShare />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <div className="flex items-center space-x-4">
                  <div className="w-20 h-28 rounded-lg overflow-hidden flex-shrink-0">
                    <img
                      src={activity.image}
                      alt={activity.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-indigo-900">
                      {activity.title}
                    </h3>
                    <p className="text-sm text-gray-600">{activity.action}</p>
                    <div className="flex items-center space-x-2 mt-2 text-sm text-gray-500">
                      <FaCalendarAlt className="text-indigo-500" />
                      <span>{activity.timestamp}</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;
