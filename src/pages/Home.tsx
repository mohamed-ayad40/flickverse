import React, { useState, useRef } from "react";
import Post from "../components/Post";
import { FaImage, FaSmile, FaFire, FaTv, FaFilm } from "react-icons/fa";
import EmojiPicker from "emoji-picker-react";

interface PostData {
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
  isStarred: boolean;
  hashtags?: string;
}

const Home: React.FC = () => {
  console.log("Home component rendered");
  const [newPostContent, setNewPostContent] = useState("");
  const [selectedImages, setSelectedImages] = useState<string[]>([]);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const emojiButtonRef = useRef<HTMLButtonElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [activeTab, setActiveTab] = useState<"popular" | "mySeries">("popular");
  const [posts, setPosts] = useState<PostData[]>([
    {
      id: "1",
      author: {
        name: "MovieBuff",
        avatar: "https://api.dicebear.com/7.x/avataaars/png?seed=MovieBuff",
        username: "moviebuff",
      },
      content:
        "Just watched Dune: Part Two and it was absolutely mind-blowing! The visuals, the score, the performances - everything was perfect. Timothée Chalamet and Zendaya were phenomenal!",
      images: ["https://picsum.photos/800/400?random=1"],
      timestamp: "2h ago",
      likes: 245,
      comments: 32,
      shares: 12,
      isLiked: false,
      isBookmarked: false,
      isStarred: false,
      hashtags: " #DunePartTwo #SciFi #MovieReview",
    },
    {
      id: "2",
      author: {
        name: "SeriesEnthusiast",
        avatar:
          "https://api.dicebear.com/7.x/avataaars/png?seed=SeriesEnthusiast",
        username: "seriesenthusiast",
      },
      content:
        "Shōgun is the best historical drama I've seen in years! The attention to detail in the sets and costumes is incredible. Can't wait for the next episode!",
      images: ["https://picsum.photos/800/400?random=2"],
      timestamp: "4h ago",
      likes: 189,
      comments: 28,
      shares: 8,
      isLiked: true,
      isBookmarked: true,
      isStarred: false,
      hashtags: " #Shogun #HistoricalDrama #TVSeries",
    },
    {
      id: "3",
      author: {
        name: "FilmCritic",
        avatar: "https://api.dicebear.com/7.x/avataaars/png?seed=FilmCritic",
        username: "filmcritic",
      },
      content:
        "Poor Things is a masterpiece! Emma Stone's performance is Oscar-worthy. The cinematography and production design are stunning. A must-watch!",
      images: ["https://picsum.photos/800/400?random=3"],
      timestamp: "6h ago",
      likes: 312,
      comments: 45,
      shares: 15,
      isLiked: false,
      isBookmarked: true,
      isStarred: false,
      hashtags: " #PoorThings #EmmaStone #OscarWorthy",
    },
    {
      id: "4",
      author: {
        name: "HorrorFan",
        avatar: "https://api.dicebear.com/7.x/avataaars/png?seed=HorrorFan",
        username: "horrorfan",
      },
      content:
        "The Fall of the House of Usher is the perfect blend of horror and drama. Mike Flanagan has done it again! The atmosphere is so tense and the performances are outstanding.",
      images: ["https://picsum.photos/800/400?random=4"],
      timestamp: "8h ago",
      likes: 178,
      comments: 24,
      shares: 9,
      isLiked: true,
      isBookmarked: false,
      isStarred: false,
      hashtags: " #HouseOfUsher #Horror #MikeFlanagan",
    },
    {
      id: "5",
      author: {
        name: "CinemaLover",
        avatar: "https://api.dicebear.com/7.x/avataaars/png?seed=CinemaLover",
        username: "cinemalover",
      },
      content:
        "Killers of the Flower Moon is a powerful and important film. Leonardo DiCaprio and Robert De Niro deliver incredible performances. The story is both heartbreaking and eye-opening.",
      images: ["https://picsum.photos/800/400?random=5"],
      timestamp: "10h ago",
      likes: 421,
      comments: 56,
      shares: 23,
      isLiked: false,
      isBookmarked: true,
      isStarred: false,
      hashtags: " #KillersOfTheFlowerMoon #Scorsese #TrueStory",
    },
    {
      id: "6",
      author: {
        name: "AnimeFan",
        avatar: "https://api.dicebear.com/7.x/avataaars/png?seed=AnimeFan",
        username: "animefan",
      },
      content:
        "Attack on Titan: The Final Chapters was everything I hoped for and more! The animation, the music, the emotional impact - it's been an incredible journey. Thank you, Hajime Isayama!",
      images: ["https://picsum.photos/800/400?random=6"],
      timestamp: "12h ago",
      likes: 567,
      comments: 89,
      shares: 34,
      isLiked: true,
      isBookmarked: true,
      isStarred: false,
      hashtags: " #AttackOnTitan #Anime #FinalChapters",
    },
    {
      id: "7",
      author: {
        name: "ComicBookFan",
        avatar: "https://api.dicebear.com/7.x/avataaars/png?seed=ComicBookFan",
        username: "comicbookfan",
      },
      content:
        "Deadpool & Wolverine trailer just dropped and it looks amazing! Ryan Reynolds and Hugh Jackman are perfect together. The humor, the action, the cameos - I can't wait!",
      images: ["https://picsum.photos/800/400?random=7"],
      timestamp: "1d ago",
      likes: 789,
      comments: 123,
      shares: 45,
      isLiked: true,
      isBookmarked: false,
      isStarred: false,
      hashtags: " #DeadpoolAndWolverine #Marvel #RyanReynolds",
    },
    {
      id: "8",
      author: {
        name: "MovieGeek",
        avatar: "https://api.dicebear.com/7.x/avataaars/png?seed=MovieGeek",
        username: "moviegeek",
      },
      content:
        "The Zone of Interest is a haunting masterpiece. The way it explores the banality of evil is both chilling and thought-provoking. A must-watch for serious film lovers!",
      images: ["https://picsum.photos/800/400?random=8"],
      timestamp: "3h ago",
      likes: 198,
      comments: 27,
      shares: 9,
      isLiked: false,
      isBookmarked: true,
      isStarred: false,
      hashtags: " #ZoneOfInterest #Drama #FilmMasterpiece",
    },
    {
      id: "9",
      author: {
        name: "TVJunkie",
        avatar: "https://api.dicebear.com/7.x/avataaars/png?seed=TVJunkie",
        username: "tvjunkie",
      },
      content:
        "True Detective: Night Country is absolutely gripping! Jodie Foster's performance is incredible, and the Alaskan setting adds such a unique atmosphere to the story.",
      images: ["https://picsum.photos/800/400?random=9"],
      timestamp: "5h ago",
      likes: 312,
      comments: 45,
      shares: 18,
      isLiked: true,
      isBookmarked: false,
      isStarred: false,
      hashtags: " #TrueDetective #JodieFoster #CrimeDrama",
    },
    {
      id: "10",
      author: {
        name: "FilmBuff",
        avatar: "https://api.dicebear.com/7.x/avataaars/png?seed=FilmBuff",
        username: "filmbuff",
      },
      content:
        "The Holdovers is such a heartwarming film! Paul Giamatti delivers another outstanding performance. The chemistry between the characters is perfect.",
      images: ["https://picsum.photos/800/400?random=10"],
      timestamp: "7h ago",
      likes: 245,
      comments: 32,
      shares: 12,
      isLiked: false,
      isBookmarked: true,
      isStarred: false,
      hashtags: " #TheHoldovers #PaulGiamatti #Drama",
    },
    {
      id: "11",
      author: {
        name: "SeriesAddict",
        avatar: "https://api.dicebear.com/7.x/avataaars/png?seed=SeriesAddict",
        username: "seriesaddict",
      },
      content:
        "Masters of the Air is an incredible war drama! The aerial combat scenes are breathtaking, and the character development is superb. A worthy successor to Band of Brothers!",
      images: ["https://picsum.photos/800/400?random=11"],
      timestamp: "9h ago",
      likes: 423,
      comments: 58,
      shares: 24,
      isLiked: true,
      isBookmarked: true,
      isStarred: false,
      hashtags: " #MastersOfTheAir #WarDrama #AppleTV",
    },
    {
      id: "12",
      author: {
        name: "CinemaCritic",
        avatar: "https://api.dicebear.com/7.x/avataaars/png?seed=CinemaCritic",
        username: "cinemacritic",
      },
      content:
        "American Fiction is a brilliant satire! The way it tackles race and identity in the publishing industry is both hilarious and thought-provoking. Jeffrey Wright is phenomenal!",
      images: ["https://picsum.photos/800/400?random=12"],
      timestamp: "11h ago",
      likes: 287,
      comments: 39,
      shares: 15,
      isLiked: false,
      isBookmarked: true,
      isStarred: false,
      hashtags: " #AmericanFiction #Satire #JeffreyWright",
    },
    {
      id: "13",
      author: {
        name: "AnimeExpert",
        avatar: "https://api.dicebear.com/7.x/avataaars/png?seed=AnimeExpert",
        username: "animeexpert",
      },
      content:
        "Jujutsu Kaisen Season 2 was absolutely incredible! The animation quality, the character development, and the emotional moments were all perfect. Can't wait for the next season!",
      images: ["https://picsum.photos/800/400?random=13"],
      timestamp: "13h ago",
      likes: 678,
      comments: 92,
      shares: 37,
      isLiked: true,
      isBookmarked: false,
      isStarred: false,
      hashtags: " #JujutsuKaisen #Anime #Season2",
    },
    {
      id: "14",
      author: {
        name: "ComicFanatic",
        avatar: "https://api.dicebear.com/7.x/avataaars/png?seed=ComicFanatic",
        username: "comicfanatic",
      },
      content:
        "The Marvels was such a fun ride! The chemistry between the three leads was amazing, and the action sequences were top-notch. A great addition to the MCU!",
      images: ["https://picsum.photos/800/400?random=14"],
      timestamp: "1d ago",
      likes: 345,
      comments: 47,
      shares: 19,
      isLiked: true,
      isBookmarked: true,
      isStarred: false,
      hashtags: " #TheMarvels #MCU #Superhero",
    },
    {
      id: "15",
      author: {
        name: "FilmEnthusiast",
        avatar:
          "https://api.dicebear.com/7.x/avataaars/png?seed=FilmEnthusiast",
        username: "filmenthusiast",
      },
      content:
        "Anatomy of a Fall is a masterclass in courtroom drama! The way it explores truth and perspective is fascinating. Sandra Hüller's performance is absolutely mesmerizing!",
      images: ["https://picsum.photos/800/400?random=15"],
      timestamp: "4h ago",
      likes: 234,
      comments: 31,
      shares: 11,
      isLiked: false,
      isBookmarked: true,
      isStarred: false,
      hashtags: " #AnatomyOfAFall #CourtroomDrama #SandraHüller",
    },
    {
      id: "16",
      author: {
        name: "TVCritic",
        avatar: "https://api.dicebear.com/7.x/avataaars/png?seed=TVCritic",
        username: "tvcritic",
      },
      content:
        "The Last of Us Season 2 is going to be incredible! The casting for Abby is perfect, and I can't wait to see how they adapt the second game's story. The first season set such a high bar!",
      images: ["https://picsum.photos/800/400?random=16"],
      timestamp: "6h ago",
      likes: 456,
      comments: 62,
      shares: 25,
      isLiked: true,
      isBookmarked: false,
      isStarred: false,
      hashtags: " #TheLastOfUs #HBO #GamingAdaptation",
    },
    {
      id: "17",
      author: {
        name: "MovieMaven",
        avatar: "https://api.dicebear.com/7.x/avataaars/png?seed=MovieMaven",
        username: "moviemaven",
      },
      content:
        "The Iron Claw is such a powerful film! The way it portrays the Von Erich family's story is both heartbreaking and inspiring. Zac Efron's transformation is incredible!",
      images: ["https://picsum.photos/800/400?random=17"],
      timestamp: "8h ago",
      likes: 321,
      comments: 43,
      shares: 16,
      isLiked: false,
      isBookmarked: true,
      isStarred: false,
      hashtags: " #TheIronClaw #WrestlingDrama #ZacEfron",
    },
    {
      id: "18",
      author: {
        name: "SeriesExpert",
        avatar: "https://api.dicebear.com/7.x/avataaars/png?seed=SeriesExpert",
        username: "seriesexpert",
      },
      content:
        "The Bear Season 3 is going to be amazing! The way they've developed these characters and their relationships is masterful. The kitchen scenes are so intense and realistic!",
      images: ["https://picsum.photos/800/400?random=18"],
      timestamp: "10h ago",
      likes: 389,
      comments: 51,
      shares: 21,
      isLiked: true,
      isBookmarked: true,
      isStarred: false,
      hashtags: " #TheBear #FX #Drama",
    },
    {
      id: "19",
      author: {
        name: "CinemaScholar",
        avatar: "https://api.dicebear.com/7.x/avataaars/png?seed=CinemaScholar",
        username: "cinemascholar",
      },
      content:
        "Past Lives is such a beautiful film! The way it explores love, destiny, and cultural identity is so moving. The performances are subtle yet powerful. A true gem!",
      images: ["https://picsum.photos/800/400?random=19"],
      timestamp: "12h ago",
      likes: 278,
      comments: 36,
      shares: 14,
      isLiked: false,
      isBookmarked: true,
      isStarred: false,
      hashtags: " #PastLives #Romance #Drama",
    },
    {
      id: "20",
      author: {
        name: "AnimeMaster",
        avatar: "https://api.dicebear.com/7.x/avataaars/png?seed=AnimeMaster",
        username: "animemaster",
      },
      content:
        "Demon Slayer: Hashira Training Arc is going to be epic! The animation quality is always top-notch, and the character development in this arc is crucial. Can't wait!",
      images: ["https://picsum.photos/800/400?random=20"],
      timestamp: "14h ago",
      likes: 512,
      comments: 68,
      shares: 29,
      isLiked: true,
      isBookmarked: false,
      isStarred: false,
      hashtags: " #DemonSlayer #Anime #HashiraTraining",
    },
    {
      id: "21",
      author: {
        name: "ComicConnoisseur",
        avatar:
          "https://api.dicebear.com/7.x/avataaars/png?seed=ComicConnoisseur",
        username: "comicconnoisseur",
      },
      content:
        "Madame Web looks promising! The cast is great, and I'm excited to see how they expand the Spider-Man universe. The trailers have been intriguing!",
      images: ["https://picsum.photos/800/400?random=21"],
      timestamp: "1d ago",
      likes: 298,
      comments: 41,
      shares: 17,
      isLiked: true,
      isBookmarked: true,
      isStarred: false,
      hashtags: " #MadameWeb #SpiderMan #Superhero",
    },
  ]);

  const mySeriesPosts = posts.filter((post) =>
    ["seriesenthusiast", "tvjunkie", "seriesaddict", "seriesexpert"].includes(
      post.author.username
    )
  );

  const handleImageSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const files = Array.from(e.target.files);
      const imageUrls = files.map((file) => URL.createObjectURL(file));
      setSelectedImages([...selectedImages, ...imageUrls]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("New post:", {
      content: newPostContent,
      images: selectedImages,
    });
    setNewPostContent("");
    setSelectedImages([]);
  };

  const onEmojiClick = (emojiObject: { emoji: string }) => {
    const textarea = textareaRef.current;
    if (!textarea) return;

    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const text = newPostContent;


    const newText =
      text.substring(0, start) + emojiObject.emoji + text.substring(end);
    setNewPostContent(newText);


    const newCursorPosition = start + emojiObject.emoji.length;

    requestAnimationFrame(() => {
      textarea.focus();
      textarea.setSelectionRange(newCursorPosition, newCursorPosition);
    });

    setShowEmojiPicker(false);
  };

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        emojiButtonRef.current &&
        !emojiButtonRef.current.contains(event.target as Node)
      ) {
        setShowEmojiPicker(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleLike = (postId: string) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.id === postId
          ? {
              ...post,
              isLiked: !post.isLiked,
              likes: post.isLiked ? post.likes - 1 : post.likes + 1,
            }
          : post
      )
    );
  };


  const handleShare = (postId: string) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.id === postId ? { ...post, shares: post.shares + 1 } : post
      )
    );
  };

  const handleBookmark = (postId: string) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.id === postId
          ? { ...post, isBookmarked: !post.isBookmarked }
          : post
      )
    );
  };

  const handleStar = (postId: string) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.id === postId ? { ...post, isStarred: !post.isStarred } : post
      )
    );
  };


  interface Carousel {
    name: string,
    urlImage: string
  }


  const carouselMovies: Carousel[] = [
    {
      name: "Dune: Part Two",
      urlImage: "https://upload.wikimedia.org/wikipedia/en/5/52/Dune_Part_Two_poster.jpeg"
    },
    {
      name: "Oppenheimer",
      urlImage: "https://upload.wikimedia.org/wikipedia/ar/d/d9/%D8%A3%D9%88%D8%A8%D9%86%D9%87%D8%A7%D9%8A%D9%85%D8%B1%28%D9%81%D9%8A%D9%84%D9%85%29.jpg"
    },
    {
      name: "The Last of Us",
      urlImage: "https://upload.wikimedia.org/wikipedia/ar/b/bb/%D9%85%D9%84%D8%B5%D9%82_%D9%85%D8%B3%D9%84%D8%B3%D9%84_%D8%B0%D8%A7_%D9%84%D8%A7%D8%B3%D8%AA_%D8%A3%D9%88%D9%81_%D8%A3%D8%B3.jpeg"
    },
    {
      name: "Succession",
      urlImage: "https://m.media-amazon.com/images/I/51Z7c8T4OtL._SX300_SY300_QL70_FMwebp_.jpg"
    },
    {
      name: "Interstellar",
      urlImage: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg"
    },
    {
      name: "Avengers: End Game",
      urlImage: "https://upload.wikimedia.org/wikipedia/en/0/0d/Avengers_Endgame_poster.jpg"
    },

  ]

  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-gray-900 to-indigo-900 overflow-hidden mb-8">
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/70 to-gray-900/0"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center">
            {/* Logo with cinematic flair */}
            <div className="mb-6 flex items-center justify-center">
              <div className="relative">
                <FaFilm className="text-indigo-400 text-5xl mr-3" />
                <span className="absolute -bottom-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full"></span>
              </div>
              <h1 className="text-4xl font-bold text-white">
                <span className="text-indigo-300">Flick</span>
                <span className="text-yellow-400">Verse</span>
              </h1>
            </div>
            
            <p className="mt-2 text-xl text-indigo-100 max-w-2xl">
              Your ultimate community for movie buffs and series enthusiasts
            </p>
            
            <div className="mt-8 flex space-x-4 overflow-x-auto pb-4 w-full max-w-2xl scrollbar-hide">
              {carouselMovies.map(({ name, urlImage }, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 cursor-pointer relative group overflow-hidden transition-transform duration-500 hover:scale-105"
                >
                  <div className="w-24 h-32 bg-gray-800 rounded-lg overflow-hidden shadow-lg group-hover:shadow-yellow-400/50 transition-all duration-500 ease-out relative">
                    <img
                      src={urlImage}
                      alt={name}
                      className="w-full h-full object-cover scale-100 group-hover:scale-110 transition-transform duration-500 ease-out"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10"></div>

                    <div className="absolute bottom-2 left-2 right-2 z-20">
                      <p className="text-xs font-semibold text-white truncate">{name}</p>
                    </div>

                    <div className="absolute inset-0 border-2 border-transparent group-hover:border-yellow-400 rounded-lg transition-all duration-500 animate-glow pointer-events-none"></div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-6 flex space-x-6">
              <div className="text-center">
                <p className="text-2xl font-bold text-yellow-400">10K+</p>
                <p className="text-sm text-indigo-200">Movie Discussions</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-yellow-400">5K+</p>
                <p className="text-sm text-indigo-200">Series Fans</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-yellow-400">1M+</p>
                <p className="text-sm text-indigo-200">Reviews</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Create Post Form */}
      <div className="bg-white rounded-lg shadow-md p-4 mb-6 max-w-xl mx-auto">
        <form onSubmit={handleSubmit}>
          <div className="flex items-start space-x-3 mb-4">
            <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-indigo-200">
              <img
                src="https://api.dicebear.com/7.x/avataaars/png?seed=user"
                alt="Your avatar"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1 relative">
              <textarea
                ref={textareaRef}
                value={newPostContent}
                onChange={(e) => setNewPostContent(e.target.value)}
                placeholder="Share your thoughts about movies and series..."
                className="w-full p-3 border border-gray-200 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-indigo-600 transition-all duration-200 resize-none text-gray-800 placeholder-gray-500 bg-gray-50"
                rows={3}
              />
              <div className="absolute bottom-6 right-2">
                <div className="relative">
                  <button
                    ref={emojiButtonRef}
                    type="button"
                    onClick={() => {
                      setShowEmojiPicker(!showEmojiPicker);
                      textareaRef.current?.focus();
                    }}
                    className="text-gray-500 hover:text-indigo-600 transition-colors duration-200 group bg-white"
                  >
                    <FaSmile className="text-xl group-hover:scale-110 transition-transform duration-200" />
                  </button>
                  {showEmojiPicker && (
                    <div className="absolute top-full right-0 mt-2 z-10">
                      <div className="bg-white rounded-lg shadow-lg border border-gray-200">
                        <EmojiPicker onEmojiClick={onEmojiClick} />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Selected Images Preview */}
          {selectedImages.length > 0 && (
            <div className="grid grid-cols-2 gap-2 mb-4">
              {selectedImages.map((image, index) => (
                <div key={index} className="relative group">
                  <img
                    src={image}
                    alt={`Selected ${index + 1}`}
                    className="w-full h-32 object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
                  />
                  <button
                    type="button"
                    onClick={() =>
                      setSelectedImages(
                        selectedImages.filter((_, i) => i !== index)
                      )
                    }
                    className="absolute top-2 right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-red-600"
                  >
                    ×
                  </button>
                </div>
              ))}
            </div>
          )}

          <div className="flex justify-between items-center border-t border-gray-100 pt-4">
            <div className="flex space-x-4">
              <label className="cursor-pointer text-gray-500 hover:text-indigo-600 transition-colors duration-200 group">
                <FaImage className="text-xl group-hover:scale-110 transition-transform duration-200" />
                <input
                  type="file"
                  multiple
                  accept="image/*"
                  onChange={handleImageSelect}
                  className="hidden"
                />
              </label>
            </div>
            <button
              type="submit"
              disabled={!newPostContent && selectedImages.length === 0}
              className={`relative inline-flex items-center justify-center px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300
                ${
                  newPostContent || selectedImages.length > 0
                    ? "bg-gradient-to-r from-purple-500 to-indigo-600 text-white shadow-[6px_6px_0px_black] border border-white border-4 border-solid hover:shadow-[2px_2px_0px_black] active:shadow-[1px_1px_0px_black] active:translate-y-[2px] transform hover:scale-[1.03]"
                    : "bg-gray-200 text-gray-400 cursor-not-allowed"
                }
              `}
            >
              <span className="relative z-10">Post</span>
            </button>

          </div>
        </form>
      </div>

      {/* Tab Navigation */}
      <div className="sticky top-0 z-50 bg-white/80 backdrop-blur-md py-4 px-6 border-b border-gray-200 outline-none">
        <div className="flex justify-center space-x-4 max-w-4xl mx-auto">
          <button
            onClick={(e) => {
              setActiveTab("popular");
              const btn = e.currentTarget;
              btn.classList.remove("animate-click");
              void btn.offsetWidth;
              btn.classList.add("animate-click");
            }}
            className={`relative px-8 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 outline-none ${
              activeTab === "popular"
                ? "bg-gradient-to-r from-indigo-600 to-blue-600 text-white shadow-[6px_6px_0px_black] border-4 border-white "
                : "bg-gray-100 text-gray-600 hover:bg-gray-200 border-4 border-transparent"
            }`}
          >
            <span className="relative z-10 flex items-center">
              <FaFire className="mr-2" />
              Popular
            </span>
            {activeTab === "popular" && (
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-600 to-blue-600 opacity-0 animate-pulse shadow-[6px_6px_0px_black] border-4 border-white" />
            )}
          </button>

          <button
            onClick={(e) => {
              setActiveTab("mySeries");
              const btn = e.currentTarget;
              btn.classList.remove("animate-click");
              void btn.offsetWidth;
              btn.classList.add("animate-click");
            }}
            className={`relative px-8 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 shadow-[6px_6px_0px_black] border-4 ${
              activeTab === "mySeries"
                ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white border-white"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200 border-transparent"
            } active-click:scale-95`}
          >
            <span className="relative z-10 flex items-center">
              <FaTv className="mr-2" />
              My Series
            </span>
            {activeTab === "mySeries" && (
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 opacity-0 animate-pulse" />
            )}
          </button>
        </div>
      </div>

      {/* Posts */}
      <div className="space-y-6 max-w-xl mx-auto">
        {(activeTab === "popular" ? posts : mySeriesPosts).map((post) => (
          <Post
            key={post.id}
            post={{
              id: post.id,
              author: {
                name: post.author.name,
                avatar: post.author.avatar,
                username: post.author.username,
              },
              content: post.content,
              images: post.images || [],
              timestamp: post.timestamp,
              likes: post.likes,
              comments: post.comments,
              shares: post.shares,
              isLiked: post.isLiked,
              isBookmarked: post.isBookmarked,
              isStarred: post.isStarred,
              hashtags: post.hashtags,
            }}
            onLike={handleLike}
            onShare={handleShare}
            onBookmark={handleBookmark}
            onStar={handleStar}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
