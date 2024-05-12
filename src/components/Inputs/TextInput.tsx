import React from "react";

import "./inputs.scss";

interface TextInputProps {
  placeholder?: string;
  defaulValue?: string;
  label?: string;
  onInputChange: (value: string) => void;
}

export const TextInput: React.FC<TextInputProps> = ({
  placeholder,
  label,
  defaulValue,
  onInputChange,
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    onInputChange(value);
  };

  return (
    <label className="simple-input">
      <input
        className="simple-input__field"
        type="text"
        value={defaulValue}
        placeholder={placeholder}
        onChange={handleChange}
      />
      <span className="simple-input__label">{label || "not labeled"}</span>
    </label>
  );
};

export default TextInput;
