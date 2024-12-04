import React, { useState } from "react";

//Styles
import styles from "./Menu.module.css";

//Imagens
import monograma from "../images/monograma.png";
import burguer from "../images/burguer.png";
import fechar from "../images/fechar.png";

function Menu() {
  const [openMenu, setOpenMenu] = useState(false);

//   Abrindo Menu
    const handleOpenMenu = () => {
        setOpenMenu(!openMenu)
    }

  return (
    <>
      <nav className={`${styles.nav_menu} ${openMenu ? styles.menu_open : ""}`}>
        <img className={styles.monograma} src={monograma} alt="GL" />
        <ul className={`${styles.lista_menu}`}>
          <li className={`${styles.item_menu} ${openMenu ? styles.itens_active : ""}`}>
            <a href="#inicio">Início</a>
          </li>
          <li className={`${styles.item_menu} ${openMenu ? styles.itens_active : ""}`}>
            <a href="#confirm">Confirme sua presença</a>
          </li>
          <li className={`${styles.item_menu} ${openMenu ? styles.itens_active : ""}`}>
            <a href="https://noivos.casar.com/gabriel-e-luiza-2025-05-04#/one-page/_start">Presentes</a>
          </li>
          <li className={`${styles.item_menu} ${openMenu ? styles.itens_active : ""}`}>
            <a href="#local">Local</a>
          </li>
          <li className={`${styles.item_menu} ${openMenu ? styles.itens_active : ""}`}>
            <a href="#nossaHistoria">Nossa História</a>
          </li>
        </ul>
        <img
          className={`${styles.icone_menu} ${styles.burguer} ${
            openMenu ? styles.open : styles.close
          }`}
          src={burguer}
          alt="Menu"
          onClick={handleOpenMenu}
        />
        <img
          className={`${styles.icone_menu} ${styles.fechar} ${openMenu ? styles.close : styles.open}`}
          src={fechar}
          alt="Fechar"
          onClick={handleOpenMenu}
        />
      </nav>
    </>
  );
}

export default Menu;
