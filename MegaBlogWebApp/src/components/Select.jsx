import React, { useId } from "react";

function Select({ options, label, className = "", ...props }, ref) {
  const id = useId();
  return (
    <div className="w-full">
      {label && <label htmlFor={id} className=""></label>}
      <select
        className={`w-full px-3 py-2 bg-white text-black outline-none focus:bg-gray-50 rounded-lg duration-200 border border-gray-200 ${className}`}
        {...props}
        ref={ref}
      >
        {options?.map((option) => (
          <option key={option} value={option} id={id}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

export default React.forwardRef(Select); //Just another way of using froward ref hook.
