import React, { useState } from "react";
import {
  FaSearch,
  FaPaperPlane,
  FaImage,
  FaSmile,
  FaEllipsisV,
  FaCheck,
  FaCheckDouble,
} from "react-icons/fa";

interface Message {
  id: number;
  sender: string;
  content: string;
  timestamp: string;
  isRead: boolean;
  isSent: boolean;
}

interface Chat {
  id: number;
  username: string;
  avatar: string;
  lastMessage: string;
  timestamp: string;
  unread: number;
  online: boolean;
}

const Messages: React.FC = () => {
  const [selectedChat, setSelectedChat] = useState<number | null>(1);
  const [newMessage, setNewMessage] = useState("");

  const chats: Chat[] = [
    {
      id: 1,
      username: "Christopher Nolan",
      avatar: "https://api.dicebear.com/7.x/avataaars/png?seed=nolan",
      lastMessage: "What did you think about the new Dune movie?",
      timestamp: "2m ago",
      unread: 0,
      online: true,
    },
    {
      id: 2,
      username: "Emma Stone",
      avatar: "https://api.dicebear.com/7.x/avataaars/png?seed=emma",
      lastMessage: "I loved your review of Poor Things!",
      timestamp: "15m ago",
      unread: 2,
      online: false,
    },
    {
      id: 3,
      username: "Denis Villeneuve",
      avatar: "https://api.dicebear.com/7.x/avataaars/png?seed=villeneuve",
      lastMessage: "Let's discuss the cinematography in Dune",
      timestamp: "1h ago",
      unread: 0,
      online: true,
    },
    {
      id: 4,
      username: "Tom Hanks",
      avatar: "https://api.dicebear.com/7.x/avataaars/png?seed=tomhanks",
      lastMessage: "Have you seen the new Spielberg film?",
      timestamp: "2h ago",
      unread: 0,
      online: false,
    },
  ];

  const messages: Record<number, Message[]> = {
    1: [
      {
        id: 1,
        sender: "Christopher Nolan",
        content: "Hey! What did you think about the new Dune movie?",
        timestamp: "2m ago",
        isRead: true,
        isSent: false,
      },
      {
        id: 2,
        sender: "You",
        content:
          "It was absolutely breathtaking! The visuals and storytelling were on another level.",
        timestamp: "1m ago",
        isRead: true,
        isSent: true,
      },
      {
        id: 3,
        sender: "Christopher Nolan",
        content:
          "I completely agree! The cinematography was stunning. Did you catch the subtle references to the original?",
        timestamp: "Just now",
        isRead: false,
        isSent: false,
      },
    ],
  };

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      // Here you would typically send the message to your backend
      setNewMessage("");
    }
  };

  return (
    <div className="flex h-[calc(100vh-4rem)]">
      {/* Chat List */}
      <div className="w-64 border-r border-gray-200 bg-white">
        <div className="p-4 border-b border-gray-200">
          <div className="relative">
            <input
              type="text"
              placeholder="Search messages..."
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:border-indigo-500 bg-white"
            />
            <FaSearch className="absolute left-3 top-3 text-gray-400" />
          </div>
        </div>
        <div className="overflow-y-auto h-[calc(100%-4rem)]">
          {chats.map((chat) => (
            <div
              key={chat.id}
              onClick={() => setSelectedChat(chat.id)}
              className={`p-4 border-b border-gray-100 cursor-pointer transition-all duration-200 ${
                selectedChat === chat.id ? "bg-indigo-50" : "hover:bg-gray-50"
              }`}
            >
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <img
                    src={chat.avatar}
                    alt={chat.username}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  {chat.online && (
                    <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white" />
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-gray-900 truncate">
                      {chat.username}
                    </h3>
                    <span className="text-xs text-gray-500">
                      {chat.timestamp}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-gray-600 truncate">
                      {chat.lastMessage}
                    </p>
                    {chat.unread > 0 && (
                      <span className="bg-indigo-500 text-white text-xs px-2 py-1 rounded-full">
                        {chat.unread}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Chat Window */}
      <div className="flex-1 flex flex-col bg-gray-50 max-w-3xl">
        {selectedChat ? (
          <>
            {/* Chat Header */}
            <div className="p-4 border-b border-gray-200 bg-white flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <img
                  src={chats.find((c) => c.id === selectedChat)?.avatar}
                  alt=""
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-semibold text-gray-900">
                    {chats.find((c) => c.id === selectedChat)?.username}
                  </h3>
                  <p className="text-xs text-gray-500">
                    {chats.find((c) => c.id === selectedChat)?.online
                      ? "Online"
                      : "Offline"}
                  </p>
                </div>
              </div>
              <button className="text-gray-500 hover:text-gray-700 bg-white">
                <FaEllipsisV />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages[selectedChat]?.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${
                    message.sender === "You" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[85%] rounded-lg p-3 ${
                      message.sender === "You"
                        ? "bg-indigo-500 text-white"
                        : "bg-white text-gray-900"
                    }`}
                  >
                    <p className="text-sm">{message.content}</p>
                    <div className="flex items-center justify-end mt-1 space-x-1">
                      <span className="text-xs opacity-70">
                        {message.timestamp}
                      </span>
                      {message.sender === "You" && (
                        <span className="text-xs">
                          {message.isRead ? (
                            <FaCheckDouble className="text-blue-300" />
                          ) : (
                            <FaCheck className="text-gray-300" />
                          )}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Message Input */}
            <div className="p-4 border-t border-gray-200 bg-white">
              <div className="flex items-center space-x-2">
                <button className="text-gray-500 hover:text-gray-700 bg-white">
                  <FaImage />
                </button>
                <button className="text-gray-500 hover:text-gray-700 bg-white">
                  <FaSmile />
                </button>
                <input
                  type="text"
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  placeholder="Type a message..."
                  className="flex-1 px-4 py-2 rounded-full border border-gray-200 focus:outline-none focus:border-indigo-500 bg-white"
                />
                <button
                  onClick={handleSendMessage}
                  className="bg-indigo-500 text-white p-2 rounded-full hover:bg-indigo-600 transition-colors duration-200"
                >
                  <FaPaperPlane />
                </button>
              </div>
            </div>
          </>
        ) : (
          <div className="flex-1 flex items-center justify-center text-gray-500">
            Select a chat to start messaging
          </div>
        )}
      </div>
    </div>
  );
};

export default Messages;
