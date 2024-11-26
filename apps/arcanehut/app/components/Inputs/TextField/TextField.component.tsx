import { useMemo } from "react";
import PhoneField from "./PhoneField.component";

export type TextFieldProps = {
  label: string;
  value: string;
  error?: string;
  valueHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: "textInput" | "textArea" | "phone";
  onBlur?: () => void;
  isDirty?: boolean;
};

const TextField = ({
  label,
  value,
  valueHandler,
  error,
  isDirty,
  onBlur,
  type = "textInput",
}: TextFieldProps) => {
  const shouldShowError = useMemo(() => error && isDirty, [error, isDirty]);

  switch (type) {
    case "textArea":
      return (
        <div>
          <label
            htmlFor="message"
            className={`block text-sm/6 font-semibold  ${shouldShowError ? "text-red-600" : "text-gray-900"}`}
          >
            {label}
          </label>
          <div className="mt-2.5">
            <textarea
              name="message"
              id="message"
              rows={4}
              className={`block w-full rounded-md border-0 px-3.5 py-2 ${shouldShowError ? "text-red-600 ring-red-300" : "text-gray-900 ring-gray-300"} shadow-sm ring-1 ring-inset  placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6`}
              onChange={valueHandler as never}
              value={value}
              onBlur={onBlur}
            />
            {error && isDirty && (
              <span className="text-red-600 text-sm">{error}</span>
            )}
          </div>
        </div>
      );

    case "phone":
      return (
        <PhoneField
          {...{ label, value, valueHandler, error, isDirty, onBlur }}
        />
      );

    default:
      return (
        <div>
          <label
            htmlFor="first-name"
            className={`block text-sm/6 font-semibold  ${shouldShowError ? "text-red-600" : "text-gray-900"}`}
          >
            {label}
          </label>
          <div className="mt-2.5">
            <input
              type="text"
              name="first-name"
              id="firstName"
              autoComplete="given-name"
              className={`block w-full rounded-md border-0 px-3.5 py-2 ${shouldShowError ? "text-red-600 ring-red-300" : "text-gray-900 ring-gray-300"} shadow-sm ring-1 ring-inset  placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6`}
              onChange={valueHandler}
              onBlur={onBlur}
              value={value}
            />
          </div>
          {error && isDirty && (
            <span className="text-red-600 text-sm">{error}</span>
          )}
        </div>
      );
  }
};

export default TextField;
