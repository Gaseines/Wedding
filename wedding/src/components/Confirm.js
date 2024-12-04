import React from "react";

//Styles
import styles from "./Confirm.module.css";

//Components
import Title from "./sub_components/Title";

function Confirm() {
  return (
    <div id="confirm" className={styles.container_confirm}>
      <Title name={"Confirme sua presença"} />
      <iframe
        allowtransparency="true"
        id="external-rsvp-iframe"
        className={styles.iframe}
        title="formulario rsvp"
        src="https://d26xexzcqyxhox.cloudfront.net/?eh=6623e2d0-4f5f-11ef-be6f-c18dbd86f364&amp;ff=Lato%2C+sans-serif&amp;tfs=15px&amp;tc=%23404951&amp;bfs=16px&amp;bc=%23ffffff&amp;bbc=%23bdb6ae&amp;fonts=https://fonts.googleapis.com/css?family=Lato:300,400,700"
      >
      </iframe>
    </div>
  );
}

export default Confirm;
