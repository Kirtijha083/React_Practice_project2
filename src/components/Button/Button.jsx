import styles from "./Button.module.css";
import { MdMessage } from "react-icons/md";

export default function Button (){
  return (
    <button className={styles.primary_btn}>
      <MdMessage fontSize="24px"/>
      VIA SUPPORT CHAT
    </button>
  );
};
