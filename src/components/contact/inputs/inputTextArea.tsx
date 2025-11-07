import React from "react";

type TextInputProps = {
  id: string;
  name: string;
  label: string;
  placeholder?: string;
  rows: number;
  required?: boolean;
  value: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
};

const InputTextArea: React.FC<TextInputProps> = ({
  id,
  name,
  label,
  placeholder = "",
  rows = 6,
  required = false,
  value,
  onChange,
}) => {
  return (
    <div>
      <label
        htmlFor={id}
        className="block text-sm font-medium text-black dark:text-gray-300 mb-2"
      >
        {label} {required && "*"}
      </label>
      <textarea
        id={id}
        name={name}
        required={required}
        rows={rows}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-black dark:text-gray-100 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none"
      />
    </div>
  );
};

export default InputTextArea;
