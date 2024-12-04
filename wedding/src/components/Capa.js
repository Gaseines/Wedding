import React from "react";

//styles
import styles from "./Capa.module.css";

function Capa() {
  return (
    <div id="inicio" className={styles.capa}>
      <div className={styles.dark_background}>
        <h1 className={styles.titulo}>Gabriel & Luiza</h1>
        <div className={styles.bar}></div>
        <div className={styles.container_versiculo}>
          <h2>1 Coríntios 13:7</h2>
          <p>'O amor tudo sofre, tudo crê, tudo espera, tudo suporta'</p>
        </div>
      </div>
      
    </div>
  );
}

export default Capa;
