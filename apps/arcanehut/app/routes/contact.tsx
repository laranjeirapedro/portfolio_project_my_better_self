/* eslint-disable jsx-a11y/label-has-associated-control */
import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { TextField, TextFieldProps } from "arcanehut/app/components/Inputs";
import { validateEmail } from "arcanehut/app/utils";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

type InputField = {
  value: string;
  isDirty?: boolean;
  error: string;
};

const number_regex = /[^0-9]+/g;

export default function Contact() {
  const [firstName, setFirstName] = useState<InputField>({
    value: "",
    error: "",
  });
  const [lastName, setLastName] = useState<InputField>({
    value: "",
    error: "",
  });
  const [company, setCompany] = useState<InputField>({
    value: "",
    error: "",
  });
  const [email, setEmail] = useState<InputField>({ value: "", error: "" });
  const [phoneNumber, setPhoneNumber] = useState<InputField>({
    value: "",
    error: "",
  });
  const [message, setMessage] = useState<InputField>({
    value: "",
    error: "",
  });
  const [country, setCountry] = useState<InputField>({
    value: "US",
    error: "",
  });
  const [acceptedTerms, setAccemptedTerms] = useState({
    value: false,
    error: "",
  });

  const textHandlerMap: Record<
    string,
    { field: InputField; handler: Dispatch<SetStateAction<InputField>> }
  > = useMemo(
    () => ({
      firstName: { field: firstName, handler: setFirstName },
      lastName: { field: lastName, handler: setLastName },
      company: { field: company, handler: setCompany },
      email: { field: email, handler: setEmail },
      phoneNumber: { field: phoneNumber, handler: setPhoneNumber },
      message: { field: message, handler: setMessage },
      country: { field: country, handler: setCountry },
    }),
    [company, country, email, firstName, lastName, message, phoneNumber],
  );

  const textValidation = useCallback(
    (key: string): boolean => {
      if (key === "phoneNumber") return true;

      if (textHandlerMap[key].field.value.length === 0) {
        textHandlerMap[key].handler((curr) => ({
          ...curr,
          isDirty: true,
          error: "Required Field.",
        }));
        return false;
      }

      if (key === "email" && !validateEmail(email.value)) {
        setEmail((curr) => ({
          ...curr,
          isDirty: true,
          error: "Invalid Email.",
        }));
        return false;
      }

      textHandlerMap[key].handler((curr) => ({
        ...curr,
        error: "",
      }));
      return true;
    },
    [email.value, textHandlerMap],
  );

  const phoneValidation = useCallback(() => {
    if (
      phoneNumber.value.replace("+1", "").replace(number_regex, "")?.length ===
      0
    ) {
      setPhoneNumber((curr) => ({ ...curr, error: "Required Field." }));
      return false;
    }
    if (
      phoneNumber.value.replace("+1", "").replace(number_regex, "")?.length !==
      10
    ) {
      setPhoneNumber((curr) => ({
        ...curr,
        error: "Invalid Phone Number.",
      }));
      return false;
    }
    setPhoneNumber((curr) => ({
      ...curr,
      error: "",
    }));
    return true;
  }, [phoneNumber.value]);

  const validate = useCallback(() => {
    let formIsValid = true;

    formIsValid = phoneValidation() && formIsValid;

    Object.keys(textHandlerMap).map((key) => {
      formIsValid = textValidation(key) && formIsValid;
      textHandlerMap[key].handler?.((curr) => ({ ...curr, isDirty: true }));
    });

    if (!acceptedTerms.value) {
      setAccemptedTerms((curr) => ({ ...curr, error: "Required field." }));
      formIsValid = false;
    } else setAccemptedTerms((curr) => ({ ...curr, error: "" }));

    return formIsValid;
  }, [acceptedTerms, phoneValidation, textHandlerMap, textValidation]);

  const toogleAgreementChange = () => {
    setAccemptedTerms((curr) => ({ ...curr, value: !curr.value, error: "" }));
  };

  const nameFields: TextFieldProps[] = [
    {
      label: "First Name",
      value: firstName.value,
      valueHandler: (e: React.ChangeEvent<HTMLInputElement>) => {
        setFirstName((curr) => ({ ...curr, value: e.target.value }));
      },
      error: firstName.error,
      isDirty: firstName.isDirty,
      onBlur: () => {
        textValidation("firstName");
      },
    },
    {
      label: "Last Name",
      value: lastName.value,
      valueHandler: (e: React.ChangeEvent<HTMLInputElement>) => {
        setLastName((curr) => ({ ...curr, value: e.target.value }));
      },
      error: lastName.error,
      isDirty: lastName.isDirty,
      onBlur: () => {
        textValidation("lastName");
      },
    },
  ];

  const otherFields: TextFieldProps[] = [
    {
      label: "Company",
      value: company.value,
      isDirty: company.isDirty,
      error: company.error,
      valueHandler: (e: React.ChangeEvent<HTMLInputElement>) => {
        setCompany((curr) => ({ ...curr, value: e.target.value }));
      },
      onBlur: () => {
        textValidation("company");
      },
    },
    {
      label: "Email",
      value: email.value,
      valueHandler: (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail((curr) => ({ ...curr, value: e.target.value }));
      },
      isDirty: email.isDirty,
      error: email.error,
      onBlur: () => {
        textValidation("email");
      },
    },
    {
      label: "Phone Number",
      value: phoneNumber.value,
      isDirty: phoneNumber.isDirty,
      error: phoneNumber.error,
      type: "phone",
      valueHandler: (e: React.ChangeEvent<HTMLInputElement>) => {
        setPhoneNumber((curr) => ({ ...curr, value: e.target.value }));
      },
      onBlur: () => {
        phoneValidation();
      },
    },
    {
      label: "Message",
      value: message.value,
      type: "textArea",
      isDirty: message.isDirty,
      error: message.error,
      valueHandler: (e: React.ChangeEvent<HTMLInputElement>) => {
        setMessage((curr) => ({ ...curr, value: e.target.value }));
      },
      onBlur: () => {
        textValidation("message");
      },
    },
  ];

  const hasBeenSent = useRef(false);
  const [isFormReady, setIsFormReady] = useState(false);

  useEffect(() => {
    if (!hasBeenSent.current && isFormReady) {
      hasBeenSent.current = true;
      // Implement post API
      console.log({
        firstName,
        lastName,
        company,
        email,
        phoneNumber,
        message,
        country,
        acceptedTerms,
      });
    }
  }, [
    acceptedTerms,
    company,
    country,
    email,
    firstName,
    isFormReady,
    lastName,
    message,
    phoneNumber,
  ]);

  const onSubmitForm = useCallback(() => {
    const valid = validate();

    if (valid) {
      alert("[DEBUG] Form Sent!");
      setIsFormReady(true);
    }
  }, [validate]);

  return (
    <div className="flex min-h-screen items-center justify-center select-none">
      <div className="bg-slate-100 px-6 py-6 sm:py-8 lg:px-8 my-8 rounded-md max-h-[2000px] transition-all duration-1000 overflow-hidden mx-4 md:mx-0">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
            Contact us {hasBeenSent.current ? "Yes" : "No"}
          </h2>
          <p className="mt-2 text-lg/8 text-gray-600">
            We are looking forward to hear from you!
          </p>
        </div>
        <div className="mx-auto mt-4 max-w-xl sm:mt-8">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col sm:flex-row gap-4">
              {nameFields.map((field) => (
                <TextField key={field.label} {...field} />
              ))}
            </div>
            {otherFields.map((field) => (
              <TextField key={field.label} {...field} />
            ))}
            <div className="flex flex-col col-span-2">
              <div className="flex gap-x-4 ">
                <div className="flex h-6 items-center">
                  <button
                    type="button"
                    className={`flex w-8 flex-none cursor-pointer rounded-full ${acceptedTerms.value ? "bg-indigo-200" : "bg-gray-300"} p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`}
                    role="switch"
                    aria-checked="false"
                    aria-labelledby="switch-1-label"
                    onClick={toogleAgreementChange}
                  >
                    <span className="sr-only">Agree to policies</span>
                    <span
                      aria-hidden="true"
                      className={`size-4 ${acceptedTerms.value ? "bg-indigo-600 translate-x-full" : "bg-white translate-x-0"} transform rounded-full shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out`}
                    ></span>
                  </button>
                </div>
                <label className="text-sm/6 text-gray-600" id="switch-1-label">
                  By selecting this, you agree to our{" "}
                  <Link
                    to="/privacy-policy"
                    className="font-semibold text-indigo-600"
                  >
                    privacy&nbsp;policy
                  </Link>
                  .
                </label>
              </div>
              {acceptedTerms.error && (
                <span className="text-red-600 text-sm">
                  {acceptedTerms.error}
                </span>
              )}
            </div>
          </div>
          <div className="mt-10">
            <button
              type="submit"
              className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              onClick={onSubmitForm}
            >
              Let&apos;s talk
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
