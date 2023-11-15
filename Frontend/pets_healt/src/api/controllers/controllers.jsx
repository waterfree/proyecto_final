export async function apifp(url) {
  let url_in = url
  console.log("URL para buscar: ", url_in);
  let data_in = await fetch(url_in);
  let data_parseado = await data_in.json();

  console.log("Esta es la data parseada: ", data_parseado);
  let array_data = data_parseado.map((data) => ({
    id_user: data.id_user,
    password_user: data.password_user,
    email: data.email,
    u_first_name: data.u_first_name,
    u_last_name: data.u_last_name,
    administrator: data.administrator,
  }));

  console.log("Estos son los propietarios formateados: ", array_data);

  return {
    array_data: array_data,
  };
}

/*export function enviardata(url){
  let url_in = url
  fetch ('url', {
    method: 'POST',
    headers: {
      'Content-Type':'application/json'
    },
    body: JSON.stringify(usuarioNuevo)
  })
  .then(response => response.json())
  .then(data => {
    console.log('Usuario creado exitosamente:', data);
  })
  .catch(error => {
    console.error('Error al crear el usuario:', error);
  })
}*/