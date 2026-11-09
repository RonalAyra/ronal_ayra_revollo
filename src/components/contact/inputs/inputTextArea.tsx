import React from "react";
import { AlertCircle } from "lucide-react";

type TextInputProps = {
  id: string;
  name: string;
  label: string;
  placeholder?: string;
  rows?: number;
  required?: boolean;
  disabled?: boolean;
  value: string;
  error?: string;
  helperText?: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
};

const InputTextArea: React.FC<TextInputProps> = ({
  id,
  name,
  label,
  placeholder = "",
  rows = 5,
  required = false,
  disabled = false,
  value,
  error,
  helperText,
  onChange,
}) => {
  const errorId = `${id}-error`;
  const helperId = `${id}-helper`;

  return (
    <div className="space-y-1.5">
      <div className="flex items-center justify-between">
        <label
          htmlFor={id}
          className="block text-sm font-semibold text-slate-800 dark:text-slate-200"
        >
          {label}
          {required && (
            <span className="text-red-500 ml-1" title="Campo obligatorio">
              *
            </span>
          )}
        </label>
        <span className="text-xs text-slate-400 dark:text-slate-500 tabular-nums">
          {value.length} caracteres
        </span>
      </div>
      <textarea
        id={id}
        name={name}
        required={required}
        disabled={disabled}
        rows={rows}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? errorId : helperText ? helperId : undefined}
        className={`w-full px-3.5 py-2.5 rounded-xl text-sm bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 border transition-colors duration-200 resize-y disabled:opacity-60 disabled:cursor-not-allowed ${
          error
            ? "border-red-500 dark:border-red-500 bg-red-50/40 dark:bg-red-950/20"
            : "border-slate-300 dark:border-slate-700 hover:border-slate-400 dark:hover:border-slate-600 focus:border-blue-600 dark:focus:border-blue-400"
        }`}
      />
      {error ? (
        <p
          id={errorId}
          role="alert"
          className="flex items-center gap-1.5 text-xs font-medium text-red-600 dark:text-red-400"
        >
          <AlertCircle size={13} className="flex-shrink-0" />
          <span>{error}</span>
        </p>
      ) : helperText ? (
        <p id={helperId} className="text-xs text-slate-500 dark:text-slate-400">
          {helperText}
        </p>
      ) : null}
    </div>
  );
};

export default InputTextArea;
