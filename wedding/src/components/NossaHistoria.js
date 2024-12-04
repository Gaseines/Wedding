import React from "react";

//Styles
import styles from "./NossaHistoria.module.css";

//images
import selo from '../images/monograma.png'
import foto from '../images/alianca.png'
import Title from "./sub_components/Title";

function NossaHistoria() {
  return (
    <div id="nossaHistoria" className={styles.container_nh}>
      <div className={styles.selo}>
        <img src={selo} alt="Selo" />
      </div>
      <img className={styles.foto} src={foto} alt="Gabriel e Luiza" />
      <div className={styles.nh}>
        <Title name={"Nossa Historia"}/>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam veritatis commodi sapiente magni quidem praesentium illum, atque tempora nihil esse quod perferendis. Nesciunt amet quis, molestias commodi aut dolores eius. Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi repellat illum possimus aliquam aperiam, corporis quibusdam distinctio similique adipisci aut et dicta numquam enim ad! Earum assumenda sapiente rem repellendus?</p>

        <a href="/">Continuar lendo...</a>
      </div>
    </div>
  );
}

export default NossaHistoria;
