
import styles from "src/components/Toast/Toast.module.css";
import toast from "react-hot-toast";


export  function Toast() {


  return (


        <button onClick={() => toast("次は8番です")} className={styles.toast}>
          <h2>react_next.js学習進捗状況</h2>
          <p>ファイル名&rarr;react_toast</p>
        </button>


  );
}
