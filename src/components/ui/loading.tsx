import React from "react";

interface LoadingProps {
  message?: string;
  className?: string;
}

const Loading: React.FC<LoadingProps> = ({
  message = "Loading...",
  className = "",
}) => {
  return (
    <div className={`flex items-center justify-center space-x-2 ${className}`}>
      <div className="w-4 h-4 rounded-full animate-spin border-2 border-t-transparent border-blue-500"></div>
      <span>{message}</span>
    </div>
  );
};

export default Loading;
