import PowerIcon from '@mui/icons-material/Power';
import styles from "@styles/components/Logo.module.scss";

export default function Logo() {
   return (
      <div className={styles.logoWrapper}>
         <h1 className={styles.logoText}>Campus</h1>
         <PowerIcon className={styles.logoIcon} />
      </div>
   )
}