import styles from "@componentStyles/HelperText.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfo } from "@fortawesome/free-solid-svg-icons/faInfo";
import { faExclamation } from "@fortawesome/free-solid-svg-icons/faExclamation";

type Props = {
  message: string;
  type: "error" | "info";
};

export default function HelperText({ message, type }: Props) {
  const getTypeClass = () => {
    switch (type) {
      case "error":
        return styles.error;

      case "info":
        return styles.info;

      default:
        return styles.info;
    }
  };
  const getIcon = () => {
    switch (type) {
      case "error":
        return faExclamation;

      case "info":
        return faInfo;

      default:
        return faInfo;
    }
  };

  return (
    <div className={`${styles.helperTextWrapper} ${getTypeClass()}`}>
      <FontAwesomeIcon icon={getIcon()} className={styles.icon} />
      <span className={styles.text}>{message}</span>
    </div>
  );
}
