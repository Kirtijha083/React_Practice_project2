import styles from "./Button.module.css";


export default function Button({isOutline, icon, text, ...rest}) {
// destructuring through making object........
  // const {isOutline, icon, text} =props;

  return (
    <button {...rest} className={isOutline ? styles.outline_btn : styles.primary_btn}>
      {icon}
      {text}   {/*iss trah se jsx me js ka use krte h curly bracket ke help se */}
    </button>
  );
};


// here we use 2 time btn component...with using props taki repetation na ho

// NOTE:-- desturcturing se phele hmko sb ke saath props.icon, props.text, props.isOutline likhna hota h.........but iske baad jarurat nhi h

// one more way to write destructuring....
// export default function Button(props) {
// destructuring through making object........
// const {isOutline, icon, text} =props;

// {...rest} iss property ko isly pass kiye qki...iske bina btn me koi or property work nhi krega....like onClick...
// and isse hoga ki rest sara value isme spread ho ke aa jyega
// yani isse sara event listener aa jata h