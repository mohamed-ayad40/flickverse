import React, { useState } from "react"; // Added ReactNode import
import { Outlet } from "react-router-dom";
import {
  FaHome,
  FaCompass,
  FaBell,
  FaEnvelope,
  FaUser,
  FaSearch,
  FaPlus,
  FaCheck,
  FaFilm,
  FaTheaterMasks,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

// Define interfaces for your data structures



const trendingMovies = [
  {
    id: 1,
    title: "Dune: Part Two",
    rating: "9.2",
    platform: "IMDb",
    image: "https://picsum.photos/200/300?random=22",
  },
  {
    id: 2,
    title: "Poor Things",
    rating: "8.8",
    platform: "IMDb",
    image: "https://picsum.photos/200/300?random=23",
  },
  {
    id: 3,
    title: "Killers of the Flower Moon",
    rating: "8.7",
    platform: "IMDb",
    image: "https://picsum.photos/200/300?random=24",
  },
  {
    id: 4,
    title: "Oppenheimer",
    rating: "9.0",
    platform: "IMDb",
    image: "https://picsum.photos/200/300?random=25",
  },
  {
    id: 5,
    title: "The Holdovers",
    rating: "8.6",
    platform: "IMDb",
    image: "https://picsum.photos/200/300?random=26",
  },
  {
    id: 6,
    title: "Barbie",
    rating: "8.3",
    platform: "IMDb",
    image: "https://picsum.photos/200/300?random=27",
  },
  {
    id: 7,
    title: "Past Lives",
    rating: "8.4",
    platform: "IMDb",
    image: "https://picsum.photos/200/300?random=28",
  },
  {
    id: 8,
    title: "Anatomy of a Fall",
    rating: "8.5",
    platform: "IMDb",
    image: "https://picsum.photos/200/300?random=29",
  },
];

const trendingSeries = [
  {
    id: 1,
    title: "Shōgun",
    rating: "9.1",
    platform: "IMDb",
    image: "https://picsum.photos/200/300?random=30",
  },
  {
    id: 2,
    title: "True Detective: Night Country",
    rating: "8.9",
    platform: "IMDb",
    image: "https://picsum.photos/200/300?random=31",
  },
  {
    id: 3,
    title: "The Last of Us",
    rating: "8.8",
    platform: "IMDb",
    image: "https://picsum.photos/200/300?random=32",
  },
  {
    id: 4,
    title: "House of the Dragon",
    rating: "8.7",
    platform: "IMDb",
    image: "https://picsum.photos/200/300?random=33",
  },
  {
    id: 5,
    title: "The Bear",
    rating: "8.9",
    platform: "IMDb",
    image: "https://picsum.photos/200/300?random=34",
  },
  {
    id: 6,
    title: "Succession",
    rating: "9.0",
    platform: "IMDb",
    image: "https://picsum.photos/200/300?random=35",
  },
  {
    id: 7,
    title: "The Crown",
    rating: "8.7",
    platform: "IMDb",
    image: "https://picsum.photos/200/300?random=36",
  },
  {
    id: 8,
    title: "Breaking Bad",
    rating: "9.5",
    platform: "IMDb",
    image: "https://picsum.photos/200/300?random=37",
  },
];

const suggestedUsers = [
  {
    id: 1,
    name: "Christopher Nolan",
    username: "nolan",
    avatar: "https://api.dicebear.com/7.x/avataaars/png?seed=nolan",
    role: "Director",
    followers: "2.5M",
    icon: <FaFilm className="text-indigo-500" />,
  },
  {
    id: 2,
    name: "Emma Stone",
    username: "emma",
    avatar: "https://api.dicebear.com/7.x/avataaars/png?seed=emma",
    role: "Actress",
    followers: "5.2M",
    icon: <FaTheaterMasks className="text-pink-500" />,
  },
  {
    id: 3,
    name: "Denis Villeneuve",
    username: "villeneuve",
    avatar: "https://api.dicebear.com/7.x/avataaars/png?seed=villeneuve",
    role: "Director",
    followers: "1.8M",
    icon: <FaFilm className="text-indigo-500" />,
  },
  {
    id: 4,
    name: "Tom Hanks",
    username: "tomhanks",
    avatar: "https://api.dicebear.com/7.x/avataaars/png?seed=tomhanks",
    role: "Actor",
    followers: "8.7M",
    icon: <FaTheaterMasks className="text-blue-500" />,
  },
  {
    id: 5,
    name: "Quentin Tarantino",
    username: "tarantino",
    avatar: "https://api.dicebear.com/7.x/avataaars/png?seed=tarantino",
    role: "Director",
    followers: "3.1M",
    icon: <FaFilm className="text-red-500" />,
  },
  {
    id: 6,
    name: "Meryl Streep",
    username: "meryl",
    avatar: "https://api.dicebear.com/7.x/avataaars/png?seed=meryl",
    role: "Actress",
    followers: "4.9M",
    icon: <FaTheaterMasks className="text-purple-500" />,
  },
  {
    id: 7,
    name: "Steven Spielberg",
    username: "spielberg",
    avatar: "https://api.dicebear.com/7.x/avataaars/png?seed=spielberg",
    role: "Director",
    followers: "6.3M",
    icon: <FaFilm className="text-yellow-500" />,
  },
  {
    id: 8,
    name: "Cate Blanchett",
    username: "cate",
    avatar: "https://api.dicebear.com/7.x/avataaars/png?seed=cate",
    role: "Actress",
    followers: "3.8M",
    icon: <FaTheaterMasks className="text-teal-500" />,
  },
  {
    id: 9,
    name: "Martin Scorsese",
    username: "scorsese",
    avatar: "https://api.dicebear.com/7.x/avataaars/png?seed=scorsese",
    role: "Director",
    followers: "5.5M",
    icon: <FaFilm className="text-orange-500" />,
  },
  {
    id: 10,
    name: "Leonardo DiCaprio",
    username: "leo",
    avatar: "https://api.dicebear.com/7.x/avataaars/png?seed=leo",
    role: "Actor",
    followers: "7.2M",
    icon: <FaTheaterMasks className="text-green-500" />,
  },
];

const Layout: React.FC = () => {
  const [following, setFollowing] = useState<string[]>([]);
  const [showAllUsers, setShowAllUsers] = useState(false);
  const [showAllMovies, setShowAllMovies] = useState(false);
  const [showAllSeries, setShowAllSeries] = useState(false);

  const handleFollow = (username: string) => {
    setFollowing((prev) =>
      prev.includes(username)
        ? prev.filter((id) => id !== username)
        : [...prev, username]
    );
  };

  const displayedUsers = showAllUsers
    ? suggestedUsers
    : suggestedUsers.slice(0, 3);
  const displayedMovies = showAllMovies
    ? trendingMovies
    : trendingMovies.slice(0, 3);
  const displayedSeries = showAllSeries
    ? trendingSeries
    : trendingSeries.slice(0, 3);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex">
        {/* Left Sidebar */}
        <div className="w-64 bg-gradient-to-b from-indigo-900 to-blue-900 p-4 fixed left-0 top-0 h-screen flex flex-col">
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-white mb-2 font-poppins">
              FlickVerse
            </h1>
            <p className="text-indigo-200 text-sm font-inter">
              Your movie & series community
            </p>
          </div>

          {/* Profile Card */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 mb-6 border border-white/20 shadow-lg">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <img
                  src="https://api.dicebear.com/7.x/avataaars/png?seed=user"
                  alt="User avatar"
                  className="w-12 h-12 rounded-full border-2 border-white/30"
                />
                <div className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 rounded-full border-2 border-white/30"></div>
              </div>
              <div>
                <h3 className="font-semibold text-white font-poppins">
                  John Doe
                </h3>
                <p className="text-sm text-indigo-200 font-inter">
                  @movielover
                </p>
              </div>
            </div>
            <div className="mt-3 flex justify-between text-sm text-indigo-200">
              <div className="text-center">
                <span className="block font-semibold text-white">128</span>
                <span>Posts</span>
              </div>
              <div className="text-center">
                <span className="block font-semibold text-white">1.2k</span>
                <span>Followers</span>
              </div>
              <div className="text-center">
                <span className="block font-semibold text-white">856</span>
                <span>Following</span>
              </div>
            </div>
          </div>

          <nav className="flex-1">
            <ul className="space-y-2">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `flex items-center space-x-3 p-3 rounded-lg transition-all duration-300 font-inter ${
                      isActive
                        ? "bg-indigo-700 text-white shadow-lg"
                        : "text-indigo-200 hover:bg-indigo-800 hover:text-white"
                    }`
                  }
                >
                  <FaHome className="text-xl" />
                  <span>Home</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/explore"
                  className={({ isActive }) =>
                    `flex items-center space-x-3 p-3 rounded-lg transition-all duration-300 font-inter ${
                      isActive
                        ? "bg-indigo-700 text-white shadow-lg"
                        : "text-indigo-200 hover:bg-indigo-800 hover:text-white"
                    }`
                  }
                >
                  <FaCompass className="text-xl" />
                  <span>Explore</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/notifications"
                  className={({ isActive }) =>
                    `flex items-center space-x-3 p-3 rounded-lg transition-all duration-300 font-inter ${
                      isActive
                        ? "bg-indigo-700 text-white shadow-lg"
                        : "text-indigo-200 hover:bg-indigo-800 hover:text-white"
                    }`
                  }
                >
                  <FaBell className="text-xl" />
                  <span>Notifications</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/messages"
                  className={({ isActive }) =>
                    `flex items-center space-x-3 p-3 rounded-lg transition-all duration-300 font-inter ${
                      isActive
                        ? "bg-indigo-700 text-white shadow-lg"
                        : "text-indigo-200 hover:bg-indigo-800 hover:text-white"
                    }`
                  }
                >
                  <FaEnvelope className="text-xl" />
                  <span>Messages</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/profile"
                  className={({ isActive }) =>
                    `flex items-center space-x-3 p-3 rounded-lg transition-all duration-300 font-inter ${
                      isActive
                        ? "bg-indigo-700 text-white shadow-lg"
                        : "text-indigo-200 hover:bg-indigo-800 hover:text-white"
                    }`
                  }
                >
                  <FaUser className="text-xl" />
                  <span>Profile</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/settings"
                  className={({ isActive }) =>
                    `flex items-center space-x-3 p-3 rounded-lg transition-all duration-300 font-inter ${
                      isActive
                        ? "bg-indigo-700 text-white shadow-lg"
                        : "text-indigo-200 hover:bg-indigo-800 hover:text-white"
                    }`
                  }
                >
                  <FaUser className="text-xl" />
                  <span>Settings</span>
                </NavLink>
              </li>
            </ul>
          </nav>

          {/* Create Post Button */}
          <div className="mt-auto">
            <button className="w-full bg-gradient-to-r from-purple-500 to-indigo-600 text-white py-3 px-4 rounded-xl font-medium hover:from-purple-600 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105 relative overflow-hidden group font-poppins border-2 border-black shadow-[5px_6px_0px_black] hover:shadow-[3px_4px_0px_black] active:shadow-[1px_2px_0px_black] active:translate-y-1">
              {/* Shimmer effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />

              {/* Content */}
              <div className="relative flex items-center justify-center space-x-2">
                <FaPlus className="text-lg transform group-hover:rotate-90 transition-transform duration-300" />
                <span>Create Post</span>
              </div>

              {/* Glow effect */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500/20 to-indigo-600/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 ml-64 mr-80 p-6">
          <div className="mx-auto">
            <Outlet />
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="w-80 bg-white shadow-lg p-4 overflow-y-auto fixed right-0 top-0 h-screen">
          {/* Search Bar */}
          <div className="mb-6">
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="w-full pl-10 pr-4 py-2 rounded-full bg-[#cadfff7d] border border-gray-200 focus:outline-none focus:border-indigo-300 focus:ring-1 focus:ring-indigo-300 transition-all duration-300 font-inter"
              />
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
          </div>

          {/* Trending Movies */}
          <div className="mb-4">
            <h2 className="text-lg font-semibold mb-3 text-indigo-600 font-poppins">
              Trending Movies
            </h2>
            <div className="space-y-3">
              {displayedMovies.map((movie, index) => (
                <div
                  key={index}
                  className="bg-white p-2 rounded-xl hover:shadow-md transition-all duration-300 cursor-pointer border border-gray-100"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-lg overflow-hidden flex-shrink-0">
                      <img
                        src={movie.image}
                        alt={movie.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="font-semibold text-sm text-indigo-800 truncate">
                        {movie.title}
                      </h3>
                      <p className="text-xs text-gray-600">
                        {movie.rating} • {movie.platform}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
              {!showAllMovies && (
                <button
                  onClick={() => setShowAllMovies(true)}
                  className="w-full py-2 text-sm font-medium text-indigo-600 hover:text-indigo-800 transition-colors duration-200 flex items-center justify-center space-x-2 bg-white border border-gray-100 rounded-xl hover:shadow-md"
                >
                  <span>Show More</span>
                  <FaPlus className="text-xs" />
                </button>
              )}
            </div>
          </div>

          {/* Trending Series */}
          <div className="mb-4">
            <h2 className="text-lg font-semibold mb-3 text-blue-600 font-poppins">
              Trending Series
            </h2>
            <div className="space-y-3">
              {displayedSeries.map((series, index) => (
                <div
                  key={index}
                  className="bg-white p-2 rounded-xl hover:shadow-md transition-all duration-300 cursor-pointer border border-gray-100"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-lg overflow-hidden flex-shrink-0">
                      <img
                        src={series.image}
                        alt={series.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="font-semibold text-sm text-blue-800 truncate">
                        {series.title}
                      </h3>
                      <p className="text-xs text-gray-600">
                        {series.rating} • {series.platform}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
              {!showAllSeries && (
                <button
                  onClick={() => setShowAllSeries(true)}
                  className="w-full py-2 text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors duration-200 flex items-center justify-center space-x-2 bg-white border border-gray-100 rounded-xl hover:shadow-md"
                >
                  <span>Show More</span>
                  <FaPlus className="text-xs" />
                </button>
              )}
            </div>
          </div>

          {/* Who to Follow */}
          <div>
            <h2 className="text-lg font-semibold mb-3 text-indigo-600 font-poppins">
              Who to Follow
            </h2>
            <div className="space-y-3">
              {displayedUsers.map((user, index) => (
                <div
                  key={index}
                  className={`p-2 rounded-xl transition-all duration-300 cursor-pointer font-inter ${
                    following.includes(user.username)
                      ? "bg-gradient-to-r from-green-50 to-teal-50"
                      : "bg-gradient-to-r from-indigo-50 to-blue-50"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3 flex-1 min-w-0">
                      <div className="relative flex-shrink-0">
                        <img
                          src={user.avatar}
                          alt={user.name}
                          className="w-8 h-8 rounded-full border-2 border-indigo-200"
                        />
                        {following.includes(user.username) && (
                          <div className="absolute -bottom-1 -right-1 bg-green-500 text-white rounded-full p-0.5">
                            <FaCheck className="text-xs" />
                          </div>
                        )}
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center space-x-2">
                          <h3 className="font-semibold text-sm text-indigo-800 truncate">
                            {user.name}
                          </h3>
                          <span className="text-xs">{user.icon}</span>
                        </div>
                        <p className="text-xs text-gray-600 truncate">
                          {user.role}
                        </p>
                      </div>
                    </div>
                    <button
                      onClick={() => handleFollow(user.username)}
                      className={`ml-2 px-2 py-1 rounded-full text-xs font-medium transition-all duration-300 ${
                        following.includes(user.username)
                          ? "bg-green-100 text-green-700 hover:bg-green-200"
                          : "bg-indigo-100 text-indigo-700 hover:bg-indigo-200"
                      }`}
                    >
                      {following.includes(user.username) ? (
                        <span className="flex items-center">
                          <FaCheck className="mr-1" />
                          Following
                        </span>
                      ) : (
                        <span className="flex items-center">
                          <FaPlus className="mr-1" />
                          Follow
                        </span>
                      )}
                    </button>
                  </div>
                </div>
              ))}
              {!showAllUsers && (
                <button
                  onClick={() => setShowAllUsers(true)}
                  className="w-full py-2 text-sm font-medium text-indigo-600 hover:text-indigo-800 transition-colors duration-200 flex items-center justify-center space-x-2 bg-white border border-gray-100 rounded-xl hover:shadow-md"
                >
                  <span>Show More</span>
                  <FaPlus className="text-xs" />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
