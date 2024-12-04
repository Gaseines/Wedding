import React from "react";

//Styles
import styles from "./Local.module.css";

//Images
import local from "../images/localizacao.png";
import data from "../images/datas.png";
import hora from "../images/relogio.png";
import foto from "../images/local.jpg";

//Components
import Title from "./sub_components/Title";

const Local = () => {
  return (
    <div id="local" className={styles.container_local}>
      <Title name={"Local"} />

      <div className={styles.local}>
        <ul>
          <li>
            <img src={local} alt="Endereço" />
            <a href="https://www.google.com/maps/place/S%C3%ADtio+V%C3%B4+Paulo+Bittencourt/@-26.7819628,-48.7752882,497m/data=!3m1!1e3!4m6!3m5!1s0x94df2bc06757f837:0x63b6b6b02593de70!8m2!3d-26.7821151!4d-48.774931!16s%2Fg%2F11vj_l4hjk?hl=pt-BR&entry=ttu&g_ep=EgoyMDI0MTIwMS4xIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noreferrer">
              <p>Endereço</p>
            </a>
          </li>
          <li>
            <img src={data} alt="Data" />
            <p>04.05.2025</p>
          </li>
          <li>
            <img src={hora} alt="Horas" />
            <p>15:00</p>
          </li>
        </ul>

        <div className={styles.bar}></div>

        <div className={styles.container_foto}>
          <img className={styles.foto} src={foto} alt="Foto do local" />
        </div>
      </div>
    </div>
  );
};

export default Local;
