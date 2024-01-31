import React from "react";

function Button({
  children,
  className = "",
  type = "button",
  bgColor = "bg-blue-600",
  textColor = "text-white",
  ...props
}) {
  return (
    <button
      className={`px-6 py-2 rounded-lg ${bgColor} ${className} ${textColor}`}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
