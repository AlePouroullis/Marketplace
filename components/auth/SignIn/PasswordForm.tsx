import { Fragment, useState } from "react";
import styles from "@componentStyles/auth/SignIn/PasswordForm.module.scss";
import commonStyles from "@componentStyles/auth/common.module.scss";
import Link from "next/link";

type Props = {
  email: string;
};

export default function PasswordForm({ email }: Props) {
  const [password, setPassword] = useState("");
  const [errorState, setErrorState] = useState({
    error: false,
    message: "",
  });
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setErrorState({ error: false, message: "" });
    if (!password) {
      setErrorState({ error: true, message: "Password is required" });
      return;
    }
    // TODO: sign in with email and password. If invalid, set error state to true and show  appropriate message.
    // otherwise, forward to index page as signed in.
  };

  return (
    <Fragment>
      <div className={styles.emailRow}>
        <span className={styles.plain}>{email}</span>{" "}
        <Link href="/signin">Change</Link>
      </div>
      <div className={commonStyles.inputsWrapper}>
        <div className={commonStyles.inputWrapper}>
          <label htmlFor="password">Password</label>
          <input
            onChange={(e) => {
              setErrorState({ error: false, message: "" });
              setPassword(e.target.value);
            }}
            type="password"
            name="password"
            id="password"
          />
          {errorState.error && (
            <div className={commonStyles.error}>
              <span>{errorState.message}</span>
            </div>
          )}
        </div>
      </div>
      <div className={commonStyles.buttonWrapper}>
        <button onClick={handleSubmit}>Sign in</button>
      </div>

      <div>
        <label htmlFor="auth-remember-me">
          <div className={styles.checkbox}>
            <label>
              <input
                onChange={(e) => setRememberMe(e.target.checked)}
                type="checkbox"
                checked={rememberMe}
              />
              <span>Remember me</span>
            </label>
          </div>
        </label>
      </div>
    </Fragment>
  );
}
