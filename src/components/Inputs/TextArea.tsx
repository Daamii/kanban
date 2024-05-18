import React from "react";

import "./inputs.scss";

interface TextAreaProps {
  defaultValue?: string;
  placeholder?: string;
  onInputChange: (value: string) => void;
}

const TextArea: React.FC<TextAreaProps> = ({
  defaultValue,
  placeholder,
  onInputChange,
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = event.target;
    onInputChange(value);
  };

  return (
    <textarea
      defaultValue={defaultValue}
      className="text-input"
      placeholder={placeholder}
      onChange={handleChange}
    />
  );
};

export default TextArea;
