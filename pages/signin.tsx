import Logo from "@compontents/Logo";
import styles from "@styles/pages/SignIn.module.scss";
import { TextField } from "@mui/material";

export default function SignIn() {
  return (
    <div>
      <div>
        <Logo />
      </div>
      <div className={styles.formWrapper}>
        <h1>Sign in</h1>
        <div>

        </div>
        <div className={styles.divider}>
          <h5>New to CampusConnect?</h5>
        </div>
        <div>
          <button className={styles.button}>
            Create your CampusConnect account
          </button>
        </div>
      </div>
    </div>
  );
}
