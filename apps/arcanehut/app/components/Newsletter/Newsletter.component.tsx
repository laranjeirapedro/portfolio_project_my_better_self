import { useCallback, useEffect, useState } from "react";
import Lottie from "react-lottie";

import BackgroundAnimation from "./newsletter-bg.json";

const EMAIL_REGEX = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

export default function Newsletter() {
  const [hasError, setErrorStatus] = useState(false);
  const [isDirty, setIsDirty] = useState(false);
  const [email, setEmail] = useState("");

  const validateEmail = useCallback(
    (value?: string) => {
      !isDirty && setIsDirty(true);
      const isValid = EMAIL_REGEX.test(value ?? email);
      if (isValid) {
        setErrorStatus(false);
      } else {
        setErrorStatus(true);
      }
      return isValid;
    },
    [email, isDirty]
  );

  const onEmailChanged = useCallback(
    (value: string) => {
      isDirty && validateEmail(value);
      setEmail(value);
    },
    [isDirty, validateEmail]
  );

  const onButtonPressed = useCallback(() => {
    if (validateEmail()) {
      alert("Submit form");
    } else {
      alert("Invalid Email");
    }
  }, [validateEmail]);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: BackgroundAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const [isClient, setClient] = useState(false);

  useEffect(() => {
    setClient(true);
  }, []);

  return (
    <div className="relative flex flex-col md:flex-row select-none bg-slate-800 w-[calc(100%-2rem)] xl:max-w-6xl mx-4 xl:mx-auto my-5 rounded-lg h-auto md:min-h-64 p-3">
      {isClient && (
        <div className="absolute w-full h-full overflow-hidden z-0 opacity-5">
          <Lottie options={defaultOptions} width={"100%"} speed={1} />
        </div>
      )}
      <div className="basis-3/5 flex justify-center flex-col p-4 gap-3 z-10">
        <h2 className="text-slate-200 text-2xl md:text-4xl">
          Want product news and updates?
        </h2>
        <h3 className="text-slate-200  text-2xl md:text-3xl">
          Sign up for our newsletter.
        </h3>
      </div>
      <div className="basis-2/5 flex flex-col justify-center p-4 gap-3 z-10">
        <input
          name="title"
          type="text"
          className={`max-w-full bg-opacity-60 focus:bg-opacity-60 w-96 md:w-full h-12 rounded-md border-collapse ${hasError && "placeholder-rose-500"} focus:placeholder-slate-400 border ${hasError ? "border-red-400" : "border-slate-400"} px-3 bg-slate-600 ${hasError ? "text-red-400" : "text-slate-300"} focus:text-slate-200 outline-none focus:bg-slate-500 focus:border-slate-300`}
          placeholder="example@email.com"
          onBlur={() => validateEmail()}
          onChange={(e) => onEmailChanged(e.target.value)}
          value={email}
        />
        <div
          className="primary-button w-52"
          onClick={onButtonPressed}
          aria-hidden="true"
        >
          <span className="text-inherit">Submit</span>
        </div>
        <div className="h-4">
          {hasError && (
            <span className="text-red-400 text-sm leading-none flex">
              Invalid email address.
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
