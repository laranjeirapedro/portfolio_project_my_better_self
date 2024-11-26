import { useCallback, useEffect, useMemo, useState } from "react";

export type PhoneFieldProps = {
  label: string;
  value: string;
  error?: string;
  onBlur?: () => void;
  isDirty?: boolean;
  valueHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const number_regex = /[^0-9]+/g;

const PhoneField = ({
  label,
  value,
  valueHandler,
  error,
  onBlur,
  isDirty: _isDirty,
}: PhoneFieldProps) => {
  const [country, setCountry] = useState("US");
  const [isDirty, setIsDirty] = useState(false);

  const countryHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCountry(e.target.value);
  };

  const phoneMask = (value: string) => {
    let newValue: string = value.substring(0, 10) ?? "";
    const originalLength = newValue.length;

    if (originalLength > 3) {
      newValue =
        "(" + newValue.substring(0, 3) + ") " + newValue.substring(3, 10);
    }

    if (originalLength > 6) {
      const [part1, part2]: string[] = newValue.split(") ");
      newValue = `${part1}) ${part2.substring(0, 3)}-${part2.substring(3, 7)}`;
    }

    return newValue;
  };

  const onValueChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const prefix = `${country} | +1 `;
      let rawValue;

      if (e.target.value.includes(prefix)) {
        rawValue =
          e.target.value.split(" | +1 ")[1].replace(number_regex, "") ?? "";
        e.target.value = prefix + phoneMask(rawValue);
      } else {
        const targetValue =
          e.target.value.replace("+1", "").replace(number_regex, "") ?? "";
        e.target.value = prefix + phoneMask(targetValue);
      }

      valueHandler(e);
    },
    [country, valueHandler],
  );

  useEffect(() => {
    if (!value.includes(country))
      onValueChange({
        target: { value },
      } as never);
  }, [country, onValueChange, value]);

  const onBlurHandler = useCallback(() => {
    setIsDirty(true);
    onBlur?.();
  }, [onBlur]);

  const shouldShowError = useMemo(
    () => error && (isDirty || _isDirty),
    [_isDirty, error, isDirty],
  );

  return (
    <div>
      <label
        htmlFor="phone-number"
        className={`block text-sm/6 font-semibold  ${shouldShowError ? "text-red-600" : "text-gray-900"}`}
      >
        {label}
      </label>
      <div className="relative mt-2.5">
        <div className="absolute inset-y-0 left-0 flex items-center">
          <label htmlFor="country" className="sr-only">
            Country
          </label>
          <select
            id="country"
            name="country"
            value={country}
            onChange={countryHandler}
            className={`h-full rounded-md border-0 bg-transparent bg-none py-0 pl-4 pr-4 mr-4 ${shouldShowError ? "text-red-400" : "text-gray-400"}  focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm`}
          >
            <option>US</option>
            <option>CA</option>
          </select>
        </div>
        <input
          type="tel"
          name="phone-number"
          id="phoneNumber"
          autoComplete="tel"
          className={`block w-full rounded-md border-0 px-3.5 py-2 pl-20 ${shouldShowError ? "text-red-600 ring-red-300" : "text-gray-900 ring-gray-300"} shadow-sm ring-1 ring-inset  placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6`}
          onChange={onValueChange}
          onBlur={onBlurHandler}
          value={value.substring(5, 22)}
        />
      </div>
      {shouldShowError && <span className="text-red-600 text-sm">{error}</span>}
    </div>
  );
};

export default PhoneField;
