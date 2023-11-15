import React, { useState, useEffect, useRef } from "react";
import { apifp } from "../../api/controllers/controllers.jsx";

export default function Create_user() {

 /*   const [info, setInfo] = useState("");
    const [btnSave, setBtnSaved] = useState(false);
    const infoRef = useRef(null);
    
    useEffect(() =>{
        if(btnSave){
            function subirdata(url){
                try{

                }
            }
        }
    })

    const vEmailValue = document.getElementById("vEmail").value;
    const vPasswordValue = document.getElementById("vPassword").value;

    const usuarioNuevo = {
        nombre: 'John Doe',
        correoElectronico: 'john.doe@example.com',
        contrasena: 'secreta123'
      };

    const [tuBooleano, setTuBooleano] = useState(false);*/
    return (
        
        <div className="flex flex-col justify-between items-center h-screen w-screen bg-cyan-200 p-20">
        <main className="h-96 w-9/12 bg-blue-500 md:bg-yellow-500 lg:bg-red-500 rounded-2xl p-4 lg:w-1/3 lg:h-56">
          CREACION DE USUARIO:
          <div>
            <div className="p-4">
              <label className="p-4" htmlFor="">Email</label>
              <input id="vEmail" type="user" />
            </div>
            <div className="p-4">
              <label className="p-4" htmlFor="">Password</label>
              <input id="vPassword" type="password" />
            </div>
            <div className="p-4">
              <label className="p-4" htmlFor="">Primer nombre</label>
              <input id="vfisrt_name" type="text" />
            </div>
            <div className="p-4">
              <label className="p-4" htmlFor="">Segundo nombre</label>
              <input id="vlast_name" type="text" />
            </div>
            <div className="p-4">
              <label className="p-4" htmlFor="">Administrador</label>
              {/*<input id="vadmin" type="checkbox" checked={tuBooleano} onChange={(e) => setTuBooleano(e.target.checked)} />*/}
            </div>
            <div className="p-4">
              {/*<button id="btn_login" className="bg-blue-500 border-white" onClick={()=> setBtnClicked(true)}>
                prueba
              </button>*/}
            </div>
          </div>
          {/*<div ref={infoRef} dangerouslySetInnerHTML={{ __html: info }} />*/}
        </main>
      </div>  
        );
    }
    