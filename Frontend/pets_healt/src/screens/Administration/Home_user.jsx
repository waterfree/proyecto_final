import React, { useState, useEffect, useRef } from "react";
import { apifp } from "../../api/controllers/controllers.jsx";

export default function Home_user() {
  const [info, setInfo] = useState("HOLA");
  const [btnClicked, setBtnClicked] = useState(false);
  const infoRef = useRef(null);

  useEffect(() => {
    if (btnClicked) {
      async function mostrarowners(url) {
        try {
          let objetoOwners = await apifp(url);
          // Obtén el valor del campo de usuario
          const vUserValue = document.getElementById("vUser").value;
          // Verifica si hay algún propietario con el mismo correo electrónico que el valor de vUser
          const isUserValid = objetoOwners.arrayowners.some((owner) => owner.email === vUserValue);

          if (isUserValid) {
            // Redirige a la URL deseada en caso de coincidencia
            window.location.href = "/";
          } else {
            // Muestra un mensaje de error en lugar de redirigir
            setInfo("Usuario o contraseña incorrectos");
          }
        } catch (error) {
          console.error("Error fetching owners:", error);
        }
      }
      mostrarowners("http://localhost:3000/getOwner");
      setBtnClicked(false);
    }
  }, [btnClicked]);

  return (
    <div className="flex flex-col justify-between items-center h-screen w-screen bg-cyan-200 p-20">
      <main className="h-96 w-9/12 bg-blue-500 md:bg-yellow-500 lg:bg-red-500 rounded-2xl p-4 lg:w-1/3 lg:h-56">
        CONTENIDO
        <div>
          <div className="p-4">
            <label htmlFor="">User</label>
            <input id="vUser" type="user" />
          </div>
          <div className="p-4">
            <label htmlFor="">Password</label>
            <input type="password" />
          </div>
          <div className="p-4">
            <button id="btn_login" className="bg-blue-500" onClick={()=> setBtnClicked(true)}>
              prueba
            </button>
          </div>
        </div>
        <div ref={infoRef} dangerouslySetInnerHTML={{ __html: info }} />
      </main>
    </div>
  );
}