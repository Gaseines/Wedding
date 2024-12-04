import React, { useEffect, useState } from "react";

//Styles
import styles from "./Cronometro.module.css";

//Components
import Title from "./sub_components/Title";

function Cronometro() {
  const [tempo, setTempo] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const dateWedding = new Date("May 04, 2025 15:00:00").getTime();

    const intervalo = setInterval(() => {
      const agora = new Date().getTime();
      const diferenca = dateWedding - agora;

      if (diferenca < 0) {
        clearInterval(intervalo);
        setTempo({ message: "A contagem regressiva terminou" });
      } else {
        const days = Math.floor(diferenca / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (diferenca % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((diferenca % (1000 * 60)) / 1000);

        setTempo({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(intervalo); // Cleanup para evitar vazamento de memória
  }, []);

  return (
    <div className={styles.cronometro}>
      <div className={styles.cronometro_black}>
        <Title name={"Faltam apenas"} style={styles.titulo_timer} />
        <div className={styles.timer} id="countdown">
          {tempo.message ? (
            <Title name={tempo.message} />
          ) : (
            <>
              <div className={styles.box_timer} id="dias">
                {tempo.days} <br /> dias
              </div>
              <div className={styles.box_timer} id="horas">
                {tempo.hours} <br /> horas
              </div>
              <div className={styles.box_timer} id="minutos">
                {tempo.minutes} <br /> minutos
              </div>
              <div className={styles.box_timer} id="segundos">
                {tempo.seconds} <br /> segundos
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Cronometro;
