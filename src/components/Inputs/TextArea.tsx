import React from "react";

import "./inputs.scss";

interface TextAreaProps {
  placeholder?: string;
  onInputChange: (value: string) => void;
}

const TextArea: React.FC<TextAreaProps> = ({ placeholder, onInputChange }) => {
  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = event.target;
    onInputChange(value);
  };

  return (
    <textarea
      className="text-input"
      placeholder={placeholder}
      onChange={handleChange}
    />
  );
};

export default TextArea;
