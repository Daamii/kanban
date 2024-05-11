import React from "react";

import "./inputs.scss";

interface TextInputProps {
  placeholder?: string;
  defaulValue?: string;
  onInputChange: (value: string) => void;
}

const TextInput: React.FC<TextInputProps> = ({
  placeholder,
  defaulValue,
  onInputChange,
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    onInputChange(value);
  };

  return (
    <input
      type="text"
      className="text-input"
      defaultValue={defaulValue}
      placeholder={placeholder}
      onChange={handleChange}
    />
  );
};

export default TextInput;
