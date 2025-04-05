import styles from "./Button.module.css";
// import { MdMessage } from "react-icons/md";

export default function Button (prop){
  return (
    <button className={styles.primary_btn}>
       {prop.icon}
    {prop.text}   {/*iss trah se jsx me js ka use krte h curly bracket ke help se */}
    </button>
  );
};


// here we use 2 time btn component...with using props taki repetation na ho