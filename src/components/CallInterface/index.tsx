import React, { useState, useRef, useEffect } from "react";
import {
  Phone,
  PhoneOff,
  Mic,
  MicOff,
  Volume2,
  VolumeX,
  Send,
  Paperclip,
  Smile,
  MoreVertical,
  Clock,
  Download,
  Share2,
  Flag,
  User,
  Bot,
  ChevronLeft,
  ChevronRight,
  Search,
  Filter,
} from "lucide-react";

interface Message {
  id: string;
  text: string;
  sender: "customer" | "ai";
  timestamp: string;
  isVoiceNote?: boolean;
  duration?: string;
  status?: "sent" | "delivered" | "read";
}

interface CallInterfaceProps {
  callId?: string;
  onClose?: () => void;
}

const CallInterface: React.FC<CallInterfaceProps> = ({ callId, onClose }) => {
  const [isMuted, setIsMuted] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [newMessage, setNewMessage] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hello, I need help with my recent order. The tracking says delivered but I haven't received it.",
      sender: "customer",
      timestamp: "10:30 AM",
      status: "read",
    },
    {
      id: "2",
      text: "I understand you're concerned about your order. Let me check the status for you. Could you please provide your order number?",
      sender: "ai",
      timestamp: "10:31 AM",
    },
    {
      id: "3",
      text: "Sure, it's ORD-789456",
      sender: "customer",
      timestamp: "10:31 AM",
      status: "read",
    },
    {
      id: "4",
      text: "Thank you. I can see your order was delivered yesterday at 3:45 PM to your front porch. Could you check with your neighbors or building security?",
      sender: "ai",
      timestamp: "10:32 AM",
    },
    {
      id: "5",
      text: "I already checked with them. Nobody has seen it.",
      sender: "customer",
      timestamp: "10:33 AM",
      status: "read",
    },
    {
      id: "6",
      text: "I'll initiate a package trace with our delivery partner. Meanwhile, I can process a replacement for you. Would you like me to do that?",
      sender: "ai",
      timestamp: "10:34 AM",
    },
    {
      id: "7",
      text: "Yes, please. How long will the replacement take?",
      sender: "customer",
      timestamp: "10:35 AM",
      status: "read",
    },
    {
      id: "8",
      text: "Replacement orders typically ship within 24 hours and delivery takes 2-3 business days. You'll receive tracking once it ships.",
      sender: "ai",
      timestamp: "10:36 AM",
    },
    {
      id: "9",
      text: "Okay, that sounds good. Please proceed with the replacement.",
      sender: "customer",
      timestamp: "10:37 AM",
      status: "delivered",
    },
    {
      id: "10",
      text: "Perfect! I've processed the replacement order. Your new order number is ORD-789457. You'll receive a confirmation email shortly. Is there anything else I can help you with?",
      sender: "ai",
      timestamp: "10:38 AM",
    },
  ]);

  const [callStatus, setCallStatus] = useState({
    duration: "05:24",
    isActive: true,
    customerInfo: {
      name: "Sarah Johnson",
      phone: "+1 (555) 987-6543",
      location: "San Francisco, CA",
    },
  });

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      const newMsg: Message = {
        id: Date.now().toString(),
        text: newMessage,
        sender: "customer",
        timestamp: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
        status: "sent",
      };
      setMessages([...messages, newMsg]);
      setNewMessage("");

      // Simulate AI response after 1 second
      setTimeout(() => {
        const aiResponses = [
          "I understand. Let me check that for you.",
          "Could you provide more details about the issue?",
          "I'll help you resolve this right away.",
          "That's a good question. Let me look into it.",
          "Thank you for sharing that information.",
        ];
        const aiResponse =
          aiResponses[Math.floor(Math.random() * aiResponses.length)];

        const aiMsg: Message = {
          id: (Date.now() + 1).toString(),
          text: aiResponse,
          sender: "ai",
          timestamp: new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          }),
        };
        setMessages((prev) => [...prev, aiMsg]);
      }, 1000);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleFileUpload = () => {
    fileInputRef.current?.click();
  };

  const handleVoiceNote = () => {
    setIsRecording(!isRecording);
    if (!isRecording) {
      // Simulate recording start
      setTimeout(() => {
        setIsRecording(false);
        const voiceMsg: Message = {
          id: Date.now().toString(),
          text: "[Voice Message]",
          sender: "customer",
          timestamp: new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          }),
          isVoiceNote: true,
          duration: "0:24",
        };
        setMessages([...messages, voiceMsg]);
      }, 2400);
    }
  };

  const getStatusIcon = (status?: string) => {
    switch (status) {
      case "delivered":
        return "✓✓";
      case "read":
        return "✓✓";
      default:
        return "✓";
    }
  };

  const downloadTranscript = () => {
    const transcript = messages
      .map(
        (msg) =>
          `${msg.timestamp} ${
            msg.sender === "customer" ? "Customer" : "AI Assistant"
          }: ${msg.text}`
      )
      .join("\n");

    const blob = new Blob([transcript], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `call-transcript-${callId || "unknown"}.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="flex flex-col h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-lg"
            >
              <ChevronLeft className="w-5 h-5 text-gray-600" />
            </button>

            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                  <User className="w-6 h-6 text-white" />
                </div>
                <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-white"></div>
              </div>

              <div>
                <h2 className="font-bold text-gray-900">
                  {callStatus.customerInfo.name}
                </h2>
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-500">
                    {callStatus.customerInfo.phone}
                  </span>
                  <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock className="w-3 h-3 mr-1" />
                    {callStatus.duration}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <div
              className={`px-3 py-1 rounded-full text-sm font-medium ${
                callStatus.isActive
                  ? "bg-green-100 text-green-800"
                  : "bg-red-100 text-red-800"
              }`}
            >
              {callStatus.isActive ? "Active" : "Ended"}
            </div>

            <div className="flex items-center space-x-1">
              <button
                onClick={() => setIsMuted(!isMuted)}
                className={`p-2 rounded-lg ${
                  isMuted ? "bg-red-50 text-red-600" : "hover:bg-gray-100"
                }`}
              >
                {isMuted ? (
                  <VolumeX className="w-5 h-5" />
                ) : (
                  <Volume2 className="w-5 h-5" />
                )}
              </button>

              <button className="p-2 hover:bg-gray-100 rounded-lg">
                <PhoneOff className="w-5 h-5 text-red-600" />
              </button>

              <button className="p-2 hover:bg-gray-100 rounded-lg">
                <MoreVertical className="w-5 h-5 text-gray-600" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex">
        {/* Chat Section */}
        <div className="flex-1 flex flex-col">
          {/* Call Controls */}
          <div className="bg-white border-b border-gray-200 px-6 py-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <button className="flex items-center space-x-2 px-3 py-2 bg-blue-50 text-blue-600 rounded-lg">
                  <Phone className="w-4 h-4" />
                  <span className="text-sm font-medium">Transfer Call</span>
                </button>

                <button className="flex items-center space-x-2 px-3 py-2 bg-purple-50 text-purple-600 rounded-lg">
                  <Flag className="w-4 h-4" />
                  <span className="text-sm font-medium">Flag Issue</span>
                </button>

                <button
                  onClick={downloadTranscript}
                  className="flex items-center space-x-2 px-3 py-2 bg-green-50 text-green-600 rounded-lg"
                >
                  <Download className="w-4 h-4" />
                  <span className="text-sm font-medium">Transcript</span>
                </button>
              </div>

              <div className="flex items-center space-x-2">
                <button className="p-2 hover:bg-gray-100 rounded-lg">
                  <Search className="w-4 h-4 text-gray-600" />
                </button>
                <button className="p-2 hover:bg-gray-100 rounded-lg">
                  <Filter className="w-4 h-4 text-gray-600" />
                </button>
              </div>
            </div>
          </div>

          {/* Messages Container */}
          <div className="flex-1 overflow-y-auto p-6 bg-gradient-to-b from-white to-gray-50">
            <div className="max-w-4xl mx-auto space-y-6">
              {/* Date Separator */}
              <div className="flex items-center justify-center my-8">
                <div className="px-4 py-1 bg-gray-100 rounded-full">
                  <span className="text-sm text-gray-600">Today</span>
                </div>
              </div>

              {/* Messages */}
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${
                    message.sender === "customer"
                      ? "justify-end"
                      : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-xl ${
                      message.sender === "customer" ? "ml-12" : "mr-12"
                    }`}
                  >
                    <div className="flex items-end space-x-2">
                      {message.sender === "ai" && (
                        <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                          <Bot className="w-4 h-4 text-white" />
                        </div>
                      )}

                      <div
                        className={`rounded-2xl px-4 py-3 ${
                          message.sender === "customer"
                            ? "bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-br-none"
                            : "bg-gradient-to-r from-gray-100 to-gray-50 text-gray-800 rounded-bl-none border border-gray-200"
                        }`}
                      >
                        {message.isVoiceNote ? (
                          <div className="flex items-center space-x-3">
                            <div className="flex items-center space-x-2">
                              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                                <Volume2 className="w-4 h-4" />
                              </div>
                              <div>
                                <div className="flex items-center space-x-4">
                                  <div className="flex space-x-1">
                                    {[...Array(4)].map((_, i) => (
                                      <div
                                        key={i}
                                        className="w-1 bg-white/60 rounded-full animate-pulse"
                                        style={{
                                          height: `${Math.random() * 16 + 8}px`,
                                          animationDelay: `${i * 100}ms`,
                                        }}
                                      />
                                    ))}
                                  </div>
                                  <span className="text-sm">
                                    {message.duration}
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        ) : (
                          <>
                            <p className="whitespace-pre-wrap">
                              {message.text}
                            </p>
                            <div className="flex items-center justify-end space-x-2 mt-1">
                              <span
                                className={`text-xs ${
                                  message.sender === "customer"
                                    ? "text-white/80"
                                    : "text-gray-500"
                                }`}
                              >
                                {message.timestamp}
                              </span>
                              {message.sender === "customer" &&
                                message.status && (
                                  <span className="text-xs text-white/80">
                                    {getStatusIcon(message.status)}
                                  </span>
                                )}
                            </div>
                          </>
                        )}
                      </div>

                      {message.sender === "customer" && (
                        <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                          <User className="w-4 h-4 text-white" />
                        </div>
                      )}
                    </div>

                    {message.sender === "ai" && (
                      <div className="mt-1 ml-10">
                        <span className="text-xs text-gray-500">
                          AI Assistant
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              ))}

              <div ref={messagesEndRef} />
            </div>
          </div>

          {/* Message Input */}
          <div className="bg-white border-t border-gray-200 p-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-end space-x-3">
                <div className="flex-1 bg-gray-50 rounded-2xl border border-gray-200 p-2">
                  <div className="flex items-center space-x-2 mb-2">
                    <button
                      onClick={handleFileUpload}
                      className="p-2 hover:bg-gray-200 rounded-lg"
                    >
                      <Paperclip className="w-5 h-5 text-gray-500" />
                    </button>
                    <button className="p-2 hover:bg-gray-200 rounded-lg">
                      <Smile className="w-5 h-5 text-gray-500" />
                    </button>
                    <input
                      type="file"
                      ref={fileInputRef}
                      className="hidden"
                      accept="image/*,.pdf,.doc,.docx"
                    />
                  </div>

                  <textarea
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Type your message..."
                    className="w-full bg-transparent border-none focus:outline-none resize-none min-h-[60px] max-h-[120px] px-2"
                    rows={3}
                  />

                  <div className="flex items-center justify-between mt-2 px-2">
                    <button
                      onClick={handleVoiceNote}
                      className={`p-2 rounded-full ${
                        isRecording
                          ? "bg-red-100 text-red-600 animate-pulse"
                          : "hover:bg-gray-200 text-gray-500"
                      }`}
                    >
                      {isRecording ? (
                        <MicOff className="w-5 h-5" />
                      ) : (
                        <Mic className="w-5 h-5" />
                      )}
                    </button>

                    <button
                      onClick={handleSendMessage}
                      disabled={!newMessage.trim()}
                      className={`p-2 rounded-full ${
                        newMessage.trim()
                          ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white"
                          : "bg-gray-200 text-gray-400"
                      }`}
                    >
                      <Send className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                <button className="p-3 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl hover:opacity-90">
                  <Phone className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar - Call Info */}
        <div className="w-80 border-l border-gray-200 bg-white overflow-y-auto">
          <div className="p-6">
            <h3 className="font-bold text-gray-900 mb-4">Call Information</h3>

            <div className="space-y-6">
              {/* Customer Info */}
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-xl">
                <h4 className="font-medium text-gray-900 mb-3">
                  Customer Details
                </h4>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <User className="w-4 h-4 text-blue-600" />
                    <div>
                      <p className="text-sm text-gray-600">Name</p>
                      <p className="font-medium">
                        {callStatus.customerInfo.name}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-4 h-4 text-blue-600" />
                    <div>
                      <p className="text-sm text-gray-600">Phone</p>
                      <p className="font-medium">
                        {callStatus.customerInfo.phone}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-4 h-4 text-blue-600" />
                    <div>
                      <p className="text-sm text-gray-600">Location</p>
                      <p className="font-medium">
                        {callStatus.customerInfo.location}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Call Analytics */}
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-4 rounded-xl">
                <h4 className="font-medium text-gray-900 mb-3">
                  Call Analytics
                </h4>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm text-gray-600">
                        Customer Sentiment
                      </span>
                      <span className="text-sm font-medium text-green-600">
                        Positive
                      </span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-green-500 rounded-full"
                        style={{ width: "75%" }}
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm text-gray-600">
                        Resolution Rate
                      </span>
                      <span className="text-sm font-medium text-blue-600">
                        90%
                      </span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-blue-500 rounded-full"
                        style={{ width: "90%" }}
                      />
                    </div>
                  </div>

                  <div className="pt-3 border-t border-purple-200">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">
                        Call Duration
                      </span>
                      <span className="font-medium">{callStatus.duration}</span>
                    </div>
                    <div className="flex items-center justify-between mt-2">
                      <span className="text-sm text-gray-600">
                        Avg Response Time
                      </span>
                      <span className="font-medium">2.3s</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-4 rounded-xl">
                <h4 className="font-medium text-gray-900 mb-3">
                  Quick Actions
                </h4>
                <div className="grid grid-cols-2 gap-2">
                  <button className="p-3 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 text-center">
                    <span className="text-sm font-medium text-gray-700">
                      Send Email
                    </span>
                  </button>
                  <button className="p-3 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 text-center">
                    <span className="text-sm font-medium text-gray-700">
                      Schedule Callback
                    </span>
                  </button>
                  <button className="p-3 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 text-center">
                    <span className="text-sm font-medium text-gray-700">
                      Create Ticket
                    </span>
                  </button>
                  <button className="p-3 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 text-center">
                    <span className="text-sm font-medium text-gray-700">
                      Share Notes
                    </span>
                  </button>
                </div>
              </div>

              {/* Suggested Responses */}
              <div className="bg-gradient-to-br from-green-50 to-green-100 p-4 rounded-xl">
                <h4 className="font-medium text-gray-900 mb-3">
                  AI Suggestions
                </h4>
                <div className="space-y-2">
                  {[
                    "Could you please provide your order number?",
                    "I'll check that for you right away.",
                    "Would you like me to escalate this to a specialist?",
                    "Let me verify your account details.",
                  ].map((suggestion, index) => (
                    <button
                      key={index}
                      onClick={() => setNewMessage(suggestion)}
                      className="w-full p-3 bg-white/50 hover:bg-white text-left rounded-lg text-sm text-gray-700"
                    >
                      {suggestion}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallInterface;
