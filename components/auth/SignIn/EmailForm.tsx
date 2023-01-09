import { Fragment, useState } from "react";
import { Validator } from "utils/validator";
import styles from "@styles/pages/SignIn.module.scss";
import commonStyles from "@componentStyles/auth/common.module.scss";
import { useRouter } from "next/router";

export default function EmailForm() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);
  const router = useRouter();

  const onSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!Validator.isValidEmail(email)) {
      setError(true);
      return;
    }

    router.push({
      pathname: "/signin",
      query: { email },
    });
  };

  return (
    <Fragment>
      <div className={commonStyles.inputsWrapper}>
        <div className={commonStyles.inputWrapper}>
          <label htmlFor="email">Email</label>
          <input
            onChange={(e) => {
              setError(false);
              setEmail(e.target.value);
            }}
            name="email"
            type="email"
            id="email"
          />
          {error && (
            <span className={commonStyles.error}>
              Please enter a valid email address
            </span>
          )}
        </div>
      </div>
      <div className={commonStyles.buttonWrapper}>
        <button onClick={onSubmit}>Continue</button>
      </div>
    </Fragment>
  );
}
