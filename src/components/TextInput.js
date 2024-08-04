import React from "react";

const TextInput = ({ inputRef, value, onChange }) => {
  return (
    <div>
      <input
        value={value}
        ref={inputRef}
        className="bg-gray-700 mx-auto border-none my-4 py-0.5 px-2 text-m outline-none rounded-md"
        onChange={onChange}
      />
    </div>
  );
};

export default TextInput;
