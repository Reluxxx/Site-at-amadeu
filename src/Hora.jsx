import React, { useState, useEffect } from "react";

function Data(){
  const [data, setData] = useState("");

  useEffect(() => {
    const atualizarHora = () => {
      const agora = new Date();
      const horas = agora.getHours().toString().padStart(2, '0');
      const minutes = agora.getMinutes().toString().padStart(2, '0');
      const seconds = agora.getSeconds().toString().padStart(2, '0');
      setData(`${horas}:${minutes}:${seconds}`);
    }

    atualizarHora();

    const intervalo = setInterval(atualizarHora, 1000);
    return () => clearInterval(intervalo);
  }, []);  

  return(
    <>
      <h1 className="data">{data}</h1>
    </>
  );
}

export default Data;