// import styles from "./Button.module.css";
import { MdMessage } from "react-icons/md";
// export default function Button ({ isOutline, icon, text, ...rest }){
//   return (
//     <button
//       {...rest}
//       className={isOutline ? styles.outline_btn : styles.primary_btn}
//     >
//       {icon}
//       {text}
//     </button>
//   );
// };

export default function Button (){
  return (
    <div>
      <MdMessage/>
      Button
    </div>
  );
};
