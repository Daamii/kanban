import React, { useEffect, useState } from "react";

import "./inputs.scss";

export type SelectOption = { value: string; label: string };

interface SelectInputProps {
  options: SelectOption[];
  defaultValue?: string;
  onChange?: (value: string) => void;
}

const SelectInput: React.FC<SelectInputProps> = ({
  defaultValue,
  options,
  onChange,
}) => {
  const [selectedOption, setSelectedOption] = useState<string>(
    defaultValue || options[0].value
  );

  useEffect(() => {
    if (defaultValue !== undefined) {
      setSelectedOption(defaultValue);
    }
  }, [defaultValue]);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    setSelectedOption(value);
    if (onChange) {
      onChange(value);
    }
  };

  return (
    <div className="select-input-container">
      <label htmlFor="select-input">Selecciona una opción:</label>
      <select id="select-input" value={selectedOption} onChange={handleChange}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectInput;
