import React, { useId } from "react";

const Input = React.forwardRef(function Input(
  { label, type = "text", className = "", ...props },
  ref
) {
  const id = useId();
  return (
    <div className="w-full">
      {label && (
        <label htmlFor={id} className="inline-block mb-1 pl-1">
          {label}
        </label>
      )}
      <input
        id={id}
        type={type}
        className={`w-full px-3 py-2 bg-white text-black outline-none focus:bg-gray-50 rounded-lg duration-200 border border-gray-200 ${className} `}
        {...props}
        ref={ref}
      />
    </div>
  );
});

export default Input;
