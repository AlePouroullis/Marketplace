import commonStyles from "@styles/components/auth/common.module.scss";
import { useState, Fragment } from "react";
import AuthLayout from "@compontents/auth/AuthLayout";
import HelperText from "@compontents/HelperText";
import { Validator } from "@utils/validator";
import Link from "next/link";
import { universities } from "@data/universities";

export default function Register() {
  // inputs
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [university, setUniversity] = useState("");

  const [showInfoText, setShowInfoText] = useState(true);

  const [errorState, setErrorState] = useState({
    password: { error: false, message: "" },
    passwordGroup: { error: false, message: "" },
    email: { error: false, message: "" },
    fullName: { error: false, message: "" },
    university: { error: false, message: "" },
  });

  const createAccount = () => {
    setShowInfoText(false);
    let newErrorState = errorState;

    if (
      fullName
        .trim()
        .split(" ")
        .filter((val) => val !== "").length < 1
    ) {
      newErrorState = {
        ...newErrorState,
        fullName: { error: true, message: "Please enter your full name" },
      };
    }

    if (!Validator.isValidUniversityEmail(email)) {
      newErrorState = {
        ...newErrorState,
        email: {
          error: true,
          message: "Please enter a valid university email",
        },
      };
    }

    if (!university) {
      newErrorState = {
        ...newErrorState,
        university: {
          error: true,
          message: "Please select your university",
        },
      };
    }

    if (password !== repeatPassword) {
      newErrorState = {
        ...newErrorState,
        passwordGroup: { error: true, message: "Passwords do not match" },
      };
    }

    if (password.length < 6) {
      newErrorState = {
        ...newErrorState,
        password: {
          error: true,
          message: "Password must be at least 6 characters",
        },
        passwordGroup: {
          error: false,
          message: "",
        },
      };
    }

    if (Object.values(newErrorState).some((error) => error.error)) {
      setErrorState(newErrorState);
      return;
    }

    // TODO: create account
  };

  const handleFullNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setErrorState({
      ...errorState,
      fullName: { error: false, message: "" },
    });
    setFullName(e.target.value);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setErrorState({
      ...errorState,
      email: { error: false, message: "" },
    });
    setEmail(e.target.value);
  };

  const handleUniversityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setErrorState({
      ...errorState,
      university: { error: false, message: "" },
    });
    setUniversity(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let newErrorState = errorState;
    if (errorState.password.error) {
      if (e.target.value.length >= 6) {
        newErrorState = {
          ...newErrorState,
          password: { error: false, message: "" },
        };
      }
    }
    if (errorState.passwordGroup.error) {
      if (e.target.value === repeatPassword) {
        newErrorState = {
          ...newErrorState,
          passwordGroup: { error: false, message: "" },
        };
      }
    }

    setErrorState(newErrorState);

    setPassword(e.target.value);
  };

  const handleRepeatPasswordChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (errorState.passwordGroup.error) {
      if (e.target.value === password) {
        setErrorState({
          ...errorState,
          passwordGroup: { error: false, message: "" },
        });
      }
    }

    setRepeatPassword(e.target.value);
  };

  return (
    <AuthLayout>
      <form className={commonStyles.box}>
        <div>
          <h1>Create account</h1>
          <div className={commonStyles.inputsWrapper}>
            <div
              className={`${commonStyles.inputWrapper} ${
                errorState.fullName.error ? commonStyles.error : ""
              }`}
            >
              <label htmlFor="full-name">Your name</label>
              <input
                value={fullName}
                name="full-name"
                id="full-name"
                type="text"
                placeholder="First and last name"
                onChange={handleFullNameChange}
              />
              {errorState.fullName.error && (
                <HelperText
                  type="error"
                  message={errorState.fullName.message}
                />
              )}
            </div>
            <div
              className={`${commonStyles.inputWrapper} ${
                errorState.email.error ? commonStyles.error : ""
              }`}
            >
              <label htmlFor="email">University email</label>
              <input
                value={email}
                name="email"
                id="email"
                type="email"
                onChange={handleEmailChange}
              />
              {errorState.email.error ? (
                <HelperText type="error" message={errorState.email.message} />
              ) : (
                showInfoText && (
                  <HelperText
                    type="info"
                    message="Using your university email helps verify your identity."
                  />
                )
              )}
            </div>
            <div
              className={`${commonStyles.inputWrapper} ${
                errorState.university.error ? commonStyles.error : ""
              }`}
            >
              <label htmlFor="university">University</label>
              <select
                value={university}
                onChange={handleUniversityChange}
                className={commonStyles.select}
              >
                <option disabled value="">
                  Select your university
                </option>
                {universities.map((university) => {
                  return (
                    <option key={university.value} value={university.label}>
                      {university.label}
                    </option>
                  );
                })}
              </select>
              {errorState.university.error && (
                <HelperText
                  type="error"
                  message={errorState.university.message}
                />
              )}
            </div>

            <div className={commonStyles.inputMatchGroup}>
              <div
                className={`${commonStyles.inputWrapper} ${
                  errorState.password.error || errorState.passwordGroup.error
                    ? commonStyles.error
                    : ""
                }`}
              >
                <label htmlFor="password">Password</label>
                <input
                  placeholder="At least 6 characters"
                  name="password"
                  id="password"
                  type="password"
                  value={password}
                  onChange={handlePasswordChange}
                />
                {errorState.password.error ? (
                  <HelperText
                    type="error"
                    message={errorState.password.message}
                  />
                ) : (
                  showInfoText && (
                    <HelperText
                      type="info"
                      message="Password must be at least 6 characters"
                    />
                  )
                )}
              </div>
              <div
                className={`${commonStyles.inputWrapper} ${
                  commonStyles.noMarginBottom
                } ${errorState.passwordGroup.error ? commonStyles.error : ""}`}
              >
                <label htmlFor="password_check">Re-enter password</label>
                <input
                  value={repeatPassword}
                  onChange={handleRepeatPasswordChange}
                  id="password_check"
                  name="password_check"
                  type="password"
                />
              </div>

              {errorState.passwordGroup.error && (
                <HelperText
                  type="error"
                  message={errorState.passwordGroup.message}
                />
              )}
            </div>
          </div>
          <div className={commonStyles.buttonWrapper}>
            <button
              onClick={(e) => {
                e.preventDefault();
                createAccount();
              }}
            >
              Create account
            </button>
          </div>
          <Fragment>
            <div className={commonStyles.divider}>
              <h5>Already have an account?</h5>
            </div>
            <div className={commonStyles.alternativeActionWrapper}>
              <Link
                href="/signin"
                className={`${commonStyles.buttonLinkWrapper} ${commonStyles.buttonWrapper}`}
              >
                <button className={commonStyles.button}>
                  Sign in
                </button>
              </Link>
            </div>
          </Fragment>
        </div>
      </form>
    </AuthLayout>
  );
}
